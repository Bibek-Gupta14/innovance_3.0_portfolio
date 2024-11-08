import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/globals/Navbar";
import Hero from "./components/main/Hero/Hero";
import { MyAdvantage } from "./components/main/MyAdvantage/MyAdvantage";
import EducationExperience from "./components/main/EducationExperience/EducationExperience";
import { LatestProjects } from "./components/main/LatestProjects/LatestProjects";
import { TestimonialCarousel } from "./components/main/Testimonials/TestimonialsCarousel";
import { TestimonialImage } from "./components/main/TestimonialImages/TestimonialImage";
import { CallBruno } from "./components/main/CallBruno/CallBruno";
import { Footer } from "./components/globals/Footer";
import Divider from "./components/main/Divider";
import { motion } from "framer-motion";
// import CustomCursor from "./components/globals/CustomCursor";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <div className="min-h-screen m-0 p-0">
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        // hasBlendMode={true}
        innerStyle={{
          backgroundColor: "",
        }}
        outerStyle={{
          border: "2px solid black",
        }}
      />
      {/* <CustomCursor /> */}
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <MyAdvantage />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <EducationExperience />
      </motion.div>

      <motion.div
        id="LatestProjects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <LatestProjects />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <TestimonialCarousel />
        <TestimonialImage />
      </motion.div>

      <motion.div
        id="CallAlice"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <CallBruno />
      </motion.div>
      <Footer />
    </div>
  );
};

export default App;
