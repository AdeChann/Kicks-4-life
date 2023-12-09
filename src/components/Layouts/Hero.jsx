import Button from "../Elements/Buttons/button";
import HeroImage from "../../assets/images/1.jpg";
import Card from "./Card";
import Caraousel from "./Carousel";

const Hero = () => {
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
          Choose Your Shoes Now
        </h1>
        <p className="max-w-2xl mb-6 font-light text-slate-950 lg:mb-8 md:text-lg lg:text-xl dark:text-slate-950">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          similique iusto magnam a quisquam minus eveniet sint nostrum
          repudiandae veritatis?
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-amber-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Get started
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-semiHijau focus:ring-4 focus:ring-slate-500 bg-semiHijau dark:border-gray-700 dark:hover:bg-orange-600 "
        >
          Details Shoes
        </a>
      </div>
      <div className="flex-row-reverse   ">
        <img
          src={HeroImage}
          alt="Sepatu"
          className="max-w-sm rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};
export default Hero;
