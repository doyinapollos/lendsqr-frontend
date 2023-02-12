import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import lendsqrLogo from "../assets/svg/lendsqr-logo.svg";
import searchIcon from "../assets/svg/search-icon.svg";
import notificationIcon from "../assets/svg/notification-icon.svg";
import profilePic from "../assets/svg/profile-picture.svg";
import dropDownIcon from "../assets/svg/drop-down-icon.svg";
import briefcaseIcon from "../assets/svg/briefcase-icon.svg";
import arrowDropDown from "../assets/svg/arrow-drop-down.svg";
import homeIcon from "../assets/svg/home-icon.svg";
import profileAvater from "../assets/svg/profile-averta-icon.svg";
import networkIcon from "../assets/svg/network-icon.svg";
import optionsIcon from "../assets/svg/options-icon.svg";
import nextArrow from "../assets/svg/next-arrow.svg";
import prevArrow from "../assets/svg/prev-arrow.svg";
import inBetweenIcon from "../assets/svg/inbetween-icon.svg";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] h-[900px] bg-[] text-center flex flex-col justify-center items-center ">
      <div className="w-[100%] h-[10%] flex justify-center items-center bg-[#ffffff] ">
        <div className="w-[20%] h-[100%] flex flex-col justify-center items-start ">
          <img
            onClick={() => navigate(NonAuthRoutes.login)}
            className="w-[138px] h-[36px] ml-[20px] "
            src={lendsqrLogo}
            alt=""
          />
        </div>
        <div className="w-[80%] h-[100%] flex flex-row justify-center items-center ">
          <div className="w-[60%] h-[100%] flex flex-col justify-center items-center ">
            <div className="flex w-[452px] h-[42px] border-[1px] border-[#077369] rounded-[5px]  ">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-[400px] h-[40px] p-[5px] "
              />
              <div className="w-[56px] h-[40px] bg-[#39CDCC] flex flex-col justify-center items-center ">
                <img className="w-[14px] h-[14px] " src={searchIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[40%] h-[100%] flex justify-center items-center ">
            <p className="mr-[25px] ">Docs</p>
            <div className="mr-[25px]">
              <img
                className="w-[20px] h-[22px] "
                src={notificationIcon}
                alt=""
              />
            </div>
            <div className="mr-[5px]">
              <img
                className="w-[48px] h-[48px] rounded-[50%] "
                src={profilePic}
                alt=""
              />
            </div>
            <p className="mr-[4px]">Adedeji</p>
            <div>
              <img className="w-[7px] h-[4px] " src={dropDownIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[90%] flex justify-center items-center ">
        <div className="w-[20%] h-[100%] flex flex-col justify-center items-start ">
          <div className="w-[100%] h-[55%] bg-[#ffffff] ml-[20px] ">
            <div className="flex justify-start items-center py-[20px] ">
              <img className="w-[16px] h-[7px] " src={briefcaseIcon} alt="" />
              <p className="text-[#213F7D] text-[16px] font-[400] mx-[6px] ">
                Switch Organization
              </p>
              <img className="w-[7px] h-[11px] " src={arrowDropDown} alt="" />
            </div>
            <div className=" flex justify-start items-center py-[10px] ">
              <img
                className="w-[11px] h-[9px] text-[#213F7D] "
                src={homeIcon}
                alt=""
              />
              <p className="text-[#213F7D] text-[16px] font-[400] ml-[6px] ">
                Dashboard
              </p>
            </div>
            <div className="flex flex-col justify-center items-start pt-[10px] ">
              <p className="text-[18px] pb-[5px] ">CUSTOMERS</p>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[45%] bg-[#ffffff] ml-[20px] ">
            <div className="flex flex-col justify-center items-start pt-[10px] ">
              <p className="text-[18px] pb-[5px] ">CUSTOMERS</p>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
              <div className="w-[38%] flex justify-between items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ">
                  Dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] h-[100%] flex flex-col justify-between items-center bg-[#FBFBFB]">
          <div className="w-[95%] h-[28%] flex flex-col justify-between items-center ">
            <div className="w-[100%] h-[30%] flex flex-col justify-center items-center">
              <div className="w-[90%] h-[100%] flex flex-col justify-center items-start font-[700]  ">
                <p className="">Users</p>
              </div>
            </div>

            <div className="w-[100%] h-[70%] flex flex-col  justify-center items-center">
              <div className="w-[90%] h-[100%] flex  justify-around items-center">
                <div className="w-[240px] h-[130px] bg-[#ffffff] m-[5px] flex flex-col  justify-center items-center  ">
                  <div className="w-[80%] h-[80%] flex flex-col  justify-around items-start ">
                    <img
                      className="w-[14px] h-[14px] "
                      src={profileAvater}
                      alt=""
                    />
                    <p className="text-[12px] text-[#545F7D] font-[500] ">
                      USERS
                    </p>
                    <p className="text-[20px] font-[500] text-[#545F7D] ">
                      2,453
                    </p>
                  </div>
                </div>
                <div className="w-[240px] h-[130px] bg-[#ffffff] m-[5px] flex flex-col  justify-center items-center  ">
                  <div className="w-[80%] h-[80%] flex flex-col  justify-around items-start ">
                    <img
                      className="w-[14px] h-[14px] "
                      src={profileAvater}
                      alt=""
                    />
                    <p className="text-[12px] text-[#545F7D] font-[500] ">
                      USERS
                    </p>
                    <p className="text-[20px] font-[500] text-[#545F7D] ">
                      2,453
                    </p>
                  </div>
                </div>
                <div className="w-[240px] h-[130px] bg-[#ffffff] m-[5px] flex flex-col  justify-center items-center  ">
                  <div className="w-[80%] h-[80%] flex flex-col  justify-around items-start ">
                    <img
                      className="w-[14px] h-[14px] "
                      src={profileAvater}
                      alt=""
                    />
                    <p className="text-[12px] text-[#545F7D] font-[500] ">
                      USERS
                    </p>
                    <p className="text-[20px] font-[500] text-[#545F7D] ">
                      2,453
                    </p>
                  </div>
                </div>
                <div className="w-[240px] h-[130px] bg-[#ffffff] m-[5px] flex flex-col  justify-center items-center  ">
                  <div className="w-[80%] h-[80%] flex flex-col  justify-around items-start ">
                    <img
                      className="w-[14px] h-[14px] "
                      src={profileAvater}
                      alt=""
                    />
                    <p className="text-[12px] text-[#545F7D] font-[500] ">
                      USERS
                    </p>
                    <p className="text-[20px] font-[500] text-[#545F7D] ">
                      2,453
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] h-[60%] flex flex-col justify-center items-center ">
            <div className="w-[95%] h-[10%] flex  justify-around items-center text-[12px] font-[700] bg-[#ffffff] ">
              <div className="w-[33%] h-[100%] flex  justify-around items-center ">
                <div className="flex">
                  <p>ORGANIZATION</p>
                  <img className="ml-[6px] " src={networkIcon} alt="" />
                </div>
                <div className="flex">
                  <p>USERNAME</p>
                  <img className="ml-[6px] " src={networkIcon} alt="" />
                </div>
                <div className="flex">
                  <p>EMAIL</p>
                  <img className="ml-[6px] " src={networkIcon} alt="" />
                </div>
              </div>
              <div className="w-[28%] h-[100%] flex  justify-around items-center ">
                <div className="flex">
                  <p>PHONE NUMBER</p>
                  <img className="ml-[6px] " src={networkIcon} alt="" />
                </div>
                <div className="flex">
                  <p>DATE JOINED</p>
                  <img className="ml-[6px] " src={networkIcon} alt="" />
                </div>
              </div>
              <div className="w-[16%] h-[100%] flex  justify-start items-center ">
                <div className="flex">
                  <p>STATUS</p>
                  <img className="ml-[6px] " src={networkIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[95%] h-[90%] bg-[#ffffff] flex flex-col  justify-around items-center text-[13px] ">
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p>Lendsqr</p>
                <p>Adedeji</p>
                <p>adedeji@lendsqr.com</p>
                <p>08078903721</p>
                <p>May 15, 2020 10:00 AM</p>
                <button className="w-[65px] h-[20px] text-[12px] bg-[#545F7D] rounded-[100px] ">
                  Inactive
                </button>
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p>Lendsqr</p>
                <p>Adedeji</p>
                <p>adedeji@lendsqr.com</p>
                <p>08078903721</p>
                <p>May 15, 2020 10:00 AM</p>
                <button className="w-[65px] h-[20px] text-[12px] bg-[#545F7D] rounded-[100px] ">
                  Inactive
                </button>
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p>Lendsqr</p>
                <p>Adedeji</p>
                <p>adedeji@lendsqr.com</p>
                <p>08078903721</p>
                <p>May 15, 2020 10:00 AM</p>
                <button className="w-[65px] h-[20px] text-[12px] bg-[#E9B200] rounded-[100px] text-[#E4033B] ">
                  Blacklisted
                </button>
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p>Lendsqr</p>
                <p>Adedeji</p>
                <p>adedeji@lendsqr.com</p>
                <p>08078903721</p>
                <p>May 15, 2020 10:00 AM</p>
                <button className="w-[65px] h-[20px] text-[12px] bg-[#545F7D] rounded-[100px] ">
                  Inactive
                </button>
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p>Lendsqr</p>
                <p>Adedeji</p>
                <p>adedeji@lendsqr.com</p>
                <p>08078903721</p>
                <p>May 15, 2020 10:00 AM</p>
                <button className="w-[65px] h-[20px] text-[12px] bg-[#545F7D] rounded-[100px] ">
                  Inactive
                </button>
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p>Lendsqr</p>
                <p>Adedeji</p>
                <p>adedeji@lendsqr.com</p>
                <p>08078903721</p>
                <p>May 15, 2020 10:00 AM</p>
                <button className="w-[65px] h-[20px] text-[12px] bg-[#545F7D] rounded-[100px] ">
                  Inactive
                </button>
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p>Lendsqr</p>
                <p>Adedeji</p>
                <p>adedeji@lendsqr.com</p>
                <p>08078903721</p>
                <p>May 15, 2020 10:00 AM</p>
                <button className="w-[65px] h-[20px] text-[12px] bg-[#545F7D] rounded-[100px] ">
                  Inactive
                </button>
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p>Lendsqr</p>
                <p>Adedeji</p>
                <p>adedeji@lendsqr.com</p>
                <p>08078903721</p>
                <p>May 15, 2020 10:00 AM</p>
                <button className="w-[65px] h-[20px] text-[12px] bg-[#545F7D] rounded-[100px] ">
                  Inactive
                </button>
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] ">
                <p>Lendsqr</p>
                <p>Adedeji</p>
                <p>adedeji@lendsqr.com</p>
                <p>08078903721</p>
                <p>May 15, 2020 10:00 AM</p>
                <button className="w-[65px] h-[20px] text-[12px] bg-[#545F7D] rounded-[100px] ">
                  Inactive
                </button>
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[90%] h-[10%] flex flex-col justify-center items-center mt-[0px] ">
            <div className="w-[90%] h-[100%] flex justify-between items-start ">
              <div className="w-[35%] h-[50%] flex justify-around items-center ">
                <p>Showing</p>
                <div className="flex justify-around items-center w-[80px] h-[30px] rounded-[4px] bg-gray-200 ">
                  <p>100</p>
                  <img src={arrowDropDown} alt="" />
                </div>
                <p>out of 100</p>
              </div>
              <div className="w-[35%] h-[50%] flex  justify-around items-center ">
                <img className="w-[24px] h-[24px] " src={nextArrow} alt="" />
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <img
                  className="w-[13px] h-[19px] "
                  src={inBetweenIcon}
                  alt=""
                />
                <p>15</p>
                <p>16</p>
                <img className="w-[24px] h-[24px]" src={prevArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
