// import Recipes from "../components/Recipes";
// import { useNavigate } from "react-router-dom";
// import React from "react";
// const Explore = () => {
//   let Navigate = useNavigate();

//   Navigate("/explore");

//   return (
//     <main className="w-full  flex flex-col">
//       <section id="recipes" className="md:max-w-[1440px] mx-auto px-4 md:px-20">
//         <Recipes />
//       </section>
//     </main>
//   );
// };

// export default Explore;
// import React from "react";
import { NavLink } from "react-router-dom";
import Recipes from "../components/Recipes";

const Explore = () => {
  return (
    <main className="w-full flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex">
          <li className="mr-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/explore">Explore</NavLink>
          </li>
        </ul>
      </nav>

      {/* Recipes Section */}
      <section
        id="recipes"
        className="md:max-w-[1440px] mx-auto px-4 md:px-20 flex-1"
      >
        <Recipes />
      </section>
    </main>
  );
};

export default Explore;
