import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <div className=" absolute top-0 left-0 right-0 opacity-85 -z-10 ">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 450" opacity="0.57">
                    <defs>
                        <filter
                            id="bbblurry-filter"
                            x="-100%"
                            y="-100%"
                            width="400%"
                            height="400%"
                            filterUnits="objectBoundingBox"
                            primitiveUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur
                                stdDeviation="104"
                                x="0%"
                                y="0%"
                                width="100%"
                                height="100%"
                                in="SourceGraphic"
                                edgeMode="none"
                                result="blur"
                            ></feGaussianBlur>
                        </filter>
                    </defs>
                    <g filter="url(#bbblurry-filter)">
                        <ellipse rx="277.5" ry="160.5" cx="405.10260009765625" cy="31.7124939821025" fill="hsla(209, 100%, 57%, 1.00)"></ellipse>
                    </g>
                </svg>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                VirtualR build tools
                <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text "> for developers</span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your
                imagination into immersive reality!
            </p>
            <div className="flex justify-center my-10">
                <a
                    href="#"
                    className="bg-gradient-to-r from-blue-500 to-blue-900 bg-[150%_auto] cursor-pointer hover:bg-right transition-all duration-500 py-3 px-4 mx-3 rounded-md"
                >
                    Start for free
                </a>
                <a href="#" className="py-3 px-4 mx-3 hover:border-blue-500 rounded-md border">
                    Documentation
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border hue-rotate-171 border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4">
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2 border hue-rotate- border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4">
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default HeroSection;
