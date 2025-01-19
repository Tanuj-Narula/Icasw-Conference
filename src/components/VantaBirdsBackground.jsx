import React, { useEffect, useRef } from 'react';
import * as THREE from 'three'; // Ensure this is the compatible version
import BIRDS from 'vanta/dist/vanta.birds.min';

const VantaBirdsBackground = () => {
  const vantaRef = useRef(null);
  const vantaInstance = useRef(null);

  useEffect(() => {
    if (!vantaInstance.current) {
      vantaInstance.current = BIRDS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 100.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x87731,
        color1: 0xfc7b00,
        color2: 0xff1c1c,
        wingSpan: 34.0,
        backgroundAlpha: 0.81,
        speedLimit: 4.00,
        cohesion: 5.0,
        separation: 80.0
      });
    }

    return () => {
      if (vantaInstance.current) {
        vantaInstance.current.destroy();
        vantaInstance.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} style={{ width: '100%', height: '100%' }} />;
};

export default VantaBirdsBackground;
