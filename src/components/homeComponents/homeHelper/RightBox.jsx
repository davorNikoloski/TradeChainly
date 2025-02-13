import Image from "next/image";
import "../../../styles/glowingBoxComponent.css";

export default function RightBox({ width = '200px', minWidth = '547px', image }) {
  return (
    <div
      className="gb-container bg-[#010012] w-full md:h-[648px] h-fit mx-auto  rounded-[16px] p-[9px] relative flex items-center justify-center overflow-visible"
      style={{ width, minWidth }}
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
            className={`w-full h-full ${image.className || ""}`}
            style={{
              objectFit: "cover", // ✅ Ensures it fills the rounded container
              borderRadius: "16px", // ✅ Extra safeguard if needed
            }}
          />
        </div>
      )}
    </div>
  );
}
