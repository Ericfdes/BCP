import stoveImage from "../assets/stove.jpg";
import welderImage from "../assets/welder2.png"

function Hero() {
//   return (
//     <>
//       <div
//         className="h-screen flex items-center justify-center bg-cover bg-center relative"
//         style={{ backgroundImage: `url(${heroImage})`, marginTop: '-64px' }} // Adjust margin to overlap with navbar
//       >
//         <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
//         <div className="relative z-10 p-8 rounded-lg text-center">
//           <h1 className="text-5xl font-bold text-white mb-4">Welcome to Blue Flame Enterprises</h1>
//           <p className="text-xl text-white">Your trusted partner in welding solutions</p>
//         </div>
//       </div>
//       this
//     </>
//   );
// }
  const wordGradient = "bg-gradient-to-r from-teal-500 to-emerald-700 bg-clip-text text-transparent font-bold";
  return(
    <div className="relative flex justify-center items-center h-screen bg-theme-3   flex-col">
    <div className="flex flex-col items-center">
  <h2 className="text-5xl text-center font-semibold text-gray-800 leading-snug">
    Building Excellence in <span className={wordGradient}>Pipelines</span> <br />
    and <span className={wordGradient}>Kitchen Fabrication</span> Services.
  </h2>
  <p className="font-inter400 mt-3 text-gray-700 text-xl">
    Focused on helping businesses with reliable and cost-effective kitchen and pipeline systems.
  </p>
</div>

      <div className="flex items-center mt-20 space-x-4">
        <div className="bg-transparent p-4 w-72 h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${welderImage})` }}
        ></div>
        <div className="bg-white p-4 rounded-lg shadow-lg w-52 h-80 bg-cover bg-center"
         style={{ backgroundImage: `url(${stoveImage})` }}
        >
          <p className="text-white">stove</p>
        </div>
      </div>
    </div>
    
  )
}



// Card 2: "Kitchen Fabrication Services"

// Content:
// Image of commercial kitchen equipment (e.g., stoves, ovens, or workstations).
// Short description: "Custom kitchen fabrication for optimal performance."
// Progress/Animation:
// A circular progress meter showing the process from "Design" to "Fabrication" and "Installation."
// You can also animate some simple icons to represent each step of the process.
export default Hero;