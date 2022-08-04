import { Routes, Route } from "react-router-dom"
// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import Category from "./components/Category";
import Courses from "./components/Courses";
import ErrorPage from "./components/ErrorPage";
import { useEffect } from "react";
// AOS
import AOS from "aos"
import "aos/dist/aos.css"
import Course from "./components/Course";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 900
    });


    window.replainSettings = { id: 'a66ba89a-ec53-44cb-9873-13391ad50f37' };
    (function (u) {
      var s = document.createElement('script'); s.async = true; s.src = u;
      var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })('https://widget.replain.cc/dist/client.js');

  }, [])

  return (
    <>
      <Navbar />

      {/* Routing */}
      <Routes>

        <Route index path="/" element={<Home />} />
        <Route path="/auth/:id" element={<Auth />} />

        <Route path="/category/" element={<Category />} />
        <Route path="/category/:id" element={<Category />} />

        <Route path="/courses/" element={<Courses />} />
        <Route path="/courses/:id" element={<Courses />} />

        <Route path="/course/:id" element={<Course />} />

        <Route path="*" element={<ErrorPage />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
