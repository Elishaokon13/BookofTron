import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Sponsors() {
  return (
    <div className=" font-hanaleiFill py-4 sm:py-2 bg-red-700 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-4">
        {/* <WordPullUp
          className="text-2xl font-bold tracking-[-0.02em] text-white dark:text-black md:text-6xl md:leading-[5rem]"
          words="Our Amazing Partners"
        /> */}
        <h2 className="text-center font-bricolage text-4xl md:text-6xl font-semibold leading-8 text-white">
          Coming soon on:
        </h2>
        <div className="w-full mt-[20px] flex justify-center">
          {/* <Marquee  > */}
          <div className="flex flex-row gap-6 w-fit justify-center">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/mexc.png"
              alt="Mexc"
              width={158}
              height={48}
            />
            {/* <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/gate.png"
              alt="Reform"
              width={158}
              height={48}
            /> */}
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/poloniex.png"
              alt="Poloniex"
              width={158}
              height={48}
            />
            {/* <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/okx.svg"
              alt="OKX"
              width={158}
              height={48}
            /> */}
          </div>
          {/* </Marquee> */}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex md:flex-row flex-col gap-8 items-center justify-between py-12">
          <Image
            className="col-span-2 object-contain lg:col-span-1 "
            src="/1.png"
            alt=""
            width={350}
            height={100}
          />
          <div className="flex flex-col gap-10 items-center w-full">
            <h1 className="text-5xl">Roadmap</h1>
            <div className="p-6 border-[5px] rounded-lg border-white max-w-[640px] flex flex-col gap-4">
              <p className="text-2xl">1. Launch on sunpump </p>
              <p className="text-2xl">2. 10% to Justin Sun as top Holders </p>
              <p className="text-2xl">
                {" "}
                3. Fun begins, memes spread community builds
              </p>
              <p className="text-2xl">4. 5000 holders </p>
              <p className="text-2xl">5. Takeover the Tron meme universe </p>
            </div>
          </div>
          <Image
            className="col-span-2 object-contain lg:col-span-1"
            src="/11.png"
            alt=""
            width={350}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
