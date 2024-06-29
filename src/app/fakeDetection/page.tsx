import Image from "next/image";
import React from "react";
import original from "../../../public/upload.png";
import example from "../../../public/video_default.jpg";

const FaceDetection = () => {
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <section className="grid md:grid-cols-2 p-5">
        <div>
          <div className=" my-10">
            <div>
              <p className="text-black font-bold">Upload a Video</p>

              <p className="text-slate-600 text-sm italic my-1">
                Target video upload here
              </p>
              <div className="border-2 rounded-lg shadow-md border-dashed h-40 mt-5">
                <div className="w-1/4 h-1/4 mx-auto">
                  <Image
                    width={200}
                    height={200}
                    className="mt-7"
                    src={original}
                    alt="original_image"
                  />
                </div>
                <p className="text-center font-serif text-sm font-thin mt-5">
                  Upload <span className="text-red-600">Video</span> or{" "}
                  <span className="text-red-600">GIF</span>
                </p>
                <p className="text-center font-serif text-sm font-thin">Max 500MB, <span className="text-red-600">Up to 30 minutes</span></p>
              </div>

              
            </div>

            
          </div>

          <p className="py-4 cursor-pointer rounded-xl text-lg font-semibold text-center bg-gray-200">
            Start Detection
          </p>
        </div>
        <div>
          <p className="text-xl text-center font-semibold font-sans mt-10">
            Identify this video is real or fake.
          </p>

          <div className="w-11/12 mx-auto my-10">
            <Image className="mx-auto" src={example} alt="Example" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaceDetection;
