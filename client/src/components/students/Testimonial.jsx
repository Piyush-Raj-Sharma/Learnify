import { assets, dummyTestimonial } from "../../assets/assets";

const Testimonial = () => {
  return (
    <div className="pb-14 px-8 md:px-40">
      <h2 className="text-3xl font-medium text-gray-800 dark:text-white">
        Testimonials
      </h2>
      <p className="md:text-base text-gray-500 mt-3">
        Hear from our learners as they share their journeys of transformation,
        success, and how our <br /> platform has made a difference in their lives.
      </p>

      <div className="grid grid-cols-auto gap-8 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="text-sm text-left border border-gray-500/30 pb-2 rounded-lg bg-white dark:bg-gray-800 shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden"
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10 ">
              <img
                className="h-12 w-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name || "User"}
              />
              <div>
                <h1 className="text-lg font-medium text-gray-800 dark:text-white">{testimonial.name}</h1>
                <p className="text-gray-800/80 dark:text-white">{testimonial.role}</p>
              </div>
            </div>

            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="h-5"
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-gray-500 mt-5 dark:text-white">{testimonial.feedback}</p>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Testimonial;
