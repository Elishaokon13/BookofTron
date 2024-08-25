import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Tokenomix from "@/components/Tokenomic";

const ImageRowWithSocials = () => {
  return (
    <div
      className="bg-cover bg-center pt-20 bg-no-repeat py-[100px]"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="container mx-auto overflow-hidden">
        <Marquee className="gap-8">
          <div className="text-center">
            <Image
              src="/1.png"
              alt="Image 1"
              width={250}
              height={250}
              className="m-4"
            />
          </div>

          <div className="text-center animate-pulse">
            <Image
              src="/3.png"
              alt="Image 2"
              width={250}
              height={250}
              className="m-4"
            />
          </div>
          <div className="text-center animate-pulse">
            <Image
              src="/4.png"
              alt="Image 2"
              width={250}
              height={250}
              className="m-4"
            />
          </div>
          <div className="text-center animate-pulse">
            <Image
              src="/8.png"
              alt="Image 2"
              width={250}
              height={250}
              className="m-4"
            />
          </div>
          <div className="text-center animate-pulse">
            <Image
              src="/7.png"
              alt="Image 2"
              width={250}
              height={250}
              className="m-4"
            />
          </div>
          <div className="text-center animate-pulse">
            <Image
              src="/4.png"
              alt="Image 2"
              width={250}
              height={250}
              className="m-4"
            />
          </div>
        </Marquee>
      </div>
      {/* <Tokenomix/> */}
      {/* <Marquee gradient={true} gradientColor="purple" className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-4">
               
                <div className="text-center">
                    <Image src="/5.jpg" alt="Image 1" width={250} height={250} className="m-4" />
                </div>

                <div className="text-center animate-pulse">
                    <Image src="/4.jpg" alt="Image 2" width={250} height={250} className="m-4" />

                </div>
               
                <div className="text-center animate-pulse">
                    <Image src="/3.jpg" alt="Image 2" width={250} height={250} className="m-4" />
                </div>
            </Marquee> */}
    </div>
  );
};

export default ImageRowWithSocials;
