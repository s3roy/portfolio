/* eslint-disable react/no-unescaped-entities */
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import AnimatedText from '@/components/AnimatedText';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';
import TransitionEffect from '@/components/TransitionEffect';

import profilePic from '../../public/images/profile/avatar-01.png';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};
const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="my description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="p-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                Hello! I'm Souvik Roy, a dedicated Full Stack Developer with a
                passion for creating end-to-end digital solutions. My toolkit
                spans a broad spectrum of technologies, from frontend
                intricacies with JavaScript, React, and CSS to backend prowess
                with Node.js and SQL.
              </p>
              <p className="font-medium my-4">
                Throughout my professional journey, I've collaborated with
                diverse teams, architecting scalable applications, enhancing
                user experiences, and ensuring seamless integration between
                frontend and backend systems. Each project has been a testament
                to my commitment to delivering robust, efficient, and
                user-centric solutions.
              </p>
              <p className="font-medium">
                For me, development isn't just about individual pieces of
                technology. It's about weaving them together to create a
                cohesive, intuitive, and impactful user experience. It's about
                understanding the broader picture, from the user interface down
                to the underlying databases. When I'm not deep in code, I'm
                often navigating the latest tech innovations or exploring the
                intricate realms of cryptocurrency.
              </p>

              <p className="font-medium">
                If you're in search of a developer who understands both the
                forest and the trees, let's embark on a digital journey
                together!
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Souvik"
                className="w-full h-auto ronded-2xl"
                priority
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-endb justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {' '}
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {' '}
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
