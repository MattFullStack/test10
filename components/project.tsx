"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  description2,
  link,
  tags,
  imageUrl,
  websiteUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="relative bg-gray-100 max-w-[62rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:h-auto hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[30rem]">
          <h3 className="text-2xl font-semibold mb-6">{title}</h3>
          <div 
            className="mt-2 leading-relaxed text-[15px] text-gray-700 dark:text-white/70" 
            dangerouslySetInnerHTML={{ __html: description }} 
          />
          {description2 && (
            <div 
              className="mt-2 leading-relaxed text-gray-700 dark:text-white/70" 
              dangerouslySetInnerHTML={{ __html: description2 }} 
            />
          )}
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-white/70">
            {link}
          </p>
          <div className="relative py-2 justify-end -right-100 mt-2 mb-8 ">
          <a href={websiteUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-gray-700 text-white text-[0.8rem] py-2 px-4 rounded-full hover:bg-gray-900 transition-colors duration-150">
          Visit here
          </a>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer"></a>
          </div>
          <ul className="flex flex-wrap py-2  gap-2 ">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.9rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >  
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-20 -right-20  w-[32rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-28"
          />
        </a>
      </section>
    </motion.div>
  );
}



