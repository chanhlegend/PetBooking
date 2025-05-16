import React, { useState } from "react";

const OTPVerifyPage = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Tự động focus sang ô tiếp theo
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    console.log("OTP nhập:", code);
    // TODO: Gửi mã xác thực lên server
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white p-4">
      <div className="bg-white w-full max-w-5xl h-[500px] flex shadow-2xl rounded-3xl overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-12 py-8">
          <h1 className="text-[28px] font-extrabold text-[#2a2e83] mb-6">
            Xác nhận OTP
          </h1>

          <div className="mb-4 flex flex-col items-center">
            <i className="fas fa-mobile-alt text-3xl text-[#c56a38] mb-2"></i>
            <span className="text-sm text-[#2a2e83]">Nhập mã</span>
          </div>

          <form onSubmit={handleSubmit} className="mb-6 flex space-x-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center text-xl border-2 border-[#c56a38] rounded-lg focus:outline-none"
              />
            ))}
          </form>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#c56a38] text-white px-6 py-2 rounded-full hover:bg-[#a8542d] transition-all"
          >
            Xác nhận
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 hidden md:block">
          <img
            src="https://storage.googleapis.com/a1aa/image/f14b8c57-4009-40cf-05bc-6871b0b813c5.jpg"
            alt="OTP"
            className="w-full h-full object-cover object-center rounded-tr-3xl rounded-br-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default OTPVerifyPage;
