import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTrail, animated } from "react-spring";
import Tokenomix from "@/components/Tokenomic";
import ImageRowWithSocials from "./test";

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
      $MTGA has come to stay!
    </h1>,
    <p
      key="description"
      className="max-w-4xl text-[#9fa91b] font-hanaleiFill mx-auto text-lg leading-relaxed mb-8"
    >
      Make Tron Great Again $MTGA is a vision that upholds the Tron community. Built on the foundation of Tron DAO's success and inspired by the bullish projects that have thrived on the network. <br/>
      <br/>
      TRON has already proven itself as a powerhouse as we’ve seen projects defy expectations, breaking ATHs against overwhelming odds. The resilience and innovation within the Tron ecosystem have been nothing short of remarkable. $MTGA isn't about resting on our laurels. It's about recognizing our potential to be even better. We're creating a future where TRON isn't just great, but unequivocally the best.<br/>

      <br/>$MTGA is your opportunity to be part of something truly revolutionary. Together, we won't just make Tron great again - we'll make it greater than ever before.
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
        style={{ backgroundImage: "url('/')" }}
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
      <ImageRowWithSocials/>
      {/* <iframe
        className="w-[280px] h-[200px] md:w-[700px] md:h-[420px] bg-red-700 mb-[100px]"
        style={{ maxHeight: "560px" }}
        src="hero.mp4"
        title="MTGA Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
      <Tokenomix />
    </div>
  );
};

export default AboutSection;
