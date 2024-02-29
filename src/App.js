import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Navbar from "./components/Navbar";
import RecipeDetail from "./pages/RecipeDetail";
import Footer from "./components/Footer";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const location = useLocation();
  const isSignInPage = location.pathname === "/signin";
  return (
    <div className="bg-black">
      <Navbar isSignInPage={isSignInPage} />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
