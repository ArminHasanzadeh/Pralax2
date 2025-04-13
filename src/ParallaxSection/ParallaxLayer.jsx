import React, { useRef, useState, useEffect } from 'react';
import Pic1 from'../../public/McAlpine_Wellness_Garage_Exterior2-225x150-f50_50.webp'
import Pic2 from'../../public/McAlpine_Wellness_FrontExterior1-225x150-f50_50.webp'
import Pic3 from'../../public/McAlpine_Wellness_EntryExterior2-225x150-f50_50.webp'
import WPic1 from'../../public/wpic1.webp'
import WPic2 from'../../public/wpic2.webp'
import WPic3 from'../../public/2pic3.webp'
import SPic1 from'../../public/3pic (1).webp'
import SPic2 from'../../public/3pic (2).webp'
import SPic3 from'../../public/3pic (3).webp'
import APic1 from'../../public/4pic (1).webp'
import APic2 from'../../public/4pic (2).webp'
import APic3 from'../../public/4pic (3).webp'
import './ParallaxLayer.css'

const ParallaxLayer = ({ scrollY }) => {
  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const isMobile = window.innerWidth <= 640;
  const scale = isMobile ? 1 : (scrollY > window.innerHeight * 0.3 ? 1 : 0.95);
  const videoScale = isMobile ? 1 : (scrollY > window.innerHeight * 0.3 ? 1.4 : 1);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();

      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen().then(() => {
          setIsFullscreen(true);
        });
      }
    }
  };

  const handleExitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  return (
    <div
      className="relative w-full bg-white shadow-lg flex flex-col"
      style={{
        marginTop: '90vh',
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        transition: 'transform 1s ease-in-out',
        zIndex: 1,
      }}
    >
      <div className="flex flex-wrap sm:flex-nowrap justify-center items-center w-full h-auto gap-10 sm:gap-32 px-4 sm:px-0">
        <div className="flex justify-center sm:justify-start items-start w-full sm:w-[20%] text-center sm:text-left">
          <p className="text-xl sm:text-2xl text-black">McAlpine</p>
        </div>

        <div className="w-full sm:w-[20%] mt-10 sm:mt-20 relative">
          <video
            ref={videoRef}
            muted={false}
            controls
            playsInline
            preload="auto"
            className="w-full h-auto object-cover"
            style={{
              transform: `scale(${videoScale})`,
              transformOrigin: 'center center',
              transition: 'transform 1s ease-in-out',
            }}
            onClick={isFullscreen ? handleExitFullscreen : handlePlayClick}
          >
            <source src="/McALPINE.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex justify-center sm:justify-end items-center w-full sm:w-[20%] text-center sm:text-right">
          <p className="text-xl sm:text-2xl text-black">Showreel</p>
        </div>
      </div>
      <div className='w-full h-auto mt-52 flex justify-center items-center Master_Box'>
        <ul className='flex flex-col w-[80%] h-auto justify-center items-center '>
          <li>
            <span></span>
            <figure>
              <img src={Pic1} alt="" />
              <img src={Pic2} alt="" />
              <img src={Pic3} alt="" />
              <p>
                Wellness
                <sup aria-labelledby="chapter-number-1">I</sup>
              </p>
            </figure>
            <span></span>
          </li>
          <li>
            <span></span>
            <figure>
              <img src={WPic1} alt="" />
              <img src={WPic2} alt="" />
              <img src={WPic3} alt="" />
              <p>
                Portal
                <sup aria-labelledby="chapter-number-1">II</sup>
              </p>
            </figure>
            <span></span>
          </li>
          <li>
            <span></span>
            <figure>
              <img src={SPic1} alt="" />
              <img src={SPic2} alt="" />
              <img src={SPic3} alt="" />
              <p>
                Idyll
                <sup aria-labelledby="chapter-number-1">III</sup>
              </p>
            </figure>
            <span></span>
          </li>
          <li>
            <span></span>
            <figure>
              <img src={APic1} alt="" />
              <img src={APic2} alt="" />
              <img src={APic3} alt="" />
              <p>
                Goodness
                <sup aria-labelledby="chapter-number-1">IV</sup>
              </p>
            </figure>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ParallaxLayer;
