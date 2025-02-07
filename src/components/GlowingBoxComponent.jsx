import Image from "next/image";
import "../styles/glowingBoxComponent.css";

export default function GlowingBoxComponent({ width = 'full', maxWidth = '1200px', image }) {
  return (
    <div
      className="gb-container bg-[#010012] w-full md:h-[690px] h-fit mx-auto md:px-[] rounded-[16px] p-[9px] relative flex items-center justify-center overflow-visible"
      style={{ width, maxWidth }}
    >
      {image && (
        <div
          className="relative z-[50] overflow-hidden md:top-[3rem] md:left-[3rem] w-full"
          style={{
            borderRadius: "16px", // ✅ Apply rounded corners to wrapper
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={`w-[130%] h-[2000%] ${image.className || ""}`}
            style={{
              objectFit: "contain", // ✅ Ensures it fills the rounded container
              borderRadius: "16px", // ✅ Extra safeguard if needed
            }}
          />
        </div>
      )}
    </div>
  );
}
