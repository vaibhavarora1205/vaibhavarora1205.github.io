import styles from "./hero.module.css";

function Hero() {
  return (
    <section className={`relative w-full h-auto pt-20 ${styles.container}`}>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start h-full px-6 md:px-16 text-white">
        
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-light leading-tight">
            Free Trial Session <br /> With a Trainer
          </h1>
        </div>

        <button className="mt-6 bg-yellow-500 px-6 py-3 rounded hover:bg-yellow-600">
          Get Started
        </button>

      </div>
    </section>
  );
}

export default Hero;
// import styles from "./hero.module.css";
// function Hero() {
//   return (
//   <div className={`relative w-full -m-25px ${styles.container}`}>
//   <div className="flex flex-col justify-center items-start h-full px-10 text-white">
//     <div className="max-w-[600px]">
//         <h1 className="text-5xl font-light w-100">
//           Free Trial Session <br /> With a Trainer
//         </h1>
//       </div>
//         <button className="mt-6 w-fit bg-yellow-500 px-6 py-3 rounded hover:bg-yellow-600">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Hero;