"use client";
import { useState } from "react";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // For now, just log the email (later this will call the backend)
    console.log("Email entered:", email);

    // Example placeholder for future backend call:
    // await fetch("/api/auth/forgot-password", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email }),
    // });
  };

  return (
    <div className="w-[40%] h-full flex items-center justify-center">
      <div className="w-[414px] h-[750px] flex flex-col justify-between">
        <div className="h-[50%] flex flex-col justify-between">
          <div className="h-[180px] flex flex-col justify-between">
            <h1 className="font-poppins font-bold text-[48px] leading-[65px] text-black">
              Forgot Password?
            </h1>
            <p className="text-[16px] font-poppins font-[500] text-black/70">
              Don’t Worry, We Can Help
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col h-[170px] justify-between"
          >
            <div className="flex flex-col justify-between items-start h-[80px]">
              <label
                htmlFor="email"
                className="text-[14px] font-[500] font-roboto leading-[24px] text-black"
              >
                Please fill in your Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Alex@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[50px] pl-[20px] rounded-[5px] border border-black/20 font-poppins font-[600] leading-[24px] text-black/60"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full h-[48px] bg-[rgba(34,106,242,1)] text-white font-poppins font-[400] rounded-[12px] hover:bg-blue-700 transition-all cursor-pointer flex justify-center items-center"
            >
              Reset Your Password
            </button>
          </form>
        </div>

        <div className="h-[48px] w-full flex items-center justify-between">
          <h3 className="font-poppins text-[16px] text-black/50">
            Remember Your Password?
          </h3>
          <Link
            href="/login"
            className="flex justify-center items-center h-full w-[100px] rounded-[8px] bg-[rgba(35,106,242,1)] text-white font-[400] text-center hover:bg-blue-700 transition-colors font-poppins"
          >
            Login Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;


