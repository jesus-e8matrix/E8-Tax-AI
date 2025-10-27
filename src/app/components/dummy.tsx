<div className="w-[400px] bg-white shadow-md rounded-2xl p-8 flex flex-col items-center">
  {/* Heading */}
  <h1 className="text-2xl font-semibold mb-6 text-[#000]">Forgot Password</h1>

  {/* Form */}
  <form className="w-full flex flex-col space-y-4">
    <label htmlFor="email" className="text-sm font-medium text-gray-700">
      Alex@gmail.com
    </label>

    <input
      id="email"
      type="email"
      placeholder="Please fill in your Email Address"
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      type="submit"
      className="w-full py-3 mt-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all"
    >
      Reset Your Password
    </button>
  </form>

  {/* Footer text */}
  <div className="mt-6 text-sm text-gray-600">
    Remember Your Password?{" "}
    <a href="/login" className="text-blue-600 hover:underline font-medium">
      Login
    </a>
  </div>
</div>;
