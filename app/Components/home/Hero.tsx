/* eslint-disable react/no-unescaped-entities */
'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

const TypewriterComponent = dynamic(() => import('typewriter-effect'), {
  ssr: false,
});

const Hero = () => {
  return (
    <section className="relative h-[720px] w-full">
      <div className="w-full h-full max-h-[720px] hidden sm:block absolute top-0 left-0">
        <Image
          src="/landing-bg.png"
          alt="hero image"
          width={1440}
          height={720}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full max-h-[550px] sm:hidden">
        <Image
          src="/landing-mobile.png"
          alt="hero image"
          width={380}
          height={500}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex relative z-10 text-white h-full items-center w-full bg-black/40 justify-center px-4 lg:px-8">
        <div className="flex flex-col gap-y-5 w-full sm:max-w-[90%]   xl:max-w-[80%]  items-center">
          <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold sm:font-bold scale-y-110 mb-4 lg:mb-8">
            <TypewriterComponent
              component="p"
              options={{
                autoStart: true,
                delay: 100,
                loop: true,
                strings: [
                  'Illuminating Ideas and Forging Solutions',
                  'Connecting Creativity and Innovation',
                  'Innovative Visions, Pioneering Solutions',
                  'Transforming the Future with CodeGranites',
                  'Empowering Creativity and Innovation',
                ],
                deleteSpeed: 50,
              }}
            />
          </p>
          <p className="w-full sm:max-w-[80%] text-center font-medium text-white/80 text-base sm:text-lg">
            Welcome to Codegranites — Where Innovation Meets Impact. Transform your ideas into groundbreaking IT
            solutions with us. Submit your project proposal and let's shape the future together.
          </p>
          <div className="mt-3 lg:mt-6 w-full justify-center flex gap-x-5 lg:gap-x-10 [&>button]:border-white [&>button]:border [&>button]:px-4 [&>button]:lg:px-12 [&>button]:py-2 [&>button]:lg:py-4 [&>button]:rounded-md [&>button:last-child]:bg-white [&>button:last-child]:text-primary [&>button]:font-medium [&>button]:lg:font-semibold [&>button]:text-white">
            <button type="button">Explore Solutions</button>
            <button type="button">Submit Proposal</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;