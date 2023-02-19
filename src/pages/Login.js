/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthRoutes } from '../helpers/url';
import lendsqrLogo from '../assets/svg/lendsqr-logo.svg';
import avaterImage from '../assets/svg/avater-image.svg';
import Buttons from '../components/buttons';

function Login() {
  const navigate = useNavigate();
  const [buttonIsLoading, setButtonIsLoading] = useState(false);

  const handleLogin = () => {
    setButtonIsLoading(true);
    setTimeout(() => {
      navigate(AuthRoutes.dashboard);
    }, 3000);
  };

  return (
    <div className="w-[100%] h-screen bg-white flex justify-around items-center ">
      <div className="w-[48%] h-screen flex flex-col justify-center items-center bg-[] ">
        <div className="w-[100%] h-[20%] flex flex-col justify-center items-center ">
          <div className="w-[90%] h-[120px] flex flex-col justify-end items-start ">
            <img className="w-[140px] h-[38px] " src={lendsqrLogo} alt="" />
          </div>{' '}
        </div>{' '}
        <div className="w-[100%] h-[80%] flex flex-col justify-center items-center ">
          <div className="w-[90%] h-[337px] flex flex-col justify-center items-center ">
            <img className="w-[100%] h-[100%] " src={avaterImage} alt="" />
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <div className="w-[48%] h-screen flex flex-col justify-center items-center ">
        <div className="w-[73%] h-[60%]  ">
          <div className="w-[100%] h-[30%] ">
            <p className="font-avenirNextBold text-[40px] font-[700] text-[#213F7D] leading-[55px] mb-[10px]  ">
              Welcome!
            </p>{' '}
            <p className="text-[#545F7D] text-[20px] font-[400] leading-[27px] font-AvenirNextLight  ">
              Enter details to login.{' '}
            </p>{' '}
          </div>{' '}
          <form className="w-[100%] h-[70%] mt-[60px] ">
            <input
              type="text"
              value="doyinapollos@gmail.com"
              placeholder="Email"
              className="w-[100%] h-[48px] rounded-[5px] border-[2px] border-[rgba(84, 95, 125, 0.15)] p-[10px] "
            />
            <input
              type="password"
              value="password"
              placeholder="Password"
              className="w-[100%] h-[48px] mt-[12px] rounded-[5px] border-[2px] border-[rgba(84, 95, 125, 0.15)] p-[10px] "
            />
            <div className="w-[100%] h-[50px] flex flex-col justify-center items-center ">
              <p className="text-[12px] font-[600] text-[#39CDCC] leading-[16px] AvenirNextRegular ">
                FORGOT PASSWORD ?
              </p>{' '}
            </div>{' '}
            {buttonIsLoading ? (
              <Buttons
                specificButtonTitle="Login"
                specificButtonStyling="w-[100%] h-[48px] bg-[#39CDCC] rounded-[8px] font-[600] text-[15px] font-avenirNextBold flex flex-col justify-center items-center "
                specificButtonText={
                  <Oval
                    height={20}
                    width={20}
                    color="white"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible
                    ariaLabel="oval-loading"
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                }
              />
            ) : (
              <Buttons
                specificButtonTitle="Login"
                specificButtonStyling="w-[100%] h-[48px] bg-[#39CDCC] rounded-[8px] font-[600] text-[15px] font-avenirNextBold flex flex-col justify-center items-center "
                specificButtonText="LOGIN"
                specificButtonClick={handleLogin}
              />
            )}{' '}
          </form>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

export default Login;
