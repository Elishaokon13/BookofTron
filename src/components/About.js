import Image from "next/image";
import React, { useState, useEffect } from "react";
import ImageRowWithSocials from "./test";
import { useTrail, animated } from "react-spring";
import Tokenomix from "@/components/Tokenomic";

const AboutSection = () => {
  const initialCount = 1624000;
  const [counter, setCounter] = useState(initialCount);
  const [power, setPower] = useState(1); // Start power from 1 to continue from initial count

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(initialCount + 2 ** 4 * power);
      setPower((prevPower) => prevPower + 1);
    }, 1000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [power]);

  const items = [
    <h1
      key="title"
      className="text-3xl sm:text-5xl font-permanentMarker mt-[00px] font-bold mb-8"
    >
      MTGA has come to stay!
    </h1>,
    <p
      key="description"
      className="max-w-4xl text-[#9fa91b] font-hanaleiFill mx-auto text-lg leading-relaxed mb-8"
    >
      MTGA is an anthropomorphic frog character based on the famous comic book
      «The Night Riders», published in 2012 by artist and illustrator Matt
      Furie. Today, this is one of the few characters of Matt Furie that can
      truly be considered unique.
      <br />
      MTGA began his memetic revolution through countless iterations of memes
      cementing his iconic status, mastering every form with his unparalleled
      power. With its roots in internet culture, MTGA infuses humour and meme
      magic into the world, fostering a movement that unites and makes everyone
      happy
      <br />
      Together, we're unstoppable
    </p>,
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <div className="mx-auto flex flex-col items-center bg-red-700">
      <div
        className="bg-cover bg-center bg-red-700 bg-no-repeat mx-auto w-full bg-red-700 flex flex-col justify-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="relative w-full text-white p-8">
          <div className="relative text-center">
            {trail.map((props, index) => (
              <animated.div key={index} style={props}>
                {items[index]}
              </animated.div>
            ))}
          </div>
        </div>
      </div>
      <iframe
        className="w-[280px] h-[200px] md:w-[700px] md:h-[420px] bg-red-700 mb-[100px]"
        style={{ maxHeight: "560px" }}
        src="hero.mp4"
        title="MTGA Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Tokenomix />
    </div>
  );
};

export default AboutSection;
