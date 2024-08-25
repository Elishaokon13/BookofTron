// components/InfoComponent.js

import React from "react";
import { useTrail, animated } from "react-spring";

const InfoComponent = () => {
  const steps = [
    {
      number: 1,
      title: "CREATE A WALLET",
      description:
        "Download TronLink or your wallet of choice from the app store or Google Play store. Desktop users, download the Chrome extension by visiting the TronLink website.",
    },
    {
      number: 2,
      title: "GET SOME TRX",
      description:
        "Have TRX in your wallet to switch to $MTGA. If you don't have any TRX, you can buy TRX from an exchange or cross-chain swap and send it to your wallet.",
    },
    {
      number: 3,
      title: "GO TO SunSwap",
      description:
        "Connect to SunSwap. Go to SunSwap.io in your browser inside your TronLink app. Connect your wallet. Paste the $MTGA token address into SunSwap and confirm the swap. When TronLink prompts you for a wallet signature, sign it.",
    },
    { number: 4, title: "SWAP", description: "Switch TRX for $MTGA." },
  ];

  const trail = useTrail(steps.length, {
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <div
        className="bg-cover bg-center bg-red-700 bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url('/BG.jpg')" }}
      >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="text-4xl font-bold mb-6">How to Buy $MTGA</h2>
          <div className="space-y-8 font-permanentMarker">
            {trail.map((props, index) => (
              <animated.div
                key={index}
                style={props}
                className="flex items-start space-x-4"
              >
                <div className="text-2xl font-bold">{steps[index].number}</div>
                <div>
                  <h3 className="text-xl font-bold">{steps[index].title}</h3>
                  <p>{steps[index].description}</p>
                </div>
              </animated.div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col space-y-4 w-full md:w-1/2">
            <img
              src="/13.png"
              alt="MTGA Info Graphic 1"
              className="w-full md:w-auto h-auto object-cover mx-auto"
            />
            <img
              src="/14.png"
              alt="MTGA Info Graphic 2"
              className="w-full md:w-auto h-auto object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
