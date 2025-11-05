import React from "react";
import YouTube from "react-youtube";

const CooperationSection: React.FC = () => {
  const youTubeVideoId = "pOZZdPBLX3g";

  const playerOptions = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: youTubeVideoId,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <section className="">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
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
                href="/lienhe"
                className="inline-block bg-vietsov-green text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-vietsov-green/90 transition-colors duration-300 transform hover:scale-105 cursor-pointer"
              >
                Liên hệ chúng tôi
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
            <YouTube
              videoId={youTubeVideoId}
              opts={playerOptions}
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;
