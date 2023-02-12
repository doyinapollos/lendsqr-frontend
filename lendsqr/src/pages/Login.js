import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../helperFiles/url";
import lendsqrLogo from "../assets/svg/lendsqr-logo.svg";
import avaterImage from "../assets/svg/avater-image.svg";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] h-screen bg-[#ffffff] flex justify-around items-center ">
      <div className="w-[48%] h-screen flex flex-col justify-center items-center bg-[] ">
        <div className="w-[100%] h-[20%] flex flex-col justify-center items-center ">
          <div className="w-[90%] h-[120px] flex flex-col justify-end items-start ">
            <img className="w-[138px] h-[36px] " src={lendsqrLogo} alt="" />
          </div>
        </div>
        <div className="w-[100%] h-[80%] flex flex-col justify-center items-center ">
          <div className="w-[90%] h-[337px] flex flex-col justify-center items-center ">
            <img className="w-[100%] h-[100%] " src={avaterImage} alt="" />
          </div>
        </div>
      </div>
      <div className="w-[48%] h-screen flex flex-col justify-center items-center ">
        <div className="w-[73%] h-[60%]  ">
          <div className="w-[100%] h-[30%] ">
            <p className="text-[40px] font-[700] text-[#213F7D] leading-[55px] mb-[10px]  ">
              Welcome
            </p>
            <p className="text-[#545F7D] text-[20px] font-[400] leading-[27px]  ">
              Enter details to login.
            </p>
          </div>
          <form className="w-[100%] h-[70%] mt-[60px] ">
            <input
              type="text"
              placeholder="email"
              className="w-[100%] h-[48px] rounded-[5px] border-[2px] border-[rgba(84, 95, 125, 0.15)] p-[10px] "
            />
            <input
              type="text"
              placeholder="password"
              className="w-[100%] h-[48px] mt-[12px] rounded-[5px] border-[2px] border-[rgba(84, 95, 125, 0.15)] p-[10px] "
            />
            <div className="w-[100%] h-[50px] flex flex-col justify-center items-center ">
              <p className="text-[12px] font-[600] text-[#39CDCC] leading-[16px]">
                FORGOT PASSWORD?
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate(AuthRoutes.dashboard)}
              className="w-[100%] h-[48px] bg-[#39CDCC] rounded-[8px] flex justify-center items-center text-[#ffffff] font-[600] text-[15px] font-Raleway "
            >
              LOG IN{" "}
            </button>{" "}
          </form>
        </div>
      </div>{" "}
    </div>
  );
}

export default Login;
