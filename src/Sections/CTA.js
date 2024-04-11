import styles from "./styles.module.css";

const CTA = () => {
  return (
    <div className="mx-4 my-2 text-white rounded-[25px]">
      <div className="flex h-[330px] gap-[8px] justify-between">
        <div className="flex flex-col justify-between gap-2 basis-1/3">
          <div className=" p-6 flex flex-col gap-[10px] h-full bg-[#ffffff08] rounded-[25px]">
            <p className="text-2xl">Bring your imaginations to Life</p>
            <p className="text-lg opacity-60">
              Among the brands I've used, there's a spectrum of quality and
              reliability. Some brands stand out for their innovative designs
            </p>
          </div>
          <div className="h-[50px] w-full flex justify-between items-center border rounded-[10px] border-[#ffffff4d] p-6 cursor-pointer">
            <p>Buy Now</p>
            <p>{">"}</p>
          </div>
        </div>
        <div className="w-full h-full rounded-[25px] overflow-hidden basis-2/3">
          <img
            className="object-cover w-full h-full rounded-[25px]"
            src="https://media.istockphoto.com/id/1435155757/photo/pallet-of-concrete-cinder-blocks-grey-uniformed-brick-shapes-building-material-new-for-use-on.jpg?s=612x612&w=0&k=20&c=KbVZUrd3_WzwdWlfaglOAoqCp7enBGsvwJjQrbQnXYA="
          />
          {/* <div className="relative text-white">
            <div className={`${styles.marquee}`}>
              <p className="text-xl absolute">
                Projects Projects Projects Projects Projects &nbsp;
              </p>
            </div>
            <div className={`${(styles.marquee, styles.marquee2)}`}>
              <p className="text-xl absolute">
                Projects Projects Projects Projects Projects &nbsp;
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CTA;
