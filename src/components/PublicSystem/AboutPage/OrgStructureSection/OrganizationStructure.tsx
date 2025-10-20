import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  createRef,
  forwardRef,
  useImperativeHandle,
} from "react";

import { FiX, FiArrowRight } from "react-icons/fi";

interface OrgNodeData {
  id: string;
  label: string;
  variant?: "blue";
  detail?: string;
  url?: string;
  children?: OrgNodeData[];
}

interface OrgNodeRef {
  getElement: () => HTMLDivElement | null;
}

interface OrgNodeProps {
  data: OrgNodeData;
  onClick: (nodeId: string, event: React.MouseEvent) => void;
  isActive: boolean;
}

interface NodeModalProps {
  node: OrgNodeData | null;
  position: { x: number; y: number } | null;
  onClose: () => void;
}

const OrgNode = forwardRef<OrgNodeRef, OrgNodeProps>(
  ({ data, onClick, isActive }, ref) => {
    const nodeRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      getElement: () => nodeRef.current,
    }));

    const isBlueVariant = data.variant === "blue";

    return (
      <div
        ref={nodeRef}
        onClick={(e) => onClick(data.id, e)}
        className={`
            relative px-6 py-4 rounded-lg cursor-pointer transition-all duration-200
            ${
              isBlueVariant
                ? "bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-semibold"
                : "bg-white border-2 border-blue-400 text-blue-600"
            }
            ${isActive ? "ring-4 ring-yellow-400 scale-105" : "hover:scale-105"}
            shadow-md hover:shadow-lg
            min-w-[200px] max-w-[280px] text-center
          `}
        style={{ zIndex: 1 }}
      >
        {/* Decorative top bar for blue variant */}
        {isBlueVariant && (
          <div className="absolute top-2 left-4 right-4 h-1 bg-white/30 rounded-full" />
        )}

        <div className="text-sm leading-tight">{data.label}</div>
      </div>
    );
  }
);

OrgNode.displayName = "OrgNode";

