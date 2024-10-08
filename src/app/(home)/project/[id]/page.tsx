// 3f3a2b73-8bdf-473a-9e33-c54b6c593cba

import React from "react";
import { getProjectDetails } from "@/lib/api";
import DealInfo from "@/components/singleProject/DealInfo";
const ProjectDetailsPage = async ({ params }: { params: { id: string } }) => {
  const projectDetails = await getProjectDetails(params.id);

  if (!projectDetails.success) {
    return <div>Error loading project details</div>;
  }

  const { project, token, socialLink, teamAndAdvisors, partnersAndInvestors } =
    projectDetails.data;

  return (
    <div className="h-[100vh] w-full bg-white items-start inline-flex overflow-y-scroll">
      <div className="pt-[35px] w-full pb-8 bg-white flex-col justify-start items-end inline-flex">
        <div className="px-8 w-full flex-col justify-start items-start flex">
          <div className="flex-col w-full justify-start items-start gap-[30px] flex">
            <div className=" w-full justify-end items-end gap-[103px] inline-flex">
              <div className=" w-full flex-col justify-start items-start gap-6 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-[15px] flex">
                  <div className=" p-1.5 bg-[#f3f3f3] rounded-[50px] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-black text-[15px] font-semibold font-['Urbanist'] leading-snug">
                      Distributing
                    </div>
                  </div>

                  <div className="text-black text-3xl font-bold font-['Urbanist'] leading-[43.50px]">
                    {project.name}
                  </div>
                </div>
                <div className="justify-start items-start gap-6 inline-flex">
                  <div className="p-[15px] bg-[#f3f3f3] rounded-[10px] flex-col justify-start items-start gap-[15px] inline-flex">
                    <div className="text-black text-[25px] font-extrabold font-['Urbanist'] leading-9">
                      ${token.price}
                    </div>
                    <div className="text-[#6c6c6c] text-base font-semibold font-['Urbanist'] leading-normal">
                      {project.round}
                    </div>
                  </div>
                  <div className="p-[15px] bg-[#f3f3f3] rounded-[10px] flex-col justify-start items-start gap-[15px] inline-flex">
                    <div className="text-black text-[25px] font-extrabold font-['Urbanist'] leading-9">
                      {project.tokensReceived}
                    </div>
                    <div className="text-[#6c6c6c] text-base font-semibold font-['Urbanist'] leading-normal">
                      Tokens received
                    </div>
                  </div>
                </div>
                <div className="justify-start items-start gap-6 inline-flex">
                  <div className="p-[15px] bg-indigo-600/10 rounded-lg justify-start items-start gap-[15px] flex">
                    <div className="text-[#574ee9] text-base font-semibold font-['Urbanist'] leading-normal">
                      Edit Profile
                    </div>
                    <div className="w-[13.01px] h-[13px] relative" />
                  </div>
                </div>
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <div className="w-[1012.05px] h-[16.08px] relative">
                    <div className="w-[1012.05px] h-[16.08px] left-0 top-0 absolute bg-[#f3f3f3] rounded-[18px]" />
                    <div className="w-[543.72px] h-[16.08px] left-0 top-0 absolute bg-gradient-to-r from-[#5047e6] to-[#7068f5] rounded-[18px]" />
                  </div>
                  <div className="text-black text-[17px] font-bold font-['Urbanist'] leading-normal">
                    50%
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-end gap-[25px] inline-flex">
                <div className="w-[84.84px] h-[84.84px] bg-[#d9d9d9] rounded-[60px]" />
                <div className="flex-col justify-start items-end gap-[15px] flex">
                  <div className="text-black text-[22px] font-extrabold font-['Urbanist'] leading-loose">
                    $0.00
                  </div>
                  <div className="text-[#6c6c6c] text-[15px] font-semibold font-['Urbanist'] leading-snug">
                    Your allocation
                  </div>
                </div>
                <div className="px-[33px] py-[15px] bg-[#303138] rounded-lg justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-[15px] font-semibold font-['Urbanist'] leading-snug">
                    Contribute
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-[30px] flex">
              <div className="w-full justify-start items-start gap-[53px] inline-flex">
                <div className="w-full flex-col justify-start items-start gap-[25px] inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full text-[#18191c] text-2xl font-bold font-['Urbanist'] leading-loose">
                      About {project.name}
                    </div>
                    <div className="w-full text-[#18191c] text-lg font-medium font-['Inter'] leading-7">
                      Participate in the Universal Investment Platform Token
                      Event
                    </div>
                    <div className="w-full text-[#2c2c2c] text-[17px] font-normal font-['Urbanist'] leading-normal">
                      {project.description}
                    </div>
                  </div>

                  <div className="h-[266.37px] w-full flex-col justify-start items-center gap-2.5 flex">
                    <div className="w-full px-[275.50px] py-2 bg-[#f8f8f8] rounded-lg justify-center items-center gap-2.5 inline-flex">
                      <div className="w-full text-[#18191c] text-2xl font-bold font-['Urbanist'] leading-loose">
                        Team and Advisors
                      </div>
                    </div>
                    <div className="w-full justify-between items-center gap-[22.32px] inline-flex">
                      <div className="w-[238.45px] flex-col justify-start items-start gap-[20.09px] inline-flex">
                        <div className="w-[238.45px] h-[208.37px] relative">
                          <img
                            className="w-[238.45px] h-[181.91px] left-0 top-0 absolute rounded-[11.16px]"
                            src="https://via.placeholder.com/238x182"
                          />
                          <div className="h-[53.25px] p-[11.16px] left-[16px] top-[155.12px] absolute bg-white rounded-[8.93px] justify-start items-center gap-[77px] inline-flex">
                            <div className="w-[100.44px] flex-col justify-start items-start gap-[8.93px] inline-flex">
                              <div className="self-stretch text-[#505050] text-lg font-bold font-['Urbanist'] leading-relaxed">
                                Emma Davis
                              </div>
                              <div className="text-[#949494] text-sm font-medium font-['Urbanist'] leading-tight">
                                Founder
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-[238.45px] flex-col justify-start items-start gap-[20.09px] inline-flex">
                        <div className="w-[238.45px] h-[208.37px] relative">
                          <img
                            className="w-[238.45px] h-[181.91px] left-0 top-0 absolute rounded-[11.16px]"
                            src="https://via.placeholder.com/238x182"
                          />
                          <div className="h-[53.25px] p-[11.16px] left-[16px] top-[155.12px] absolute bg-white rounded-[8.93px] justify-start items-center gap-[77px] inline-flex">
                            <div className="w-[100.44px] flex-col justify-start items-start gap-[8.93px] inline-flex">
                              <div className="self-stretch text-[#505050] text-lg font-bold font-['Urbanist'] leading-relaxed">
                                Emma Davis
                              </div>
                              <div className="text-[#949494] text-sm font-medium font-['Urbanist'] leading-tight">
                                CEO
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[238.45px] flex-col justify-start items-start gap-[20.09px] inline-flex">
                        <div className="w-[238.45px] h-[208.37px] relative">
                          <img
                            className="w-[238.45px] h-[181.91px] left-0 top-0 absolute rounded-[11.16px]"
                            src="https://via.placeholder.com/238x182"
                          />
                          <div className="h-[53.25px] p-[11.16px] left-[16px] top-[155.12px] absolute bg-white rounded-[8.93px] justify-start items-center gap-[77px] inline-flex">
                            <div className="w-[100.44px] flex-col justify-start items-start gap-[8.93px] inline-flex">
                              <div className="self-stretch text-[#505050] text-lg font-bold font-['Urbanist'] leading-relaxed">
                                Emma Davis
                              </div>
                              <div className="text-[#949494] text-sm font-medium font-['Urbanist'] leading-tight">
                                Founder
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-[0px] border border-[#18191c]/20"></div>
                  <div className="w-full p-[30px] bg-[#f8f8f8] rounded-lg flex-col justify-start items-center gap-[30px] flex">
                    <div className="w-full text-center text-[#18191c] text-2xl font-bold font-['Urbanist'] leading-loose">
                      Partners and Investors
                    </div>
                    <div className="self-stretch justify-between items-start gap-[85px] inline-flex">
                      <img
                        className="w-[124.27px] h-[25px]"
                        src="https://via.placeholder.com/124x25"
                      />
                      <img
                        className="w-[92px] h-[23px]"
                        src="https://via.placeholder.com/92x23"
                      />
                      <img
                        className="w-[122.97px] h-[22px]"
                        src="https://via.placeholder.com/123x22"
                      />
                      <img
                        className="w-[104.76px] h-[25px]"
                        src="https://via.placeholder.com/105x25"
                      />
                    </div>
                  </div>
                  <div className="w-full px-2.5 py-5 bg-indigo-600/10 rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <div className="text-indigo-600 text-xl font-bold font-['Urbanist'] leading-[29px]">
                      Join the Universal SEED round today at $2 per token.
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full text-[#18191c] text-lg font-medium font-['Inter'] leading-7">
                      Sale details
                    </div>
                    <div className="w-full text-[#2c2c2c] text-[17px] font-normal font-['Urbanist'] leading-normal">
                      Seed Sale starts on the 2nd of June 2024.
                      <br />
                      Continues until the maximum token allocation is reached or
                      the end of August 2024. • A total of 250.000 tokens for
                      sale in this raise.
                      <br />
                      Minimum purchase amount: $500.
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full text-[#18191c] text-lg font-medium font-['Inter'] leading-7">
                      Investment rounds
                    </div>
                    <div className="w-full text-[#2c2c2c] text-[17px] font-normal font-['Urbanist'] leading-normal">
                      Founding Team: | $1/token | 12 month lock. Linear release
                      over 36 months.
                      <br />
                      Seed Round: | $2/token | 6 month lock-up period. Linear
                      release over 24 months.
                      <br />
                      Strategic Round: | $3/token | 9-month lock-up period.
                      Linear release over 18 months.
                      <br />
                      Ecosystem Development: Linear release over 24 months.
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-neutral-100 rounded-[10px] flex-col justify-start items-start gap-[30px] inline-flex">
                  <div className="text-[#18191c] text-2xl font-bold font-['Urbanist'] leading-loose">
                    Deal Info
                  </div>
                  <div className="flex-col justify-start items-center gap-5 flex">
                    <div className="self-stretch h-[108px] flex-col justify-start items-start gap-2.5 flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-[#18191c] text-[17px] font-bold font-['Urbanist'] leading-loose">
                          Token price
                        </div>
                        <div className="text-right text-[#a5a5a5] text-[17px] font-bold font-['Urbanist'] leading-loose">
                          Seed Round $0.01
                        </div>
                      </div>
                      <div className="justify-start items-start gap-[89px] inline-flex">
                        <div className="text-[#18191c] text-[17px] font-bold font-['Urbanist'] leading-loose">
                          Vesting
                        </div>
                        <div className="text-right text-[#a5a5a5] text-[17px] font-bold font-['Urbanist'] leading-[33px]">
                          20% on TGE,3 Month cliff, 10% monthly
                          <br />
                          thereafter.
                        </div>
                      </div>
                    </div>
                    <div className="flex-col justify-start items-center gap-2.5 flex">
                      <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="px-[15px] py-3 bg-white rounded-lg justify-start items-center gap-[25.34px] flex">
                          <div className="justify-start items-center gap-[16.89px] flex">
                            <div className="w-[42.23px] h-[42.23px] bg-[#f3f3f3] rounded-lg justify-center items-center gap-[0.84px] flex" />
                            <div className="text-[#18191c] text-sm font-semibold font-['Urbanist'] leading-tight">
                              Medium
                            </div>
                          </div>
                          <div className="w-[13.51px] h-[13.51px] relative" />
                        </div>
                        <div className="px-[15px] py-3 bg-white rounded-lg justify-start items-center gap-[25.34px] flex">
                          <div className="justify-start items-center gap-[16.89px] flex">
                            <div className="w-[42.23px] h-[42.23px] bg-[#ffeee8] rounded-lg flex-col justify-center items-center gap-[8.45px] inline-flex">
                              <div className="w-[19.43px] h-[18.58px] relative" />
                            </div>
                            <div className="text-[#18191c] text-sm font-semibold font-['Urbanist'] leading-tight">
                              Website
                            </div>
                          </div>
                          <div className="w-[13.51px] h-[13.51px] relative" />
                        </div>
                      </div>
                      <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                        <div className="px-[15px] py-3 bg-white rounded-lg justify-start items-center gap-[25.34px] flex">
                          <div className="justify-start items-center gap-[16.89px] flex">
                            <div className="w-[42.23px] h-[42.23px] p-[8.45px] bg-[#eef9ff] rounded-lg flex-col justify-center items-center gap-[8.45px] inline-flex" />
                            <div className="text-[#18191c] text-sm font-semibold font-['Urbanist'] leading-tight">
                              Twitter
                            </div>
                          </div>
                          <div className="w-[13.51px] h-[13.51px] relative" />
                        </div>
                        <div className="px-[15px] py-3 bg-white rounded-lg justify-start items-center gap-[25.34px] flex">
                          <div className="justify-start items-center gap-[16.89px] flex">
                            <div className="w-[42.23px] h-[42.23px] bg-[#eaf7fd] rounded-lg flex-col justify-center items-center gap-[8.45px] inline-flex" />
                            <div className="text-[#18191c] text-sm font-semibold font-['Urbanist'] leading-tight">
                              Telegram
                            </div>
                          </div>
                          <div className="w-[13.51px] h-[13.51px] relative" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
