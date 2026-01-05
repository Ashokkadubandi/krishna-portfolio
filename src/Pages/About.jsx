import { motion, useScroll, useTransform } from "framer-motion";
import SkillsSection from "./Skills";
import image from '../assets/image.png'

export default function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 100], [0, 500]);

  return (
    <section className="h-screen flex flex-col md:flex-row md:items-center md:justify-center md:pt-0 md:gap-10">
      <div className="bg-blue-800 relative md:bg-blue-600 md:rounded-full w-full h-40 md:w-96 md:h-96 flex justify-center items-center">
        <img className="rounded-full w-1/3 
        absolute -bottom-1/4 left-2.5
         md:relative md:left-0 md:-bottom-0
          md:w-72 md:h-72 " src={image}/>
      </div>
      <div className="shadow-lg rounded-lg p-4 w-full md:w-1/2 pt-10 pb-11 md:pt-0 md:pb-0">
      <h2 className="text-bold text-2xl md:text-5xl pt-2 pb-2">Krishna Kishore Gedela</h2>
        <p className="text-white text-sm md:text-2xl" >A Datascientist student from <a>GUVI</a> Completed master in statistics
        and applied mathematics. Eagerly waiting to be a Data Scientist.</p>
        <p className="text-white text-sm md:text-2xl">Analyzes and interprets data to help businesses solve problems
          Aspiring Data Scientist with a strong foundation in data analysis, statistics, and machine learning, focused on turning raw data into  meaningful insights.
        </p>
      </div>
    </section>
  );
}
