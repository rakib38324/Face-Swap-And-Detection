"use client";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import original from "../../../public/upload.png";
import example from "../../../public/video_default.jpg";
import toast from "react-hot-toast";

const ImageFaceSwap = () => {
  const [realVideo, setRealVideo] = useState<File | null>(null);
  const [targetImage, setTargetImage] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleRealVideo = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setRealVideo(e.target.files[0]);
    }
  };

  const handleTargetImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setTargetImage(e.target.files[0]);
    }
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Processing...");

    if (email) {
      setMessage(`After Processing, we send it into ${email} this email. `);
      toast.success(`After Processing, We send it into ${email} this email. `, {
        id: toastId,
        duration: 9000,
      });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <section className="grid md:grid-cols-2 p-5">
        <div>
          <form onSubmit={onSubmitHandler}>
            <div className="grid md:grid-cols-2 gap-5 my-10">
              <div>
                <div>
                  <p className="text-black font-bold">Upload a Video or GIF</p>
                  <p className="text-slate-600 text-sm italic my-1">
                    Swap face from original video*
                  </p>
                </div>
                <div className="border-2 rounded-lg shadow-md border-dashed h-40 mt-5 cursor-pointer">
                  <label htmlFor="realVideo" className="bg-[#F5F7F8]">
                    <div className="w-1/4 h-1/4 mx-auto cursor-pointer">
                      <Image
                        className="mt-7"
                        src={original}
                        alt="original_image"
                      />
                    </div>
                    <div>
                      <div className="text-center font-serif text-sm font-thin mt-10">
                        {realVideo ? (
                          <span className="text-blue-600 font-semibold">
                            Video Selected
                          </span>
                        ) : (
                          <div>
                            <p className="text-center font-serif text-sm font-thin ">
                              Upload <span className="text-red-600">Video</span>{" "}
                              or <span className="text-red-600">GIF</span>
                            </p>
                            <p className="text-center font-serif text-sm font-thin">
                              Max 500MB,{" "}
                              <span className="text-red-600">
                                Up to 30 minutes
                              </span>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </label>
                  <input
                    type="file"
                    id="realVideo"
                    onChange={handleRealVideo}
                    hidden
                    accept="video/*"
                  />
                </div>
                {realVideo && (
                  <div className="mt-5">
                    <video className="w-full h-auto" controls>
                      <source
                        src={URL.createObjectURL(realVideo)}
                        type={realVideo.type}
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>

              <div>
                <p className="text-black font-bold">Upload Target face</p>
                <p className="text-slate-600 text-sm italic my-1">
                  Swap face from original image*
                </p>
                <div className="border-2 rounded-lg shadow-md border-dashed h-40 mt-5 cursor-pointer">
                  <label htmlFor="targetImage" className="bg-[#F5F7F8]">
                    <div className="w-1/4 h-1/4 mx-auto">
                      <Image
                        className="mt-7"
                        src={original}
                        alt="original_image"
                      />
                    </div>
                    <div>
                      <div className="text-center font-serif text-sm font-thin mt-10">
                        {targetImage ? (
                          <span className="text-blue-600 font-semibold">
                            Image Selected
                          </span>
                        ) : (
                          <div>
                            <p className="text-center font-serif text-sm font-thin mt-5">
                              Upload <span className="text-red-600">Swap</span>{" "}
                              Image
                            </p>
                            <p className="text-center font-serif text-sm font-thin">
                              Only support face swap for{" "}
                              <span className="text-red-600">one</span> person
                              now
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </label>
                  <input
                    type="file"
                    id="targetImage"
                    onChange={handleTargetImage}
                    hidden
                    accept="image/*"
                  />
                </div>
                {targetImage && (
                  <div className="mt-5">
                    <Image
                      width={200}
                      height={200}
                      className="w-1/2 mx-auto h-auto"
                      src={URL.createObjectURL(targetImage)}
                      alt="Target"
                    />
                  </div>
                )}
              </div>
            </div>

            <div>
              <div
                className={`${
                  realVideo && targetImage ? "block" : "hidden"
                } w-1/2 mx-auto my-10`}
              >
                <input
                  className="border p-2 rounded-md"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {message && (
                <p className="text-center text-green-600 font-bold my-4 font-serif text-lg">
                  {message}
                </p>
              )}

              <button className="w-full py-4 cursor-pointer rounded-xl text-lg font-semibold text-center bg-gray-200">
                Swap Now
              </button>
            </div>
          </form>
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
