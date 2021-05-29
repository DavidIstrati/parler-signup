import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Main({ children }) {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-1/2 h-screen flex flex-col justify-center items-center p-40">
        <div className="w-full flex justify-center items-center mb-10">
          <Image src="/parler-symbol.svg" width={50} height={50}></Image>
        </div>
        <Carousel
          emulateTouch={true}
          showArrows={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
        >
          <div className="inline-block rounded-lg w-1/2">
            <Image
              src="/verification.png"
              className="rounded-lg"
              width={543}
              height={400}
            />
            <div className="w-full flex justify-center py-4 backdrop-filter backdrop-blur-lg bg-white bg-opacity-70 rounded-lg mb-20">
              <span className="text-red-500 font-bold text-lg">
                Parler Citizen{" "}
                <span className="text-gray-400 font-normal">verification</span>
              </span>
            </div>
          </div>
          <div className="inline-block rounded-lg w-1/2">
            <Image
              src="/conversations.png"
              className="rounded-lg"
              width={543}
              height={400}
            />
            <div className="w-full flex justify-center py-4 backdrop-filter backdrop-blur-lg bg-white bg-opacity-70 rounded-lg">
              <span className="text-gray-500 font-normal text-lg text-center px-10">
                Real conversations on the
                <span className="text-red-500 font-bold">
                  {" "}
                  world's premier free
                </span>{" "}
                platform
              </span>
            </div>
          </div>
          <div className="inline-block rounded-lg w-1/2">
            <Image
              src="/ethical-standard.png"
              className="rounded-lg"
              width={543}
              height={400}
            />
            <div className="w-full flex justify-center py-4 backdrop-filter backdrop-blur-lg bg-white bg-opacity-70 rounded-lg">
              <span className="text-red-500 font-bold text-lg text-center px-10">
                A higher ethical
                <span className="text-gray-500 font-normal"> standard</span>
              </span>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="w-1/2 h-screen bg-white flex flex-col justify-between items-center pl-20 pr-40 pt-20 pb-20 overflow-hidden">
        {children}
        <div className="w-full mt-5">
          <span className="text-md font-light text-gray-900 opacity-80">
            Already have an account?{" "}
            <span className="border-b border-red-500 text-red-500">Log In</span>
          </span>
        </div>
      </div>
    </div>
  );
}
