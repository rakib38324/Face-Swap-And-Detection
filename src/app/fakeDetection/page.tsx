"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";
import original from "../../../public/upload.png";
import example from "../../../public/video_default.jpg";
import toast from "react-hot-toast";

const FakeDetection = () => {
  const [attachment, setAttachment] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAttachment(e.target.files[0]);
    }
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Processing...");

    console.log(email);

    if (email) {
      setMessage(`After Processing, we send it into ${email} this email. `);
      toast.success(`After Processing, We send it into ${email} this email. `, {
        id: toastId,
        duration: 100000,
      });
    }
  };

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
              <div className="border-2 rounded-lg shadow-md border-dashed  mt-5">
                <form onSubmit={(e) => onSubmitHandler(e)}>
                  <div className=" cursor-pointer">
                    <label htmlFor="files" className=" bg-[#F5F7F8]">
                      <div className="w-1/4 h-1/4 mx-auto cursor-pointer">
                        <Image
                          width={200}
                          height={200}
                          className="mt-7"
                          src={original}
                          alt="original_image"
                        />
                      </div>
                      <p className=" text-center font-serif text-sm font-thin mt-5">
                        Upload <span className="text-red-600">Video</span> or{" "}
                        <span className="text-red-600">GIF</span>
                      </p>
                      <p className="text-center font-serif text-sm font-thin mb-10">
                        Max 500MB,{" "}
                        <span className="text-red-600">Up to 30 minutes</span>
                      </p>
                      <div
                        className={`${
                          attachment ? "block" : "hidden"
                        } text-bold font-bold text-center mt-2`}
                      >
                        {attachment
                          ? "Your file selected. Now put your email."
                          : ""}
                      </div>
                    </label>
                    <input
                      type="file"
                      name="files"
                      id="files"
                      onChange={handleFileChange}
                      hidden
                    />
                  </div>

                  <div
                    className={`${
                      attachment ? "block" : "hidden"
                    } w-1/2 mx-auto my-10`}
                  >
                    <input
                      className="border p-2 rounded-md"
                      type="email"
                      placeholder="Enter you email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {message && <p className="text-center text-green-600 font-serif text-lg">{message}</p>}
                  <div
                    className={`${
                      email ? "block" : "hidden"
                    }  w-1/2 flex justify-center mx-auto`}
                  >
                    <button
                      type="submit"
                      className="my-2 px-4 py-4  cursor-pointer rounded-xl text-lg font-semibold text-center bg-gray-200"
                    >
                      Start Detection
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
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

export default FakeDetection;
