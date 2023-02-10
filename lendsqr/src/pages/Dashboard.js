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
          <div className="w-[100%] h-[55%] bg-[#ffffff] ml-[12px] ">
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
          <div className="w-[100%] h-[45%] bg-[#ffffff] ml-[12px] ">
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
        <div className="w-[80%] h-[100%] flex flex-col justify-center items-center bg-gray-100">
          <div className="w-[80%] h-[30%] bg-red-400 flex justify-center items-start ">
            <p>Users</p>
            <div>ttt</div>
          </div>
          <div className="w-[80%] h-[60%] bg-blue-400 flex justify-center items-start ">
            <p>Users</p>
            <div>ttt</div>
          </div>
          <div className="w-[80%] h-[10%] bg-yellow-400 flex justify-center items-start ">
            <p>Users</p>
            <div>ttt</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
