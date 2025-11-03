import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  FiChevronDown,
  FiX,
  FiCheck,
  FiSearch,
  FiLoader,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export interface SelectOption<T = unknown> {
  value: T;
  label: string;
  disabled?: boolean;
  group?: string;
  [key: string]: unknown;
}

export interface SelectProps<T = unknown> {
  // Basic props
  options: SelectOption<T>[];
  value?: T | T[];
  onChange?: (value: T | T[] | null) => void;
  onBlur?: () => void;

  // Multi-select
  multiple?: boolean;

  // Search
  searchable?: boolean;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;

  // Async data loading
  async?: boolean;
  isLoading?: boolean;
  loadOptions?: (query: string) => Promise<SelectOption<T>[]>;

  // Customization
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  optionClassName?: string;
  renderOption?: (
    option: SelectOption<T>,
    isSelected: boolean
  ) => React.ReactNode;
  renderValue?: (
    value: T | T[] | null,
    options: SelectOption<T>[]
  ) => React.ReactNode;

  // UI
  clearable?: boolean;
  maxHeight?: string;
  width?: string;

  // Grouping
  groupBy?: (option: SelectOption<T>) => string | null;

  // Empty states
  emptyMessage?: string;
  noResultsMessage?: string;

  // Accessibility
  id?: string;
  name?: string;
  ariaLabel?: string;
}

