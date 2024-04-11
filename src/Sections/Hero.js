const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-[4px]">
      <div className="py-[8px] flex justify-between">
        <div className="bg-[#ffffff0f] rounded-[10px] h-[48px] w-[300px] p-2 text-white flex items-center gap-3 cursor-pointer">
          <div className="w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              color="rgba(255,255,255,0.6)"
              // style="color:rgba(0, 0, 0, 0)"
            >
              <path
                d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <p className="text-sm opacity-60">search here...</p>
        </div>
        <div className="flex gap-4">
          {[1, 2, 3, 4].map(() => {
            return (
              <div className="bg-[#ffffff0f] w-[48px] h-[48px] rounded-[10px] flex justify-center items-center cursor-pointer">
                <div className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    color="rgba(255, 255, 255, 0.9)"
                    fill="rgba(255, 255, 255, 0.9)"
                    // style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgba(255, 255, 255, 0.9); color: rgba(255, 255, 255, 0.9); flex-shrink: 0;"
                  >
                    <g color="rgba(255, 255, 255, 0.9)" weight="regular">
                      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#050505] h-[594px] rounded-[25px] text-white flex p-4 pt-8">
        <div className="w-full h-full p-2 pt-4 flex flex-col gap-6">
          <p className="text-[48px]">
            Make your Website Standout Using Futuristic Templates
          </p>
          <p className="text-[18px] font-light opacity-60">
            Step into a world of cutting edge design and limitless
            possibilities. Elevate your experience with our futuristic
            templates, crafting a tomorrow that starts now.
          </p>
          <div className="flex gap-[10px]">
            <div className="h-[48px] w-[200px] flex justify-between items-center border rounded-[10px] border-[#ffffff4d] p-6 cursor-pointer"><p>Buy Now</p><p>{">"}</p></div>
            <div className="h-[48px] flex gap-1 items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                width={24}
                height={24}
                color="rgba(255, 255, 255, 0.85)"
                fill= "rgba(255, 255, 255, 0.85)"
                // style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgba(255, 255, 255, 0.85); color: rgba(255, 255, 255, 0.85); flex-shrink: 0;"
              >
                <g color="rgba(255, 255, 255, 0.85)" weight="regular">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm36.44-94.66-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17Z"></path>
                </g>
              </svg>
              <p>Explore More</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl">320+</p>
              <p className="text-sm font-light">Happy Customers</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl">100K+</p>
              <p className="text-sm font-light">Insagram Followers</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl">1.5M</p>
              <p className="text-sm font-light">Behance Views</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="w-[516px] h-[450px] rounded-[25px] overflow-hidden flex justify-center items-center">
            <video
              className="object-cover w-full h-full"
              src="https://framerusercontent.com/assets/InV1Z72FFcxtqts0HNLqdGAZg.mp4"
              loop
              muted
              playsInline
              autoPlay
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
