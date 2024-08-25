import React from 'react';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';

const StatsCard = ({ figure, description }) => (
    <div className="flex flex-col items-center text-black p-2 md:p-4 rounded shadow-md w-24 md:w-48">
        <span className="text-xl md:text-3xl font-bold">{figure}</span>
        <span className="text-xs md:text-lg text-center">{description}</span>
    </div>
);

const TokenomicsSection = () => {
    const rotation = useSpring({
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
        config: { duration: 20000 },
        loop: true
    });

    const bounce = useSpring({
        from: { transform: 'scale(1)' },
        to: { transform: 'scale(1.1)' },
        config: { tension: 300, friction: 10 },
        loop: { reverse: true }
    });

    return (
        <>
            <div className="bg-cover bg-center bg-[#cb22f6] bg-no-repeat" style={{ backgroundImage: "url('/bg.png')" }}>
                <div className="relative flex font-permanentMarker  flex-col items-center justify-center text-white p-8">
                    <h1 className="text-3xl md:text-5xl font-bold mb-12 md:mb-28 font-permanentMarker">Tokenomics</h1>

                    <div className="relative flex items-center animate-pulse justify-center w-full mb-8">
                        <animated.div style={rotation} className="relative w-48 h-48 md:w-96 md:h-96 bg-gray-800 rounded-lg shadow-lg">
                            <Image src="/C1.jpeg" alt="Center Image" layout="fill" objectFit="cover" className="rounded-lg" />

                            {/* Top Left Card */}
                            <animated.div style={bounce} className="absolute top-0 left-0 bg-[#cb22f6] transform -translate-y-1/2 -translate-x-1/2">
                                <StatsCard figure="1 Billion" description="Supply" />
                            </animated.div>

                            {/* Top Right Card */}
                            <animated.div style={bounce} className="absolute top-0 right-0 bg-[#cb22f6] transform -translate-y-1/2 translate-x-1/2">
                                <StatsCard figure="0%" description="Tax" />
                            </animated.div>

                            {/* Bottom Left Card */}
                            <animated.div style={bounce} className="absolute bottom-0 bg-[#cb22f6] left-0 transform translate-y-1/2 -translate-x-1/2">
                                <StatsCard figure="100%" description="LP Burned" />
                            </animated.div>

                            {/* Bottom Right Card */}
                            <animated.div style={bounce} className="absolute bottom-0 bg-[#cb22f6] right-0 transform translate-y-1/2 translate-x-1/2">
                                <StatsCard figure="Ownership" description="Renounced" />
                            </animated.div>
                        </animated.div>
                    </div>

                    <div className="mt-10 p-2 flex flex-col md:flex-row items-center justify-between font-hanaleiFill bg-[#cb22f6] text-black rounded text-sm md:text-2xl font-bold w-full max-w-3xl">
                        <span className="text-center md:text-left">CA: </span>
                        {/* <button
                            onClick={handleCopy}
                            className="mt-4 md:mt-0 md:ml-4 px-4 py-2 font-hanaleiFill text-white bg-black rounded font-bold hover:bg-gray-300 hover:text-black transition-colors duration-300"
                        >
                            Copy
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TokenomicsSection;