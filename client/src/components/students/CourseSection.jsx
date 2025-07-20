import { Link } from "react-router-dom";

const CourseSection = () => {
  return (
    <div className="py-16 md:px-40 px-8  dark:bg-gray-950 ">
      <h2 className="text-sm font-medium text-gray-800 dark:text-white">Learn from the best</h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover our top-rated courses across various categories. From coding
        and design to business and welness, our courses are crafted to deliver
        results.
      </p>

      <Link to={'/course-list'} onclick={() => scrollTo(0,0)}
      className="text-gray-500 dark:text-white border border-gray-500/30 px-10 py-3 rounded"
      >Show all courses</Link>
    </div>
  );
};

export default CourseSection;
