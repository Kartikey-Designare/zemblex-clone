const Sidebar = () => {
  return (
    <div className="fixed w-[240px] h-full text-white bg-[rgba(255,255,255,0.03)] border-r border-[rgba(255,255,255,0.1)] flex flex-col">
      <div className="pl-4 h-[64px] border-b border-[rgba(255,255,255,0.1)] flex items-center gap-4">
        <div className="rounded-full bg-gradient-to-bl from-slate-600 to-slate-300 h-8 w-8"></div>
        <p className="text-[28px] text-[rgba(255,255,255,0.61)]">ZembleX</p>
      </div>
      <div className="pt-8 px-4 flex gap-1 flex-col h-full">
        <p className="text-xs">Menu</p>
        <div className="flex gap-[10px] items-center px-1 py-2 border border-[rgba(255,255,255,0.1)] rounded-[10px] bg-[rgba(255,255,255,0.05)] cursor-pointer">
          <div className="w-[17px] h-[17px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              color="rgb(255, 255, 255)"
              fill="rgb(255, 255, 255)"
              //   style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(255, 255, 255); color: rgb(255, 255, 255); flex-shrink: 0;"
            >
              <g color="rgb(255, 255, 255)" weight="bold">
                <path d="M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H52V117.28l76-71.75,76,71.75Z"></path>
              </g>
            </svg>
          </div>

          <p className="text-sm">Home</p>
        </div>
      </div>
      <div className="px-4 h-[52px] mx-4 my-2 border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center gap-4">
        <div className="p-[8px] flex gap-[6px]">
          {[1, 2, 3, 4].map(() => {
            return (
              <div className="w-[36px] h-[36px] cursor-pointer flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  width="18"
                  height="18"
                  fill="rgba(255, 255, 255, 0.5)"
                  color="rgba(255, 255, 255, 0.5)"
                  // style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgba(255, 255, 255, 0.5); color: rgba(255, 255, 255, 0.5); flex-shrink: 0;"
                >
                  <g color="rgba(255, 255, 255, 0.5)" weight="regular">
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                  </g>
                </svg>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-4 h-[64px] border-t border-[rgba(255,255,255,0.1)] flex items-center gap-4">
        <div className="rounded-[10px] bg-gradient-to-bl from-slate-600 to-slate-300 h-10 w-10"></div>
        <div>
          <p className="text-[16px] text-[rgba(255,255,255,0.61)]">
            Kartikey Soni
          </p>
          <p className="text-[14px] text-[rgba(255,255,255,0.61)]">Available</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