const NodeModal: React.FC<NodeModalProps> = ({ node, position, onClose }) => {
  if (!node || !position) return null;

  return (
    <div className="fixed inset-0 z-40" onClick={onClose}>
      <div
        className="node-modal fixed z-50 bg-white border border-gray-200 rounded-xl shadow-2xl p-4 sm:p-6 w-80 sm:w-96 animate-fade-scale-in"
        style={{
          left: position.x,
          top: position.y,
          transform: "translateY(-50%)",
          maxWidth: "90vw", // Ensure it doesn't exceed viewport width
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start pb-3 border-b border-gray-200">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 pr-2 sm:pr-4">
            {node.label}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-800 transition-colors flex-shrink-0"
            aria-label="Đóng"
          >
            <FiX size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
          {node.detail && (
            <div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {node.detail}
              </p>
            </div>
          )}

          {node.children && node.children.length > 0 && (
            <div>
              <span className="text-xs sm:text-sm font-semibold text-gray-800">
                Đơn vị trực thuộc:
              </span>
              <ul className="mt-1 sm:mt-2 space-y-1 list-disc list-inside">
                {node.children.map((child) => (
                  <li
                    key={child.id}
                    className="text-xs sm:text-sm text-gray-600"
                  >
                    {child.label}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {node.url && (
            <div className="pt-1 sm:pt-2">
              <a
                href={node.url}
                className="inline-flex items-center text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 group"
              >
                Xem thêm
                <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const orgChartData: OrgNodeData = {
  id: "root",
  label: "Hội đồng liên doanh Vietsovpetro",
  variant: "blue",
  detail:
    "Cơ quan quản lý cao nhất của liên doanh Vietsovpetro, chịu trách nhiệm về các quyết định chiến lược và định hướng phát triển của công ty.",
  url: "/gioithieu/ban-lanh-dao",
  children: [
    {
      id: "ban-tong-giam-doc",
      label: "Ban Tổng Giám đốc",
      variant: "blue",
      detail:
        "Ban điều hành cao nhất, chịu trách nhiệm thực hiện các quyết định của Hội đồng liên doanh và quản lý hoạt động hàng ngày của công ty.",
      children: [
        {
          id: "bo-may-dieu-hanh",
          label: "Bộ máy điều hành",
          variant: "blue",
          children: [
            {
              id: "phong-ky-thuat-san-xuat-bm",
              label: "Phòng Kỹ thuật sản xuất",
            },
            { id: "phong-to-chuc-nhan-su-bm", label: "Phòng Tổ chức nhân sự" },
            {
              id: "phong-dia-chat-khai-thac-mo-bm",
              label: "Phòng Địa chất khai thác mỏ",
            },
            {
              id: "phong-tai-chinh-ke-toan-bm",
              label: "Phòng Tài chính kế toán",
            },
            {
              id: "phong-khoan-va-sua-chua-gieng-khoan-bm",
              label: "Phòng Khoan và sửa chữa lớn giếng khoan",
            },
            {
              id: "phong-kinh-te-ke-hoach-bm",
              label: "Phòng Kinh tế kế hoạch",
            },
            { id: "phong-thuong-mai-bm", label: "Phòng Thương mại" },
            {
              id: "phong-khai-thac-tau-bien-van-tai-cong-nghe-bm",
              label: "Phòng Khai thác tàu biển và vận tải công nghệ",
            },
            { id: "van-phong-bm", label: "Văn phòng" },
            {
              id: "ban-dieu-do-san-xuat-trung-tam-bm",
              label: "Ban Điều độ sản xuất trung tâm",
            },
            {
              id: "phong-thanh-tra-bao-ve-bm",
              label: "Phòng Thanh tra & Bảo vệ",
            },
            {
              id: "phong-tiep-thi-dich-vu-bm",
              label: "Phòng Tiếp thị dịch vụ",
            },
            { id: "phong-phap-che-bm", label: "Phòng Pháp chế" },
            {
              id: "phong-an-toan-suc-khoe-moi-truong-bm",
              label: "Phòng An toàn sức khỏe và môi trường",
            },
            {
              id: "phong-quan-ly-rui-ro-bao-hiem-bm",
              label: "Phòng Quản lý rủi ro và Bảo hiểm",
            },
            { id: "ban-thanh-tra-bm", label: "Ban Thanh tra" },
          ],
        },
        {
          id: "don-vi-truc-thuoc",
          label: "Đơn vị trực thuộc",
          variant: "blue",
          children: [
            {
              id: "phong-ky-thuat-san-xuat-dv",
              label: "Phòng Kỹ thuật sản xuất",
            },
            { id: "phong-to-chuc-nhan-su-dv", label: "Phòng Tổ chức nhân sự" },
            {
              id: "phong-dia-chat-khai-thac-mo-dv",
              label: "Phòng Địa chất khai thác mỏ",
            },
            {
              id: "phong-tai-chinh-ke-toan-dv",
              label: "Phòng Tài chính kế toán",
            },
            {
              id: "phong-khoan-va-sua-chua-gieng-khoan-dv",
              label: "Phòng Khoan và sửa chữa lớn giếng khoan",
            },
            {
              id: "phong-kinh-te-ke-hoach-dv",
              label: "Phòng Kinh tế kế hoạch",
            },
            { id: "phong-thuong-mai-dv", label: "Phòng Thương mại" },
            {
              id: "phong-khai-thac-tau-bien-van-tai-cong-nghe-dv",
              label: "Phòng Khai thác tàu biển và vận tải công nghệ",
            },
            { id: "van-phong-dv", label: "Văn phòng" },
            {
              id: "ban-dieu-do-san-xuat-trung-tam-dv",
              label: "Ban Điều độ sản xuất trung tâm",
            },
            {
              id: "phong-thanh-tra-bao-ve-dv",
              label: "Phòng Thanh tra & Bảo vệ",
            },
            {
              id: "phong-tiep-thi-dich-vu-dv",
              label: "Phòng Tiếp thị dịch vụ",
            },
            { id: "phong-phap-che-dv", label: "Phòng Pháp chế" },
            {
              id: "phong-an-toan-suc-khoe-moi-truong-dv",
              label: "Phòng An toàn sức khỏe và môi trường",
            },
            {
              id: "phong-quan-ly-rui-ro-bao-hiem-dv",
              label: "Phòng Quản lý rủi ro và Bảo hiểm",
            },
            { id: "ban-thanh-tra-dv", label: "Ban Thanh tra" },
          ],
        },
      ],
    },
  ],
};

// Helper function to find node by ID
const findNodeById = (node: OrgNodeData, id: string): OrgNodeData | null => {
  if (node.id === id) return node;
  if (node.children) {
    for (const child of node.children) {
      const found = findNodeById(child, id);
      if (found) return found;
    }
  }
  return null;
};

const renderNodes = (
  nodes: OrgNodeData[],
  level: number,
  refs: React.MutableRefObject<Map<string, React.RefObject<OrgNodeRef | null>>>,
  onNodeClick: (nodeId: string, event: React.MouseEvent) => void,
  activeNodeId: string | null
) => {
  if (level === 3 && nodes.length > 1) {
    const midPoint = Math.ceil(nodes.length / 2);
    const firstColumn = nodes.slice(0, midPoint);
    const secondColumn = nodes.slice(midPoint);

    return (
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-6">
        <div className="flex flex-col items-center space-y-4">
          {firstColumn.map((node) => {
            if (!refs.current.has(node.id)) {
              refs.current.set(node.id, createRef<OrgNodeRef | null>());
            }
            return (
              <OrgNode
                key={node.id}
                ref={refs.current.get(node.id)!}
                data={node}
                onClick={(nodeId, event) => onNodeClick(nodeId, event)}
                isActive={activeNodeId === node.id}
              />
            );
          })}
        </div>

        <div className="flex flex-col items-center space-y-4">
          {secondColumn.map((node) => {
            if (!refs.current.has(node.id)) {
              refs.current.set(node.id, createRef<OrgNodeRef | null>());
            }
            return (
              <OrgNode
                key={node.id}
                ref={refs.current.get(node.id)!}
                data={node}
                onClick={(nodeId, event) => onNodeClick(nodeId, event)}
                isActive={activeNodeId === node.id}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex justify-center w-full relative"
      style={{
        gap: level === 2 ? "24px" : "48px",
        marginTop: level === 1 ? "40px" : level === 2 ? "60px" : "0px",
      }}
    >
      {nodes.map((node) => {
        if (!refs.current.has(node.id)) {
          refs.current.set(node.id, createRef<OrgNodeRef | null>());
        }
        const nodeRef = refs.current.get(node.id)!;

        return (
          <div key={node.id} className="flex flex-col items-center">
            <OrgNode
              ref={nodeRef}
              data={node}
              onClick={onNodeClick}
              isActive={activeNodeId === node.id}
            />
            {node.children &&
              node.children.length > 0 &&
              renderNodes(
                node.children,
                level + 1,
                refs,
                onNodeClick,
                activeNodeId
              )}
          </div>
        );
      })}
    </div>
  );
};

// Main Organization Structure Component
const OrganizationStructure = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef(
    new Map<string, React.RefObject<OrgNodeRef | null>>()
  );
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [modalNode, setModalNode] = useState<OrgNodeData | null>(null);
  const [modalPosition, setModalPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const calculateConnectorLines = useCallback(() => {
    const svg = chartContainerRef.current?.querySelector("svg");
    if (!svg) return;

    svg.innerHTML = "";

    nodeRefs.current.forEach((ref, nodeId) => {
      const nodeElement = ref.current?.getElement();
      if (!nodeElement) return;

      const nodeData = findNodeById(orgChartData, nodeId);
      if (!nodeData?.children || nodeData.children.length === 0) return;

      const parentRect = nodeElement.getBoundingClientRect();
      const containerRect = chartContainerRef.current!.getBoundingClientRect();

      const parentX =
        parentRect.left + parentRect.width / 2 - containerRect.left;
      const parentY = parentRect.bottom - containerRect.top;

      const childPositions = nodeData.children
        .map((child) => {
          const childRef = nodeRefs.current.get(child.id);
          const childElement = childRef?.current?.getElement();
          if (!childElement) return null;

          const childRect = childElement.getBoundingClientRect();
          return {
            x: childRect.left + childRect.width / 2 - containerRect.left,
            y: childRect.top - containerRect.top,
          };
        })
        .filter((pos) => pos !== null);

      if (childPositions.length === 0) return;

      const verticalLineLength = 30;
      const line1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      line1.setAttribute("x1", parentX.toString());
      line1.setAttribute("y1", parentY.toString());
      line1.setAttribute("x2", parentX.toString());
      line1.setAttribute("y2", (parentY + verticalLineLength).toString());
      line1.setAttribute("stroke", "#60a5fa");
      line1.setAttribute("stroke-width", "2");
      svg.appendChild(line1);

      if (childPositions.length === 1) {
        const childPos = childPositions[0]!;
        const line2 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        line2.setAttribute("x1", parentX.toString());
        line2.setAttribute("y1", (parentY + verticalLineLength).toString());
        line2.setAttribute("x2", childPos.x.toString());
        line2.setAttribute("y2", childPos.y.toString());
        line2.setAttribute("stroke", "#60a5fa");
        line2.setAttribute("stroke-width", "2");
        svg.appendChild(line2);
      } else {
        const leftmostX = Math.min(...childPositions.map((p) => p!.x));
        const rightmostX = Math.max(...childPositions.map((p) => p!.x));
        const horizontalY = parentY + verticalLineLength;

        const horizontalLine = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        horizontalLine.setAttribute("x1", leftmostX.toString());
        horizontalLine.setAttribute("y1", horizontalY.toString());
        horizontalLine.setAttribute("x2", rightmostX.toString());
        horizontalLine.setAttribute("y2", horizontalY.toString());
        horizontalLine.setAttribute("stroke", "#60a5fa");
        horizontalLine.setAttribute("stroke-width", "2");
        svg.appendChild(horizontalLine);

        childPositions.forEach((childPos) => {
          const verticalLine = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
          );
          verticalLine.setAttribute("x1", childPos!.x.toString());
          verticalLine.setAttribute("y1", horizontalY.toString());
          verticalLine.setAttribute("x2", childPos!.x.toString());
          verticalLine.setAttribute("y2", childPos!.y.toString());
          verticalLine.setAttribute("stroke", "#60a5fa");
          verticalLine.setAttribute("stroke-width", "2");
          svg.appendChild(verticalLine);
        });
      }
    });
  }, []);

  const handleNodeClick = (nodeId: string, event: React.MouseEvent) => {
    setActiveNodeId((prevId) => (prevId === nodeId ? null : nodeId));

    // Find the node data
    const nodeData = findNodeById(orgChartData, nodeId);
    if (nodeData) {
      // Get click position
      const rect = (event.target as HTMLElement).getBoundingClientRect();

      // Calculate available space
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Modal dimensions (approximate)
      const modalWidth = Math.min(384, viewportWidth * 0.9); // w-96 = 24rem = 384px, but responsive
      const modalHeight = 200; // approximate height
      const padding = 20; // padding from screen edge

      // Determine horizontal position
      let x: number;
      const spaceOnRight = viewportWidth - rect.right;
      const spaceOnLeft = rect.left;

      if (spaceOnRight >= modalWidth + padding) {
        // Enough space on the right
        x = rect.right + 10;
      } else if (spaceOnLeft >= modalWidth + padding) {
        // Not enough space on right, but enough on left
        x = rect.left - modalWidth - 10;
      } else {
        // Not enough space on either side, center horizontally
        x = Math.max(padding, (viewportWidth - modalWidth) / 2);
      }

      // Determine vertical position
      let y: number;
      const spaceBelow = viewportHeight - rect.top;
      const spaceAbove = rect.bottom;

      if (spaceBelow >= modalHeight + padding) {
        // Enough space below
        y = rect.top + rect.height / 2;
      } else if (spaceAbove >= modalHeight + padding) {
        // Not enough space below, but enough above
        y = rect.top + rect.height / 2;
      } else {
        // Not enough space above or below, center vertically
        y = Math.max(padding, (viewportHeight - modalHeight) / 2);
      }

      setModalPosition({ x, y });
      setModalNode(nodeData);
    }
  };

  const handleCloseModal = () => {
    setModalNode(null);
    setModalPosition(null);
  };

  useEffect(() => {
    const timeout = setTimeout(calculateConnectorLines, 100);
    const observer = new ResizeObserver(calculateConnectorLines);
    if (chartContainerRef.current) {
      observer.observe(chartContainerRef.current);
    }
    window.addEventListener("scroll", calculateConnectorLines);
    window.addEventListener("resize", calculateConnectorLines);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
      window.removeEventListener("scroll", calculateConnectorLines);
      window.removeEventListener("resize", calculateConnectorLines);
    };
  }, [calculateConnectorLines]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalNode && !(event.target as Element).closest(".node-modal")) {
        handleCloseModal();
      }
    };

    if (modalNode) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalNode]);

  return (
    <div className="relative p-8 overflow-x-auto">
      <div
        ref={chartContainerRef}
        className="relative flex flex-col items-center"
      >
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        />
        {renderNodes(
          [orgChartData],
          0,
          nodeRefs,
          handleNodeClick,
          activeNodeId
        )}
      </div>

      {/* Node Modal */}
      <NodeModal
        node={modalNode}
        position={modalPosition}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default OrganizationStructure;
