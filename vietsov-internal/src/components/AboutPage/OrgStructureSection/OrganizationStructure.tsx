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
import { defaultLeaders } from "@/components/AboutPage/LeadershipSection/data";
import { LeadershipModal } from "@/components/AboutPage";
import { CardSimple } from "@/components/Card";
import type { Leader } from "@/components/AboutPage/LeadershipSection/data";

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
  onClose: () => void;
  onLeaderClick?: (leader: Leader) => void;
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
                ? "bg-gradient-to-br from-vietsov-green to-green-400 text-white font-semibold"
                : "bg-white border-2 border-vietsov-green text-vietsov-green"
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

const NodeModal: React.FC<NodeModalProps> = ({
  node,
  onClose,
  onLeaderClick,
}) => {
  if (!node) return null;

  const isLeadershipNode = node.id === "ban-tong-giam-doc";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20"
      onClick={onClose}
    >
      <div
        className={`node-modal bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 sm:p-8 ${
          isLeadershipNode
            ? "w-[90vw] max-w-6xl"
            : "w-[32rem] sm:w-[36rem] max-w-[90vw]"
        } max-h-[80vh] overflow-y-auto transform transition-all duration-300 ease-out animate-fade-scale-in`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient background */}
        <div className="flex justify-between items-start pb-4 border-b border-gray-100 mb-6">
          <div className="flex-1 pr-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
              {node.label}
            </h3>
            <div className="mt-2 w-12 h-1 bg-gradient-to-r from-vietsov-green to-green-400 rounded-full"></div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-200 flex-shrink-0 group"
            aria-label="Đóng"
          >
            <FiX
              size={20}
              className="group-hover:rotate-90 transition-transform duration-200"
            />
          </button>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {isLeadershipNode ? (
            <>
              {/* Description - Thông tin phòng ban */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-vietsov-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Thông tin phòng ban
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {node.detail ||
                        "Ban điều hành cao nhất, chịu trách nhiệm thực hiện các quyết định của Hội đồng liên doanh và quản lý hoạt động hàng ngày của công ty."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-units - Đơn vị trực thuộc */}
              {node.children && node.children.length > 0 && (
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-vietsov-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">
                        Đơn vị trực thuộc
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {node.children.map((child) => (
                          <div
                            key={child.id}
                            className="flex items-center space-x-2 p-2 bg-white rounded-lg border border-gray-100 hover:border-green-200 transition-colors"
                          >
                            <div className="w-2 h-2 bg-vietsov-green rounded-full"></div>
                            <span className="text-sm text-gray-700">
                              {child.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Leadership Grid - Ban lãnh đạo */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  Ban lãnh đạo
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {defaultLeaders.map((leader) => (
                    <div
                      key={leader.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onLeaderClick) {
                          onLeaderClick(leader);
                        }
                      }}
                      className="cursor-pointer"
                    >
                      <CardSimple
                        imageUrl={leader.image}
                        imageAlt={leader.name}
                        position={leader.title}
                        name={leader.name}
                        className="h-full hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Description */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-vietsov-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                  Thông tin phòng ban
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {node.detail ||
                    "Thông tin chi tiết về phòng ban này đang được cập nhật. Vui lòng liên hệ với bộ phận nhân sự để biết thêm thông tin."}
                </p>
              </div>
            </div>
          </div>

              {/* Sub-units */}
              {node.children && node.children.length > 0 && (
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-vietsov-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Đơn vị trực thuộc
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {node.children.map((child) => (
                      <div
                        key={child.id}
                        className="flex items-center space-x-2 p-2 bg-white rounded-lg border border-gray-100 hover:border-green-200 transition-colors"
                      >
                        <div className="w-2 h-2 bg-vietsov-green rounded-full"></div>
                        <span className="text-sm text-gray-700">
                          {child.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

              {/* Action Button */}
              {node.url && (
                <div className="pt-2">
                  <a
                    href={node.url}
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-vietsov-green to-green-400 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
                  >
                    <span>Xem thêm thông tin</span>
                    <FiArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              )}
            </>
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
  const [isLeadershipModalOpen, setIsLeadershipModalOpen] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<Leader | undefined>(
    undefined
  );

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
      line1.setAttribute("stroke", "#22c55e");
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

  const handleNodeClick = (nodeId: string) => {
    setActiveNodeId((prevId) => (prevId === nodeId ? null : nodeId));

    // Find the node data
    const nodeData = findNodeById(orgChartData, nodeId);
    if (nodeData) {
      // Get the actual node element from refs
      const nodeRef = nodeRefs.current.get(nodeId);
      const nodeElement = nodeRef?.current?.getElement();

      if (!nodeElement) return;

      // Get node position relative to viewport

      setModalNode(nodeData);
    }
  };

  const handleCloseModal = () => {
    setModalNode(null);
  };

  const handleLeaderClick = (leader: Leader) => {
    setSelectedLeader(leader);
    setIsLeadershipModalOpen(true);
    // Keep node modal open when opening leadership modal
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
        onClose={handleCloseModal}
        onLeaderClick={handleLeaderClick}
      />

      {/* Leadership Modal */}
      <LeadershipModal
        isOpen={isLeadershipModalOpen}
        onClose={() => setIsLeadershipModalOpen(false)}
        leader={selectedLeader}
      />
    </div>
  );
};

export default OrganizationStructure;
