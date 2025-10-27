import ForgotPasswordComponent from "../components/ForgotPasswordPage";


export default function ForgotPasswordPage() {
  return (
    <div className="h-screen w-full flex items-center justify-between overflow-hidden">
      <ForgotPasswordComponent />

      <div className="w-[60%] h-full flex  flex-col items-center justify-around bg-[rgba(34,106,242,1)]  py-[50px]">
        <div className="w-[605px] h-[175px]  flex flex-col justify-between">
          <h1 className="font-poppins text-start font-normal text-[80px] leading-[70px] tracking-normal text-[rgba(238,238,238,1)] ">
            <span className="font-bold">Welcome to</span> Income Tax AI
          </h1>
          <p className="font-medium text-[16px] leading-none font-poppins tracking-normal text-[rgba(238,238,238,1)]">
            Create your account with ITAI
          </p>
        </div>

        <div className="w-[838px] h-[628px] flex items-center justify-center">
          <img
            src="/authImage.png"
            alt="Forgot Password Illustration"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
