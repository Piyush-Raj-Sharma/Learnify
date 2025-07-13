import Companies from "../../components/students/Companies";
import Hero from "../../components/students/Hero";


const Home = () => {
  return <div className="'flex flex-col items-center space-y-7 text-center dark:bg-gray-950">
    <Hero/>
    <Companies/>
  </div>;
};

export default Home;
