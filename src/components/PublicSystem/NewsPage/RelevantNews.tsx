import React from "react";
import { CardFullDetailHori } from "@/components/Card";

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
              <CardFullDetailHori
                image={article.image}
                imageAlt={article.title}
                title={article.title}
                timestamp={article.timestamp}
                description={article.description}
                onClick={() => {
                  window.location.href = "/tintuc/chi-tiet";
                }}
              />
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
