// src/components/RelatedNewsSection.tsx
import React from "react";

import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const relatedArticles = [
  {
    id: 1,
    title:
      "Chương trình hợp tác giữa Vietsovpetro và PVU: Bước tiến mới thúc đẩy nghiên cứu khoa học và phát triển nguồn nhân lực Dầu khí",
    timestamp: "11:50 03/10/2024",
    description:
      "Nằm trong chương trình hợp tác thường niên trong lĩnh vực đào tạo giữa Tập đoàn Dầu khí Việt Nam (Petrovie...",
    image: danKhoanVietsov,
  },
  {
    id: 2,
    title:
      "Xí nghiệp Địa vật lý giếng khoan sẽ chia khó khăn cùng đồng bào chịu ảnh hưởng bão Yagi",
    timestamp: "11:50 03/10/2024",
    description:
      "Đã phát hiện 9 mỏ dầu có giá trị thương mại và nhiều cấu tạo chứa dầu, trong đó đặc biệt mỏ Bạch Hổ là mỏ l...",
    image: daiHoiDaiBieu,
  },
  {
    id: 3,
    title:
      "Đoàn thanh niên và Ban nữ công Trung tâm CNTT&LL tổ chức chương trình an sinh xã hội “Chia sẻ yêu thương – Tiếp bước đến trường”",
    timestamp: "11:50 03/10/2024",
    description:
      "Ban nữ công Trung tâm CNTT&LL tổ chức chương trình an sinh xã hội “Chia sẻ yêu thương – Tiếp bước đến trư...",
    image: hoiNghiSuKien,
  },
  {
    id: 4,
    title:
      "Xí nghiệp Địa vật lý giếng khoan sẽ chia khó khăn cùng đồng bào chịu ảnh hưởng bão Yagi",
    timestamp: "11:50 03/10/2024",
    description:
      "Bão Yagi (bão số 3) với sức tàn phá khủng khiếp, cùng với hoàn lưu của bão đã khiến đồng bằng và vùng núi c...",
    image: hoiNghiPetro,
  },
];

const RelevantNews: React.FC = () => {
  return (
    <section className="bg-white font-sans py-6">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Tin liên quan</h2>

        <div className="space-y-6">
          {relatedArticles.map((article, index) => (
            <React.Fragment key={article.id}>
              <article className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-40 h-24 object-cover rounded-md"
                  />
                </div>
                {/* Text Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    <a href="#">{article.title}</a>
                  </h3>
                  <time className="text-sm text-gray-500 my-1 block">
                    {article.timestamp}
                  </time>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {article.description}
                  </p>
                </div>
              </article>
              {/* Add a separator line, but not after the last item */}
              {index < relatedArticles.length - 1 && (
                <hr className="border-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelevantNews;
