function NavBar(){
  return(
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white flex justify-between items-center px-6 py-4">
      <h1 className="font-bold text-2xl text-sky-400">WorkOut</h1>
      
      <div className="flex gap-6 text-sky-800">
        <a href="#">Exercise</a>
        <a href="#" className="hidden md:block sm:block">Price</a>
        <a href="#">Fitness</a>
        <a href="#">Sign In</a>
      </div>
    </nav>
  );
}
export default NavBar;


// function NavBar(){
//     return(
// <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white flex justify-between p-5">            <h1 className="font-bold text-blue-100">WorkOut</h1>
            
//             <div className="flex gap-6 text-white">
//                 <a href="#">Exercise</a>
//                 <a href="#">Price</a>
//                 <a href="#">Fitness</a>
//                 <a href="#">Sign In</a>
//             </div>
//         </nav>
//     );
// }
// export default NavBar;