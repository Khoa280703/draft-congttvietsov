import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TextMorphingProps {
  text: string;
  morphKey: string | number;
  className?: string;
}

const TextMorphing: React.FC<TextMorphingProps> = ({
  text,
  morphKey,
  className = "",
}) => {
  const [prevText, setPrevText] = useState(text);
  const [isScattering, setIsScattering] = useState(false);

  useEffect(() => {
    if (prevText !== text) {
      // Bắt đầu scatter text cũ
      setIsScattering(true);
      // Sau khi scatter xong, bắt đầu assemble text mới
      const scatterTimeout = setTimeout(() => {
        setIsScattering(false);
        setPrevText(text);
      }, 500);
      return () => clearTimeout(scatterTimeout);
    }
  }, [text, prevText]);

  // Tạo random values cho mỗi ký tự (cố định dựa trên morphKey và index)
  const getRandomValues = (index: number) => {
    const seed = (morphKey as number) * 1000 + index;
    // Tạo pseudo-random number từ seed
    const random = (offset: number = 0) => {
      const value = Math.sin((seed + offset) * 12.9898) * 43758.5453;
      return value - Math.floor(value);
    };
    // Random delay nhỏ để tạo hiệu ứng tự nhiên hơn (0-0.1s)
    const randomDelay = random(10) * 0.1;
    return {
      x: (random(0) - 0.5) * 400,
      y: (random(1) - 0.5) * 400,
      rotate: (random(2) - 0.5) * 1080,
      delay: randomDelay,
    };
  };

  // Tách text thành CÁC TỪ và KHOẢNG TRẮNG, giữ lại khoảng trắng
  // Ví dụ: "Hello world" -> ["Hello", " ", "world"]
  const elements = text.split(/(\s+)/);
  let charIndex = 0; // Index ký tự toàn cục cho animation

  return (
    <span className={`inline ${className}`}>
      {elements.map((element, elementIndex) => {
        // Nếu là khoảng trắng, chỉ render nó (cho phép ngắt dòng)
        if (/^\s+$/.test(element)) {
          return <span key={elementIndex}>{"\u00A0"}</span>;
        }

        // Nếu là MỘT TỪ, bọc nó trong 1 span inline-block
        return (
          <span key={elementIndex} className="inline-block">
            {element.split("").map((char) => {
              const randomValues = getRandomValues(charIndex);
              const key = `${morphKey}-${charIndex}-${char}-${
                isScattering ? "scatter" : "assemble"
              }`;
              charIndex++; // Tăng index toàn cục

              return (
                <motion.span
                  key={key}
                  className="inline-block" // Bọc KÝ TỰ
                  initial={
                    isScattering
                      ? {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          rotate: 0,
                          scale: 1,
                        }
                      : {
                          opacity: 0,
                          x: randomValues.x,
                          y: randomValues.y,
                          rotate: randomValues.rotate,
                          scale: 0.5,
                        }
                  }
                  animate={
                    isScattering
                      ? {
                          opacity: 0,
                          x: randomValues.x,
                          y: randomValues.y,
                          rotate: randomValues.rotate,
                          scale: 0.3,
                        }
                      : {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          rotate: 0,
                          scale: 1,
                        }
                  }
                  transition={{
                    duration: isScattering ? 0.6 : 0.8,
                    ease: isScattering
                      ? [0.4, 0, 0.2, 1] // Ease out cho scatter
                      : [0.34, 1.56, 0.64, 1], // Elastic ease cho assemble (tạo hiệu ứng "bounce")
                    delay: randomValues.delay, // Random delay nhỏ để tự nhiên hơn
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};

export default TextMorphing;
