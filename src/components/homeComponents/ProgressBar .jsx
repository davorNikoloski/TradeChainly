const ProgressBar = ({ progress, width = "100%", direction = "ltr" }) => {
    const progressWidth = `${progress}%`;
    const isRtl = direction === "rtl";
  
    return (
      <div
        className={`relative h-1 bg-transparent ${
          isRtl ? "scale-x-[-1]" : ""
        }`}
        style={{ width }} // Dynamically set width
      >
        {/* Progress Bar */}
        <div
          className="absolute left-0 h-[4px] bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400"
          style={{
            width: progressWidth,
            clipPath: "polygon(0% 50%, 100% 0%, 100% 100%, 0% 50%)",
            boxShadow: "rgba(138, 43, 226, 0.8) 0px 0px 10px",
          }}
        ></div>
  
        {/* Circular Progress Indicator */}
        <div
          className="absolute top-[0.15rem] w-3 h-3 bg-purple-400 rounded-full shadow-lg transform -translate-y-1/2"
          style={{
            left: `calc(${progressWidth} - 8px)`,
            boxShadow: "rgb(138, 43, 226) 0px 0px 10px",
          }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;
  