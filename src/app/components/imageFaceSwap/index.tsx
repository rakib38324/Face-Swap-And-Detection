"use client";
import Image from "next/image";
import React, { FormEvent, useState, ChangeEvent } from "react";
import original from "../../../../public/target0.png";
import swap from "../../../../public/swap0.png";
import org1 from "../../../../public/en_original_1.jpg";
import org2 from "../../../../public/en_original_2.jpg";
import org3 from "../../../../public/en_original_3.jpg";
import swap1 from "../../../../public/target_1.jpg";
import swap2 from "../../../../public/target_2.jpg";
import swap3 from "../../../../public/target_3.jpg";
import example from "../../../../public/default.webp";
import toast from "react-hot-toast";

const ImageFaceSwap = () => {
  const [swapImage, setSwapImage] = useState<string | null>(null);
  const [realImage, setRealImage] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleRealImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setRealImage(URL.createObjectURL(file));
    }
  };

  const handleSwapImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSwapImage(URL.createObjectURL(file));
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
          <div>
            <form onSubmit={onSubmitHandler}>
              <div className="grid md:grid-cols-2 gap-5 my-10">
                <div>
                  <div>
                    <p className="text-black font-bold">
                      Upload Original Image
                    </p>
                    <p className="text-slate-600 text-sm italic my-1">
                      Retain areas outside of the face*
                    </p>
                  </div>

                  <div className="border-2 rounded-lg shadow-md border-dashed h-40 mt-5 cursor-pointer">
                    <label htmlFor="realImage" className="bg-[#F5F7F8]">
                      <div className="w-1/4 h-1/4 mx-auto cursor-pointer">
                        <Image
                          className="mt-7"
                          src={original}
                          alt="original_image"
                        />
                      </div>
                      <div>
                        <p className="text-center font-serif text-sm font-thin mt-10">
                          {realImage ? (
                            <span className="text-blue-600 font-semibold">
                              Image Selected
                            </span>
                          ) : (
                            "Upload Image"
                          )}
                        </p>
                      </div>
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="realImage"
                      onChange={handleRealImageChange}
                      hidden
                    />
                  </div>
                  {realImage && (
                    <div className="mt-5">
                      <Image
                        width={200}
                        height={200}
                        className="w-full h-auto"
                        src={realImage}
                        alt="Selected original"
                      />
                    </div>
                  )}

                  <div className="my-5">
                    <p className="my-2 font-mono font-thin">Try these images</p>
                    <div className="flex gap-2">
                      <Image
                        className="w-1/4 cursor-pointer rounded-lg"
                        onClick={() => setRealImage(org1.src)}
                        src={org1}
                        alt="logo"
                      />
                      <Image
                        className="w-1/4 cursor-pointer rounded-lg"
                        onClick={() => setRealImage(org2.src)}
                        src={org2}
                        alt="logo"
                      />
                      <Image
                        className="w-1/4 cursor-pointer rounded-lg"
                        onClick={() => setRealImage(org3.src)}
                        src={org3}
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-black font-bold">
                    Upload Target Face Image
                  </p>
                  <p className="text-slate-600 text-sm italic my-1">
                    Swap face from original image*
                  </p>
                  <div className="border-2 rounded-lg shadow-md border-dashed h-40 mt-5 cursor-pointer">
                    <label htmlFor="swapImage" className="bg-[#F5F7F8]">
                      <div className="w-1/4 h-1/4 mx-auto cursor-pointer">
                        <Image className="mt-7" src={swap} alt="swap_image" />
                      </div>
                      <div>
                        <p className="text-center font-serif text-sm font-thin mt-10">
                          {swapImage ? (
                            <span className="text-blue-600 font-semibold">
                              Image Selected
                            </span>
                          ) : (
                            "Upload Swap Image"
                          )}
                        </p>
                      </div>
                    </label>
                    <input
                      type="file"
                      id="swapImage"
                      accept="image/*"
                      onChange={handleSwapImageChange}
                      hidden
                    />
                  </div>
                  {swapImage && (
                    <div className="mt-5">
                      <Image
                        width={200}
                        height={200}
                        className="w-full h-auto"
                        src={swapImage}
                        alt="Selected swap"
                      />
                    </div>
                  )}
                  <div className="my-5">
                    <p className="my-2 font-mono font-thin">Try these images</p>
                    <div className="flex gap-2">
                      <Image
                        onClick={() => setSwapImage(swap1.src)}
                        className="w-1/4 cursor-pointer rounded-lg"
                        src={swap1}
                        alt="logo"
                      />
                      <Image
                        className="w-1/4 cursor-pointer rounded-lg"
                        onClick={() => setSwapImage(swap2.src)}
                        src={swap2}
                        alt="logo"
                      />
                      <Image
                        className="w-1/4 cursor-pointer rounded-lg"
                        onClick={() => setSwapImage(swap3.src)}
                        src={swap3}
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div
                  className={`${
                    swapImage && realImage ? "block" : "hidden"
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
