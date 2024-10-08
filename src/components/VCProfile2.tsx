"use client";
import React, { useEffect, useState } from "react";
import { getVCProfile, VCProfile } from "@/lib/api";
import Navbar from "./vcprofile/Navbar";
import Profile from "./vcprofile/Profile";
import Descp from "./vcprofile/Descp";
import Projects from "./vcprofile/Projects";

const VCProfilePage2: React.FC = () => {
  const [profile, setProfile] = useState<VCProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const response = await getVCProfile();
        if (response.success) {
          setProfile(response.data);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError("Failed to fetch VC profile");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // if (isLoading) return <LoadingSpinner />;
  // if (error) return <ErrorMessage message={error} />;
  // if (!profile) return <NoProfileData />;
  console.log(profile);

  return (
    <div className=" h-[100vh] w-full bg-white justify-start items-start inline-flex overflow-y-scroll ">
      <div className="w-full px-8 pb-8 bg-white flex-col justify-start items-start gap-[25px] inline-flex">
        <div className="w-full flex-col justify-start items-end flex">
          {/** Header */}
          {/* <div className="w-full p-[34.15px] justify-between items-start gap-[934px] inline-flex">
            <div className="w-full justify-start items-center gap-[17.07px] flex">
              <div className="text-[#18191c] text-[25.61px] font-extrabold font-['Plus Jakarta Sans'] leading-10">
                Hi, {profile?.name}
              </div>
            </div>

            <div className="p-[10px] min-w-[100px] bg-indigo-600 rounded-[5px] items-center gap-2.5 flex">
              <span className="text-white text-md font-semibold font-['Urbanist'] leading-tight">
                Join Now
              </span>
            </div>
          </div> */}
          <Navbar profile={profile} />

          {/* <div className="w-full self-stretch h-[291.32px] flex-col justify-start items-start gap-[21.34px] flex">
            <div className="w-full justify-between items-start gap-[25.61px] inline-flex">
              <div className="w-[316.50px] h-[139.05px] relative">
                <div className="w-[316.50px] h-[139.05px] left-0 top-0 absolute bg-[#f8f8f8] rounded-3xl border border-black/10" />
                <div className="w-[250.53px] h-[73.21px] left-[32.99px] top-[32.92px] absolute justify-start items-center gap-[20.06px] inline-flex">
                  <div className="w-[73.21px] h-[73.21px] bg-[#bad7ff] rounded-full" />
                  <div className="text-[#18191c] text-[35px] font-bold font-['Urbanist'] leading-[46.12px]">
                    {profile?.name}
                  </div>
                </div>
              </div>
              <div className="w-[271.45px] h-[139.75px] relative">
                <div className="w-[271.45px] h-[139.75px] left-0 top-0 absolute bg-[#f8f8f8] rounded-[20.29px] border border-black/10" />
                <div className="left-[20.69px] top-[20.29px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  KYC States
                </div>
                <div className="h-[49.09px] p-[16.05px] left-[60px] top-[60.65px] absolute bg-[#b80000]/5 rounded-lg justify-start items-center gap-2 inline-flex">
                  <div className="text-[#ea0000] text-2xl font-semibold font-['Urbanist'] leading-[32.81px]">
                    {profile?.kycDone ? "Approved" : "Pending"}
                  </div>
                </div>
              </div>
              <div className="w-[276.89px] h-[139.75px] relative">
                <div className="w-[276.89px] h-[139.75px] left-0 top-0 absolute bg-[#f8f8f8] rounded-[20.29px] border border-black/10" />
                <div className="h-[23.45px] left-[20.57px] top-[76.57px] absolute justify-start items-center gap-[35.40px] inline-flex">
                  <div className="w-[22.92px] h-[23.45px] relative" />
                  <div className="w-[23.48px] h-[23.45px] relative" />
                </div>
                <div className="left-[20.57px] top-[20.29px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Social Media:
                </div>
              </div>
              <div className="w-[354.31px] h-[124.31px] relative">
                <div className="w-[354.31px] h-[124.31px] left-0 top-0 absolute bg-[#fff9f4] rounded-[26.99px] border border-[#e5bf46]/10" />
                <div className="left-[20.52px] top-[20.31px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Fund Size
                </div>
                <div className="left-[19.30px] top-[62.15px] absolute text-[#18191c] text-[40px] font-bold font-['Urbanist'] leading-[41.35px]">
                  $1,00,000
                </div>
              </div>
            </div>

            <div className="w-full justify-between items-center gap-[21.34px] inline-flex">
              <div className="w-[401.71px] h-[124.31px] relative">
                <div className="w-[401.71px] h-[124.31px] left-0 top-0 absolute bg-[#f4f4ff] rounded-[26.99px] border border-indigo-600/10" />
                <div className="h-[82.69px] left-[20.52px] top-[20.31px] absolute flex-col justify-start items-start gap-[29.88px] inline-flex">
                  <div className="text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                    Tags
                  </div>
                  <div className="self-stretch justify-start items-center gap-[8.54px] inline-flex">
                    <div className="px-[12.81px] py-[6.40px] bg-[#443cc4] rounded-[10.67px] justify-start items-start gap-[10.67px] flex">
                      <div className="text-white text-[15px] font-medium font-['Inter'] leading-snug">
                        DEFI
                      </div>
                    </div>
                    <div className="px-[12.81px] py-[6.40px] bg-[#443cc4] rounded-[10.67px] justify-start items-start gap-[10.67px] flex">
                      <div className="text-white text-[15px] font-medium font-['Inter'] leading-snug">
                        API
                      </div>
                    </div>
                    <div className="px-[12.81px] py-[6.40px] bg-[#443cc4] rounded-[10.67px] justify-start items-start gap-[10.67px] flex">
                      <div className="text-white text-[15px] font-medium font-['Inter'] leading-snug">
                        DEFI
                      </div>
                    </div>
                    <div className="px-[12.81px] py-[6.40px] bg-[#443cc4] rounded-[10.67px] justify-start items-start gap-[10.67px] flex">
                      <div className="text-white text-[15px] font-medium font-['Inter'] leading-snug">
                        INFRASTRUCTURE
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[274.17px] h-[130.23px] relative">
                <div className="w-[274.17px] h-[130.23px] left-0 top-0 absolute bg-[#f8f8f8] rounded-[20.29px] border border-black/10" />
                <div className="left-[20.78px] top-[21.91px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Last project ROI
                </div>
                <div className="w-[81.76px] h-[82.61px] left-[174.28px] top-[20.70px] absolute">
                  <div className="w-[81.34px] h-[82.18px] left-0 top-[0.42px] absolute rounded-full border-8 border-white" />
                  <div className="w-[81.34px] h-[82.18px] left-[0.42px] top-0 absolute rounded-full border-8 border-[#46d5e5]" />
                </div>
                <div className="left-[20.78px] top-[65.83px] absolute text-[#18191c] text-3xl font-extrabold font-['Urbanist'] leading-[38.92px]">
                  32%
                </div>
              </div>
              <div className="w-[286.19px] h-[130.23px] relative">
                <div className="w-[286.19px] h-[130.23px] left-0 top-0 absolute bg-[#039be5]/5 rounded-[20.29px] border border-[#039be5]/20" />
                <div className="left-[24.83px] top-[21.91px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Average ROI
                </div>
                <div className="w-[224.97px] h-[0px] left-[30.17px] top-[96.25px] absolute"></div>
                <div className="left-[199.96px] top-[20.31px] absolute text-[#18191c] text-3xl font-extrabold font-['Urbanist'] leading-7">
                  72%
                </div>
              </div>
              <div className="w-[269.89px] h-[130.23px] relative">
                <div className="w-[269.89px] h-[130.23px] left-0 top-0 absolute bg-[#f4f4ff] rounded-[26.99px] border border-indigo-600/10" />
                <div className="left-[20.52px] top-[21.91px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Subscription price
                </div>
                <div className="left-[19.30px] top-[62.15px] absolute text-[#18191c] text-[40px] font-bold font-['Urbanist'] leading-[41.35px]">
                  {profile?.subscriptionFee}
                </div>
              </div>
            </div>
          </div> */}
          <Profile profile={profile} />
        </div>

        {/* <div className="h-[280px] w-full flex-col justify-start items-start gap-[15px] flex">
          <div className="text-[#18191c] text-[25px] font-bold font-['Urbanist'] leading-7">
            VC Description
          </div>
          <div className="self-stretch text-[#2c2c2c] text-base font-normal font-['Urbanist'] leading-normal">
            {profile?.description}
          </div>
        </div> */}
        <Descp profile={profile} />

        {/* <div className="w-full self-stretch h-[409.50px] flex-col justify-start items-start gap-[30px] flex">
          <div className="text-[#18191c] text-[25px] font-bold font-['Urbanist'] leading-7">
            Last 5 projects
          </div>
          <div className="w-full self-stretch h-[351.50px] flex-col justify-between items-start gap-5 flex">
            <div className="w-full h-[31.50px] relative">
              <div className="w-full ">
                <div className="w-full h-auto relative grid grid-cols-8 items-center text-[#afafaf] text-[15px] font-semibold gap-[10px]">
                  <div className="col-span-2"> Project Name</div>
                  <div> Pledge Amount</div>
                  <div> Market Cap</div>
                  <div> Top Gainers</div>
                  <div> Raised Amount</div>
                  <div> Ongoing Claim</div>

                  {profile?.projects.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="h-[55.36px] col-span-2 flex justify-start items-center">
                        <div className="w-[55.36px] h-[55.36px] bg-[#d9d9d9]" />
                        <div className=" ml-4 text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                          {item?.name}
                        </div>
                      </div>
                      <div className=" text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                        {item?.pledgeAmount}
                      </div>
                      <div className="">
                        <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
                          {item?.marketCap}
                        </div>
                      </div>
                      <div className=" text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                        43
                      </div>
                      <div className="">
                        <span className="text-[#00b828] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                          {item.raisedAmount}
                        </span>
                      </div>
                      <div className="">
                        <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                          {item.ongoingClaim}
                        </span>
                      </div>
                      <div className="">
                        <div className="w-24 h-[35px] p-2.5 left-[1199.99px] top-[2.50px] absolute bg-[#443cc4] rounded-[28px] justify-center items-center gap-2.5 inline-flex">
                          <div className="text-white text-sm font-semibold font-['Urbanist'] capitalize tracking-tight">
                            Details
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Projects profile={profile} />
      </div>
    </div>
  );
};

export default VCProfilePage2;
