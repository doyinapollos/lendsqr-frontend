import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../helpers/url";
import lendsqrLogo from "../assets/svg/lendsqr-logo.svg";
import searchIcon from "../assets/svg/search-icon.svg";
import notificationIcon from "../assets/svg/notification-icon.svg";
import profilePic from "../assets/images/profile-picture2.jpg";
import dropDownIcon from "../assets/svg/drop-down-icon.svg";
import briefcaseIcon from "../assets/svg/briefcase-icon.svg";
import arrowDropDown from "../assets/svg/arrow-drop-down.svg";
import homeIcon from "../assets/svg/home-icon.svg";
import profileAvater from "../assets/svg/profile-avater-icon2.svg";
import profileAvater3 from "../assets/svg/profile-avater-icon3.svg";
import avaterLoan from "../assets/svg/avater-loan.svg";
import avaterSavins from "../assets/svg/avater-savings.svg";
import networkIcon from "../assets/svg/network-icon.svg";
import optionsIcon from "../assets/svg/options-icon.svg";
import nextArrow from "../assets/svg/next-arrow.svg";
import prevArrow from "../assets/svg/prev-arrow.svg";
import inBetweenIcon from "../assets/svg/inbetween-icon.svg";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] h-[1000px] bg-[] text-center flex flex-col justify-center items-center ">
      <div className="w-[100%] h-[8%] flex justify-center items-center bg-[#ffffff] ">
        <div className="w-[20%] h-[100%] flex flex-col justify-center items-start ">
          <img
            onClick={() => navigate(NonAuthRoutes.login)}
            className="w-[138px] h-[36px] ml-[20px] "
            src={lendsqrLogo}
            alt=""
          />
        </div>{" "}
        <div className="w-[80%] h-[100%] flex flex-row justify-center items-center ">
          <div className="w-[60%] h-[100%] flex flex-col justify-center items-center ">
            <div className="flex w-[453px] h-[40px] ">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-[400px] h-[38px] p-[10px] bg-white rounded-l-[5px] border-[1px] border-[#213F7D] "
              />
              <div className="w-[56px] h-[38px] bg-[#39CDCC] flex flex-col justify-center items-center rounded-r-[5px] ">
                <img className="w-[14px] h-[14px] " src={searchIcon} alt="" />
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-[40%] h-[100%] flex justify-center items-center ">
            <p className="mr-[25px] font-roboto "> Docs </p>{" "}
            <div className="mr-[25px]">
              <img
                className="w-[20px] h-[22px] "
                src={notificationIcon}
                alt=""
              />
            </div>{" "}
            <div className="mr-[5px]">
              <img
                className="w-[48px] h-[48px] rounded-[50%] "
                src={profilePic}
                alt=""
              />
            </div>{" "}
            <p className="mr-[4px]"> ebiapollos </p>{" "}
            <div>
              <img className="w-[7px] h-[4px] " src={dropDownIcon} alt="" />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="w-[100%] h-[92%] flex justify-center items-center ">
        <div className="w-[20%] h-[100%] flex flex-col justify-center items-start font-workSans ">
          <div className="w-[100%] h-[45%] bg-[#ffffff] ml-[20px] ">
            <div className="flex justify-start items-center py-[20px] ">
              <img className="w-[16px] h-[7px] " src={briefcaseIcon} alt="" />
              <p className="text-[#213F7D] text-[16px] font-[400] mx-[6px] ">
                Switch Organization{" "}
              </p>{" "}
              <img className="w-[7px] h-[11px] " src={arrowDropDown} alt="" />
            </div>{" "}
            <div className=" flex justify-start items-center py-[10px] ">
              <img
                className="w-[11px] h-[9px] text-[#213F7D] "
                src={homeIcon}
                alt=""
              />
              <p className="text-[#213F7D] text-[16px] font-[400] ml-[6px] ">
                Dashboard{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex flex-col justify-center items-start pt-[10px] text-[16px] ">
              <p className=" pb-[5px] font-[600] "> CUSTOMERS </p>{" "}
              <div className="w-[38%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={profileAvater3}
                  alt=""
                />
                <p className="text-[#213F7D] text-[13px] font-[400] ml-[7px] ">
                  Users{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={avaterLoan}
                  alt=""
                />
                <p className="text-[#213F7D] text-[13px] font-[400] ml-[7px] ">
                  Guarantors{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[13px] font-[400] ml-[7px] ">
                  Loans{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={profileAvater}
                  alt=""
                />
                <p className="text-[#213F7D] text-[13px] font-[400] ml-[7px] ">
                  Decision Models{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ml-[7px] ">
                  Savings{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={profileAvater3}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ml-[7px] ">
                  Loan Requests{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={avaterLoan}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ml-[7px] ">
                  Whitelist{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={profileAvater}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ml-[7px] ">
                  Karma{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-[100%] h-[35%] bg-[#ffffff] ml-[20px] ">
            <div className="flex flex-col justify-center items-start pt-[10px] ">
              <p className="text-[16px] pb-[5px] font-[600] "> BUSINESSES </p>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ml-[7px] ">
                  Organizations{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={briefcaseIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[13px] font-[400] ml-[7px] ">
                  Loan Products{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={profileAvater}
                  alt=""
                />
                <p className="text-[#213F7D] text-[13px] font-[400] ml-[7px] ">
                  Dashboard{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[13px] font-[400] ml-[7px] ">
                  Savings products{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={avaterSavins}
                  alt=""
                />
                <p className="text-[#213F7D] text-[13px] font-[400] ml-[7px] ">
                  Fees and Charges{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[13px] font-[400] ml-[7px] ">
                  Transactions{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={avaterLoan}
                  alt=""
                />
                <p className="text-[#213F7D] text-[13px] font-[400] ml-[7px] ">
                  Services{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[13px] font-[400] ml-[7px] ">
                  Service Account{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-[100%] h-[20%] bg-[#ffffff] ml-[20px] ">
            <div className="flex flex-col justify-center items-start pt-[10px] ">
              <p className="text-[16px] pb-[5px] font-[600] "> SETTINGS </p>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={homeIcon}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ml-[7px] ">
                  Organizations{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={avaterSavins}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ml-[7px] ">
                  Loan Products{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-[100%] flex justify-start items-center py-[5px] ">
                <img
                  className="w-[11px] h-[9px] text-[#213F7D] "
                  src={avaterLoan}
                  alt=""
                />
                <p className="text-[#213F7D] text-[16px] font-[400] ml-[7px] ">
                  Dashboard{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-[80%] h-[100%] flex flex-col justify-between items-center bg-[#FBFBFB] font-workSans">
          <div className="w-[95%] h-[28%] flex flex-col justify-between items-center ">
            <div className="w-[100%] h-[30%] flex flex-col justify-center items-center">
              <div className="w-[90%] h-[100%] flex flex-col justify-center items-start font-[700]  ">
                <p className=""> Users </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="w-[100%] h-[70%] flex flex-col  justify-center items-center">
              <div className="w-[90%] h-[100%] flex  justify-around items-center">
                <div className="w-[240px] h-[130px] bg-[#ffffff] m-[5px] flex flex-col  justify-center items-center  ">
                  <div className="w-[80%] h-[80%] flex flex-col  justify-around items-start ">
                    <img
                      className="w-[35px] h-[35px] "
                      src={profileAvater}
                      alt=""
                    />
                    <p className="text-[12px] text-[#545F7D] font-[500] ">
                      USERS{" "}
                    </p>{" "}
                    <p className="text-[20px] font-[500] text-[#545F7D] ">
                      2, 453{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-[240px] h-[130px] bg-[#ffffff] m-[5px] flex flex-col  justify-center items-center  ">
                  <div className="w-[80%] h-[80%] flex flex-col  justify-around items-start ">
                    <img
                      className="w-[21px] h-[18px] "
                      src={profileAvater3}
                      alt=""
                    />
                    <p className="text-[12px] text-[#545F7D] font-[500] ">
                      USERS{" "}
                    </p>{" "}
                    <p className="text-[20px] font-[500] text-[#545F7D] ">
                      2, 453{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-[240px] h-[130px] bg-[#ffffff] m-[5px] flex flex-col  justify-center items-center  ">
                  <div className="w-[80%] h-[80%] flex flex-col  justify-around items-start ">
                    <img
                      className="w-[16px] h-[19px] "
                      src={avaterLoan}
                      alt=""
                    />
                    <p className="text-[12px] text-[#545F7D] font-[500] ">
                      USERS{" "}
                    </p>{" "}
                    <p className="text-[20px] font-[500] text-[#545F7D] ">
                      2, 453{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-[240px] h-[130px] bg-[#ffffff] m-[5px] flex flex-col  justify-center items-center  ">
                  <div className="w-[80%] h-[80%] flex flex-col  justify-around items-start ">
                    <img
                      className="w-[15px] h-[18px] "
                      src={avaterSavins}
                      alt=""
                    />
                    <p className="text-[12px] text-[#545F7D] font-[500] ">
                      USERS{" "}
                    </p>{" "}
                    <p className="text-[20px] font-[500] text-[#545F7D] ">
                      2, 453{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-[90%] h-[60%] flex flex-col justify-center items-center ">
            <div className="w-[95%] h-[10%] flex  justify-around items-center text-[12px] font-[700] bg-[#ffffff] ">
              <div className="w-[33%] h-[100%] flex  justify-around items-center ">
                <div className="flex">
                  <p> ORGANIZATION </p>{" "}
                  <img className="ml-[6px] " src={networkIcon} alt="" />
                </div>{" "}
                <div className="flex">
                  <p> USERNAME </p>{" "}
                  <img className="ml-[6px] " src={networkIcon} alt="" />
                </div>{" "}
                <div className="flex">
                  <p> EMAIL </p>{" "}
                  <img className="ml-[6px] " src={networkIcon} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="w-[28%] h-[100%] flex  justify-around items-center ">
                <div className="flex">
                  <p> PHONE NUMBER </p>{" "}
                  <img className="ml-[6px] " src={networkIcon} alt="" />
                </div>{" "}
                <div className="flex">
                  <p> DATE JOINED </p>{" "}
                  <img className="ml-[6px] " src={networkIcon} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="w-[16%] h-[100%] flex  justify-start items-center ">
                <div className="flex">
                  <p> STATUS </p>{" "}
                  <img className="ml-[6px] " src={networkIcon} alt="" />
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="w-[95%] h-[90%] bg-[#ffffff] flex flex-col  justify-around items-center text-[13px] ">
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p> Lendsqr </p> <p> Adedeji </p> <p> adedeji @lendsqr.com </p>{" "}
                <p> 08078903721 </p> <p> May 15, 2020 10: 00 AM </p>{" "}
                <button className="w-[65px] h-[20px] text-[12px] bg-[#dfe4df] rounded-[100px] ">
                  Inactive{" "}
                </button>{" "}
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>{" "}
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p> Lendsqr </p> <p> Adedeji </p> <p> adedeji @lendsqr.com </p>{" "}
                <p> 08078903721 </p> <p> May 15, 2020 10: 00 AM </p>{" "}
                <button className="w-[65px] h-[20px] text-[12px] bg-[#dfe5f5] rounded-[100px] ">
                  Inactive{" "}
                </button>{" "}
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>{" "}
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p> Lendsqr </p> <p> Adedeji </p> <p> adedeji @lendsqr.com </p>{" "}
                <p> 08078903721 </p> <p> May 15, 2020 10: 00 AM </p>{" "}
                <button className="w-[65px] h-[20px] text-[12px] bg-[#E9B200] rounded-[100px] text-[#E4033B] ">
                  Pending{" "}
                </button>{" "}
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>{" "}
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p> Lendsqr </p> <p> Adedeji </p> <p> adedeji @lendsqr.com </p>{" "}
                <p> 08078903721 </p> <p> May 15, 2020 10: 00 AM </p>{" "}
                <button className="w-[65px] h-[20px] text-[12px] bg-[#ff4929] rounded-[100px] ">
                  Blacklisted{" "}
                </button>{" "}
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>{" "}
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p> Lendsqr </p> <p> Adedeji </p> <p> adedeji @lendsqr.com </p>{" "}
                <p> 08078903721 </p> <p> May 15, 2020 10: 00 AM </p>{" "}
                <button className="w-[65px] h-[20px] text-[12px] bg-[#fccc47] rounded-[100px] ">
                  Pending{" "}
                </button>{" "}
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>{" "}
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p> Lendsqr </p> <p> Adedeji </p> <p> adedeji @lendsqr.com </p>{" "}
                <p> 08078903721 </p> <p> May 15, 2020 10: 00 AM </p>{" "}
                <button className="w-[65px] h-[20px] text-[12px] bg-[#2dfa50] rounded-[100px] ">
                  Active{" "}
                </button>{" "}
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>{" "}
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p> Lendsqr </p> <p> Adedeji </p> <p> adedeji @lendsqr.com </p>{" "}
                <p> 08078903721 </p> <p> May 15, 2020 10: 00 AM </p>{" "}
                <button className="w-[65px] h-[20px] text-[12px] bg-[#36fa24] rounded-[100px] ">
                  active{" "}
                </button>{" "}
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>{" "}
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] border-b-2 border-gray-200 ">
                <p> Lendsqr </p> <p> Adedeji </p> <p> adedeji @lendsqr.com </p>{" "}
                <p> 08078903721 </p> <p> May 15, 2020 10: 00 AM </p>{" "}
                <button className="w-[65px] h-[20px] text-[12px] bg-[#fd4e2f] rounded-[100px] ">
                  Blacklisted{" "}
                </button>{" "}
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>{" "}
              <div className="w-[95%] h-[10%] flex justify-around items-center bg-[#ffffff] ">
                <p> Lendsqr </p> <p> Adedeji </p> <p> adedeji @lendsqr.com </p>{" "}
                <p> 08078903721 </p> <p> May 15, 2020 10: 00 AM </p>{" "}
                <button className="w-[65px] h-[20px] text-[12px] bg-[#cedad1de] rounded-[100px] ">
                  Inactive{" "}
                </button>{" "}
                <img className="w-[3px] h-[14px] " src={optionsIcon} alt="" />
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-[90%] h-[10%] flex flex-col justify-center items-center mt-[0px] ">
            <div className="w-[90%] h-[100%] flex justify-between items-start ">
              <div className="w-[35%] h-[50%] flex justify-around items-center ">
                <p> Showing </p>{" "}
                <div className="flex justify-around items-center w-[80px] h-[30px] rounded-[4px] bg-gray-200 ">
                  <p> 100 </p> <img src={arrowDropDown} alt="" />
                </div>{" "}
                <p> out of 100 </p>{" "}
              </div>{" "}
              <div className="w-[35%] h-[50%] flex  justify-around items-center ">
                <img className="w-[24px] h-[24px] " src={nextArrow} alt="" />
                <p> 1 </p> <p> 2 </p> <p> 3 </p>{" "}
                <img
                  className="w-[13px] h-[19px] "
                  src={inBetweenIcon}
                  alt=""
                />
                <p> 15 </p> <p> 16 </p>{" "}
                <img className="w-[24px] h-[24px]" src={prevArrow} alt="" />
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Dashboard;
