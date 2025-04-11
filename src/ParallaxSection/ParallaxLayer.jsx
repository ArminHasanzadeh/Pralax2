import React, { useRef, useState, useEffect } from 'react';

const ParallaxLayer = ({ scrollY }) => {
  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

 
  const scale = scrollY > window.innerHeight * 0.3 ? 1 : 0.95;


  const videoScale = scrollY > window.innerHeight * 0.3 ? 1.4 : 1;

 
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); }
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
      className="relative w-full bg-white shadow-lg flex flex-col "
      style={{
        marginTop: '90vh',
        height: '400vh',
        transform: `scale(${scale})`, 
        transformOrigin: 'top center',
        transition: 'transform 1s ease-in-out',
        zIndex: 1,
      }}
    >
      <div className='flex justify-center items-center w-[100%] gap-32'>
        <div className='flex justify-start items-start w-[20%]'>
        <p  className='text-2xl text-black '>
        McAlpine
        </p>
        </div>
      <div className="w-[20%] mt-20 relative">
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
        <div className='flex justify-end items-center w-[20%]'>
        <p className='text-2xl text-black'>
        Showreel
        </p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxLayer;