const Select = <T,>({
  options: initialOptions,
  value,
  onChange,
  onBlur,
  multiple = false,
  searchable = false,
  searchPlaceholder = "Tìm kiếm...",
  onSearch,
  async = false,
  isLoading = false,
  loadOptions,
  placeholder = "Chọn...",
  disabled = false,
  className = "",
  optionClassName = "",
  renderOption,
  renderValue,
  clearable = true,
  maxHeight = "300px",
  width,
  groupBy,
  emptyMessage = "Không có tùy chọn",
  noResultsMessage = "Không tìm thấy kết quả",
  id,
  name,
  ariaLabel,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [asyncOptions, setAsyncOptions] =
    useState<SelectOption<T>[]>(initialOptions);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const optionsRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Use async options if async mode, otherwise use initial options
  const options = async ? asyncOptions : initialOptions;

  // Filter options based on search query
  const filteredOptions = useMemo(() => {
    if (!searchQuery) return options;
    const query = searchQuery.toLowerCase();
    return options.filter((option) =>
      option.label.toLowerCase().includes(query)
    );
  }, [options, searchQuery]);

  // Group options if groupBy is provided
  const groupedOptions = useMemo(() => {
    if (!groupBy) return { ungrouped: filteredOptions };
    const grouped: Record<string, SelectOption<T>[]> = {};
    filteredOptions.forEach((option) => {
      const group = groupBy(option) || "ungrouped";
      if (!grouped[group]) grouped[group] = [];
      grouped[group].push(option);
    });
    return grouped;
  }, [filteredOptions, groupBy]);

  // Check if option is selected
  const isSelected = useCallback(
    (optionValue: T): boolean => {
      if (multiple && Array.isArray(value)) {
        return value.some(
          (v) => JSON.stringify(v) === JSON.stringify(optionValue)
        );
      }
      return JSON.stringify(value) === JSON.stringify(optionValue);
    },
    [value, multiple]
  );

  // Handle option click
  const handleOptionClick = useCallback(
    (option: SelectOption<T>) => {
      if (option.disabled) return;

      if (multiple) {
        const currentValue = Array.isArray(value) ? value : [];
        const isCurrentlySelected = isSelected(option.value);

        if (isCurrentlySelected) {
          const newValue = currentValue.filter(
            (v) => JSON.stringify(v) !== JSON.stringify(option.value)
          );
          onChange?.(newValue.length > 0 ? newValue : null);
        } else {
          onChange?.([...currentValue, option.value]);
        }
      } else {
        onChange?.(option.value);
        setIsOpen(false);
        setSearchQuery("");
      }
    },
    [multiple, value, onChange, isSelected]
  );

  // Handle clear
  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange?.(null);
      setSearchQuery("");
    },
    [onChange]
  );

  // Handle search
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearchQuery(query);
      onSearch?.(query);

      // Load async options if async mode
      if (async && loadOptions && query) {
        loadOptions(query).then(setAsyncOptions);
      }
    },
    [onSearch, async, loadOptions]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const flatOptions = Object.values(groupedOptions).flat();

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setFocusedIndex((prev) =>
            prev < flatOptions.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case "Enter":
          e.preventDefault();
          if (focusedIndex >= 0 && flatOptions[focusedIndex]) {
            handleOptionClick(flatOptions[focusedIndex]);
          }
          break;
        case "Escape":
          setIsOpen(false);
          setSearchQuery("");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, focusedIndex, groupedOptions, handleOptionClick]);

  // Scroll focused option into view
  useEffect(() => {
    if (focusedIndex >= 0 && optionsRefs.current[focusedIndex]) {
      optionsRefs.current[focusedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [focusedIndex]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery("");
        onBlur?.();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Focus search input when opened
      if (searchable && searchInputRef.current) {
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, searchable, onBlur]);

  // Reset focused index when options change
  useEffect(() => {
    setFocusedIndex(-1);
  }, [searchQuery, options]);

  // Render selected value
  const renderSelectedValue = () => {
    if (renderValue) {
      return renderValue(value ?? null, options);
    }

    if (!value || (Array.isArray(value) && value.length === 0)) {
      return <span className="text-gray-500">{placeholder}</span>;
    }

    if (multiple && Array.isArray(value)) {
      const selectedOptions = options.filter((opt) =>
        value.some((v) => JSON.stringify(v) === JSON.stringify(opt.value))
      );
      if (selectedOptions.length === 0) {
        return <span className="text-gray-500">{placeholder}</span>;
      }
      if (selectedOptions.length === 1) {
        return (
          <span className="text-gray-900">{selectedOptions[0].label}</span>
        );
      }
      return (
        <span className="text-gray-900">
          {selectedOptions.length} mục đã chọn
        </span>
      );
    }

    const selectedOption = options.find(
      (opt) => JSON.stringify(opt.value) === JSON.stringify(value)
    );
    return selectedOption ? (
      <span className="text-gray-900">{selectedOption.label}</span>
    ) : (
      <span className="text-gray-500">{placeholder}</span>
    );
  };

  // Render option
  const renderOptionContent = (
    option: SelectOption<T>,
    isSelected: boolean
  ) => {
    if (renderOption) {
      return renderOption(option, isSelected);
    }
    return (
      <span className={option.disabled ? "text-gray-400" : "text-gray-900"}>
        {option.label}
      </span>
    );
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative ${width ? "" : "w-full"} ${className}`}
      style={{ width }}
    >
      {/* Select Trigger */}
      <button
        type="button"
        id={id}
        name={name}
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between gap-2 px-3 py-2.5
          bg-white border border-gray-300 rounded-lg
          text-sm text-left
          focus:outline-none focus:ring-2 focus:ring-vietsov-green focus:border-transparent
          transition-colors
          ${
            disabled
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:border-gray-400"
          }
        `}
      >
        <span className="flex-1 min-w-0 truncate">{renderSelectedValue()}</span>
        <div className="flex items-center gap-1 flex-shrink-0">
          {clearable && value !== null && value !== undefined && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Xóa lựa chọn"
            >
              <FiX size={16} className="text-gray-400" />
            </button>
          )}
          <FiChevronDown
            size={18}
            className={`text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg"
            style={{ maxHeight }}
            role="listbox"
          >
            {/* Search Input */}
            {searchable && (
              <div className="p-2 border-b border-gray-200">
                <div className="relative">
                  <FiSearch
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder={searchPlaceholder}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vietsov-green focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-8">
                <FiLoader
                  className="animate-spin text-vietsov-green"
                  size={24}
                />
              </div>
            )}

            {/* Options List */}
            {!isLoading && (
              <div
                className="overflow-y-auto"
                style={{
                  maxHeight: `calc(${maxHeight} - ${
                    searchable ? "60px" : "0px"
                  })`,
                }}
              >
                {Object.keys(groupedOptions).length === 0 ||
                Object.values(groupedOptions).every(
                  (group) => group.length === 0
                ) ? (
                  <div className="px-3 py-6 text-center text-sm text-gray-500">
                    {searchQuery ? noResultsMessage : emptyMessage}
                  </div>
                ) : (
                  Object.entries(groupedOptions).map(
                    ([groupName, groupOptions]) => (
                      <div key={groupName}>
                        {groupBy && groupName !== "ungrouped" && (
                          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase bg-gray-50">
                            {groupName}
                          </div>
                        )}
                        {groupOptions.map((option, index) => {
                          const flatIndex =
                            Object.values(groupedOptions)
                              .slice(
                                0,
                                Object.keys(groupedOptions).indexOf(groupName)
                              )
                              .reduce(
                                (acc, prevGroup) => acc + prevGroup.length,
                                0
                              ) + index;
                          const selected = isSelected(option.value);
                          const focused = focusedIndex === flatIndex;

                          return (
                            <div
                              key={JSON.stringify(option.value)}
                              ref={(el) => {
                                optionsRefs.current[flatIndex] = el;
                              }}
                              onClick={() => handleOptionClick(option)}
                              className={`
                              px-3 py-2.5 cursor-pointer text-sm flex items-center justify-between gap-2
                              transition-colors
                              ${
                                option.disabled
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }
                              ${
                                focused
                                  ? "bg-vietsov-green/10"
                                  : "hover:bg-gray-50"
                              }
                              ${selected ? "bg-vietsov-green/5" : ""}
                              ${optionClassName}
                            `}
                              role="option"
                              aria-selected={selected}
                            >
                              <div className="flex-1 min-w-0">
                                {renderOptionContent(option, selected)}
                              </div>
                              {multiple && (
                                <div
                                  className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${
                                    selected
                                      ? "bg-vietsov-green border-vietsov-green"
                                      : "border-gray-300"
                                  }`}
                                >
                                  {selected && (
                                    <FiCheck size={14} className="text-white" />
                                  )}
                                </div>
                              )}
                              {!multiple && selected && (
                                <FiCheck
                                  size={18}
                                  className="text-vietsov-green flex-shrink-0"
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )
                  )
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Select;
