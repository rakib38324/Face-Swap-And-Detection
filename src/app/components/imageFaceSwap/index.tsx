import Image from "next/image";
import React from "react";
import original from "../../../../public/target0.png";
import swap from "../../../../public/swap0.png";
import org1 from "../../../../public/en_original_1.jpg";
import org2 from "../../../../public/en_original_2.jpg";
import org3 from "../../../../public/en_original_3.jpg";
import swap1 from "../../../../public/target_1.jpg";
import swap2 from "../../../../public/target_2.jpg";
import swap3 from "../../../../public/target_3.jpg";
import example from "../../../../public/default.webp";

const ImageFaceSwap = () => {
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <section className="grid md:grid-cols-2 p-5">
        <div>
          <div className="grid md:grid-cols-2 gap-5 my-10">
            <div>
              <p className="text-black font-bold">Upload Original Image</p>
              <p className="text-slate-600 text-sm italic my-1">
                Retain areas outside of the face*
              </p>

              <div className="border-2 rounded-lg shadow-md border-dashed h-40 mt-5">
                <div className="w-1/6 h-1/2 mx-auto">
                  <Image className="mt-7" src={original} alt="original_image" />
                </div>
                <p className="text-center font-serif text-sm font-thin">
                  Upload Image
                </p>
              </div>

              <div className="my-5">
                <p className="my-2 font-mono font-thin">Try those images</p>
                <div className="flex gap-2">
                  <Image
                    className="w-1/4 cursor-pointer rounded-lg"
                    src={org1}
                    alt="logo"
                  />
                  <Image
                    className="w-1/4 cursor-pointer rounded-lg"
                    src={org2}
                    alt="logo"
                  />
                  <Image
                    className="w-1/4 cursor-pointer rounded-lg"
                    src={org3}
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-black font-bold">Upload Target face Image</p>
              <p className="text-slate-600 text-sm italic my-1">
                Swap face from original image*
              </p>

              <div className="border-2 rounded-lg shadow-md border-dashed h-40 mt-5">
                <div className="w-1/6 h-1/2 mx-auto">
                  <Image className="mt-7" src={swap} alt="original_image" />
                </div>
                <p className="text-center font-serif text-sm font-thin">
                  Upload Swap Image
                </p>
              </div>

              <div className="my-5">
                <p className="my-2 font-mono font-thin">Try those images</p>
                <div className="flex gap-2">
                  <Image
                    className="w-1/4 cursor-pointer rounded-lg"
                    src={swap1}
                    alt="logo"
                  />
                  <Image
                    className="w-1/4 cursor-pointer rounded-lg"
                    src={swap2}
                    alt="logo"
                  />
                  <Image
                    className="w-1/4 cursor-pointer rounded-lg"
                    src={swap3}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="py-4 cursor-pointer rounded-xl text-lg font-semibold text-center bg-gray-200">
            Swap Now
          </p>
        </div>
        <div>
          <p className="text-xl text-center font-semibold font-sans mt-10">
            Swap Faces with One Click
          </p>

          <div className="w-11/12 mx-auto my-10">
            <Image className="mx-auto" src={example} alt="Example" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageFaceSwap;
