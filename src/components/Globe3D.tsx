// "use client";

// import { useEffect, useRef, useState } from "react";
// import createGlobe from "cobe";
// import { motion, AnimatePresence } from "framer-motion";

// // Dhaka, Bangladesh coordinates: 23.8041° N, 90.4152° E
// const DHAKA_LAT = 23.8041;
// const DHAKA_LNG = 90.4152;

// export default function Globe3D() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [showCard, setShowCard] = useState(false);
//   const phiRef = useRef(0);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     let phi = 0;
    
//     const globe = createGlobe(canvasRef.current, {
//       devicePixelRatio: 2,
//       width: 600 * 2,
//       height: 600 * 2,
//       phi: 0,
//       theta: 0.2,
//       dark: 1,
//       diffuse: 1.2,
//       mapSamples: 16000,
//       mapBrightness: 6,
//       baseColor: [0.1, 0.1, 0.1],
//       markerColor: [0, 1, 1],
//       glowColor: [0.05, 0.05, 0.05],
//       markers: [
//         { location: [DHAKA_LAT, DHAKA_LNG], size: 0.1 }
//       ],
//       scale: 1,
//       opacity: 0.9,
//       onRender: (state) => {
//         // Rotate the globe
//         phi += 0.005;
//         phiRef.current = phi;
//         state.phi = phi;

//         // Calculate if Dhaka marker is facing the camera
//         // Dhaka is at 90.4152° E longitude
//         // Convert longitude to radians
//         const dhakaLngRad = (DHAKA_LNG * Math.PI) / 180; // ~1.578 radians
        
//         // Normalize phi to 0-2π range
//         const normalizedPhi = ((phi % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        
//         // The marker is facing the camera when:
//         // phi (rotation) approximately equals -longitude (to bring it to center)
//         // Since we rotate continuously, check when phi + longitude ≈ 2π or 0
//         // For 90° E, it faces camera around phi = 3π/2 (270°) or phi = -π/2
        
//         // Calculate when Dhaka is at the front
//         const frontPosition = (2 * Math.PI - dhakaLngRad) % (2 * Math.PI);
        
//         // Calculate the shortest angular distance
//         let angularDistance = Math.abs(normalizedPhi - frontPosition);
//         if (angularDistance > Math.PI) {
//           angularDistance = 2 * Math.PI - angularDistance;
//         }
        
//         // Show card when Dhaka is within viewing angle (about 60 degrees = ~1 radian)
//         const viewingAngle = 1.0;
//         const isFacing = angularDistance < viewingAngle;
        
//         setShowCard(isFacing);
//       },
//     });

//     return () => {
//       globe.destroy();
//     };
//   }, []);

//   return (
//     <div className="w-full h-full relative p-4">
//       {/* Globe Canvas */}
//       <div className="relative w-full h-full flex items-center justify-center">
//         <canvas
//           ref={canvasRef}
//           style={{
//             width: '100%',
//             height: '100%',
//             maxWidth: '550px',
//             maxHeight: '550px',
//             aspectRatio: '1',
//           }}
//         />
//       </div>

//       {/* Animated Location Card */}
//       <AnimatePresence>
//         {showCard && (
//           <motion.div
//             initial={{ x: 400, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: 400, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 100, damping: 20 }}
//             className="absolute top-2 right-2 md:top-4 md:right-4 bg-black border-2 border-lime-400 rounded-lg overflow-hidden z-20"
//             style={{
//               boxShadow: `
//                 0 0 20px rgba(163, 230, 53, 0.5),
//                 0 0 40px rgba(163, 230, 53, 0.3),
//                 0 0 60px rgba(163, 230, 53, 0.1)
//               `,
//             }}
//           >
//             {/* Header with pulsing dot and LOCATION text */}
//             <div className="bg-lime-400 px-4 py-2 flex items-center gap-2">
//               <div className="relative">
//                 <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
//                 <div 
//                   className="absolute inset-0 w-2 h-2 bg-green-600 rounded-full animate-ping"
//                 />
//               </div>
//               <span className="text-black font-bold font-mono text-sm tracking-wider">
//                 ● LOCATION
//               </span>
//             </div>

//             {/* Card Content */}
//             <div className="p-4">
//               <div className="flex items-center gap-4">
//                 {/* Profile Image */}
//                 <div className="w-20 h-20 md:w-24 md:h-24 rounded-md overflow-hidden border-2 border-lime-400 flex-shrink-0 bg-gray-800">
//                   <img
//                     src="/profile.jpg"
//                     alt="Profile"
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       // Fallback if image doesn't exist
//                       e.currentTarget.style.display = 'none';
//                     }}
//                   />
//                 </div>

//                 {/* Location Info */}
//                 <div className="flex flex-col gap-1">
//                   <div className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
//                     <span className="text-white font-medium text-sm md:text-base">
//                       Dhaka, Bangladesh
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { motion, AnimatePresence } from "framer-motion";

// Dhaka, Bangladesh coordinates
const DHAKA_LAT = 23.8041;
const DHAKA_LNG = 90.4152;

export default function Globe3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.15, // Adjusted tilt
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0, 1, 1],
      glowColor: [0.1, 0.1, 0.1],
      offset: [0, 0], // Center the globe to stop clipping
      markers: [{ location: [DHAKA_LAT, DHAKA_LNG], size: 0.1 }],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.008;

        // FIXED MATH FOR DHAKA
        // 1. Convert Longitude to Radians
        const lngRad = (DHAKA_LNG * Math.PI) / 180;
        
        // 2. The globe in Cobe rotates such that the "front" (0 radians) 
        // faces the camera. We check if (phi + lngRad) completes a circle.
        const currentRotation = (phi + lngRad) % (2 * Math.PI);
        
        // 3. We want to show the card when the dot is at the center front (approx 4.7 radians or 1.5 radians depending on direction)
        // For Dhaka, it hits the "sweet spot" near 4.8 radians.
        const isFacing = currentRotation > 4.5 && currentRotation < 5.2;

        setShowCard(isFacing);
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    // Set fixed height container to avoid clipping
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Globe Canvas Container */}
      <div className="relative w-[550px] h-[550px]">
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            contain: "layout paint",
          }}
        />
      </div>

      {/* Animated Location Card - Forced to Top Right */}
      <AnimatePresence>
        {showCard && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            className="absolute top-10 right-10 z-30"
          >
            <div className="bg-black border-2 border-lime-400 rounded-sm overflow-hidden shadow-[0_0_25px_rgba(163,230,53,0.4)]">
              {/* Header */}
              <div className="bg-lime-400 px-3 py-1 flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                <span className="text-black font-black font-mono text-[10px] tracking-tighter">
                  LOCATION
                </span>
              </div>

              {/* Content */}
              <div className="p-3 flex items-center gap-3">
                <div className="w-16 h-16 border border-zinc-800 grayscale">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-lime-400 font-mono text-xs">
                  <p className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-lime-400 rounded-full" />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}