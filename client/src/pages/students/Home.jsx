import CallToAction from "../../components/students/CallToAction";
import Companies from "../../components/students/Companies";
import CourseSection from "../../components/students/CourseSection";
import Hero from "../../components/students/Hero";
import Testimonial from "../../components/students/Testimonial";


const Home = () => {
  return <div className="'flex flex-col items-center space-y-7 text-center dark:bg-gray-950">
    <Hero/>
    <Companies/>
    <CourseSection/>
    <Testimonial/>
    <CallToAction/>
  </div>;
};

export default Home;
