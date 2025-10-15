import React from "react";
import videoIntro from "@/assets/video/vietsovintro.mov";

const CooperationSection: React.FC = () => {
  return (
    <section className="bg-white font-sans py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Hợp Tác Với Liên Doanh
              <br />
              Vietsovpetro
            </h2>
            <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Liên doanh Vietsovpetro (gọi tắt là Vietsovpetro) là pháp nhân hợp
              pháp của nước CHXHCN Việt Nam, được thành lập năm 1981, là đơn vị
              thành viên của Tập đoàn Dầu khí Quốc gia Việt Nam.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-green-700 transition-colors duration-300 transform hover:scale-105"
              >
                Liên hệ chúng tôi
              </a>
            </div>
          </div>

          <div className="w-full h-80 lg:h-full bg-green-200 rounded-2xl">
            <video
              src={videoIntro}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;
