import './background.css';

const Background = () => {
  return (
    <section className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/McALPINE.mp4" type="video/mp4" />
      </video>

      {/* لایه SVG روی ویدیو */}
      <div className="absolute w-[150vw]  inset-0 flex items-center justify-center pointer-events-none svgtag">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 60"
          fill="white"
          className="w-[150vw] h-[100vh]"
        >
          <text
            x="0"
            y="48"
            fontFamily="Times New Roman, serif"
            fontSize="48"
            letterSpacing="8"
          >
            M
          </text>
          <text
            x="38"
            y="39"
            fontFamily="Times New Roman, serif"
            fontSize="48"
            letterSpacing="8"
          >
            c
          </text>
          <text
            x="58"
            y="48"
            fontFamily="Times New Roman, serif"
            fontSize="48"
            letterSpacing="8"
          >
            ALPINE
          </text>
        </svg>
      </div>
    </section>
  );
};

export default Background;
