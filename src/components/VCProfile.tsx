"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getVCProfile, VCProfile } from "@/lib/api";
import { Button } from "./ui/Button";

const VCProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<VCProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

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
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to fetch VC profile");
        }
        if (err instanceof Error && err.message === "No access token found") {
          router.push("/login");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>No profile data available</div>;

  return (
    <div className="h-[100vh] w-full bg-white justify-start items-start inline-flex overflow-y-scroll">
      <div className="w-full px-8 pb-8 bg-white flex-col justify-start items-start gap-[15px] inline-flex">
        <div className="w-full flex-col justify-start items-end flex">
          <div className="w-full p-[34.15px] justify-between items-start gap-[934px] inline-flex">
            <div className="w-full justify-start items-center gap-[17.07px] flex">
              <div className="text-[#18191c] text-[25.61px] font-extrabold font-['Plus Jakarta Sans'] leading-10">
                Hi, {profile.name}
              </div>
            </div>
            <Button
              className="p-[10px] min-w-[100px] bg-indigo-600 rounded-[5px] items-center gap-2.5 flex"
              onClick={() => router.push("/create-project")}
            >
              <span className="text-white text-md font-semibold font-['Urbanist'] leading-tight">
                Add Project
              </span>
            </Button>
          </div>

          <div className="w-full self-stretch flex-col justify-start items-start gap-[15px] flex">
            <div className="w-full justify-between items-start gap-[15px] inline-flex">
              <div className="w-[316.50px] h-[139.05px] relative bg-[#f8f8f8] rounded-3xl border border-black/10">
                <div className="w-[250.53px] h-[73.21px] left-[32.99px] top-[32.92px] absolute justify-start items-center gap-[20.06px] inline-flex">
                  <div className="w-[73.21px] h-[73.21px] bg-[#bad7ff] rounded-full" />
                  <div className="text-[#18191c] text-[35px] font-bold font-['Urbanist'] leading-[46.12px]">
                    {profile.name}
                  </div>
                </div>
              </div>

              <div className="w-[271.45px] h-[139.75px] relative bg-[#f8f8f8] rounded-[20.29px] border border-black/10">
                <div className="left-[20.69px] top-[20.29px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  KYC Status
                </div>
                <div className="h-[49.09px] p-[16.05px] left-[60px] top-[60.65px] absolute bg-[#b80000]/5 rounded-lg justify-start items-center gap-2 inline-flex">
                  <div className="text-[#ea0000] text-2xl font-semibold font-['Urbanist'] leading-[32.81px]">
                    {profile.kycDone ? "Completed" : "Required"}
                  </div>
                </div>
              </div>

              <div className="w-[276.89px] h-[139.75px] relative bg-[#f8f8f8] rounded-[20.29px] border border-black/10">
                <div className="left-[20.57px] top-[20.29px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Social Media:
                </div>
              </div>

              <div className="w-[354.31px] h-[124.31px] relative bg-[#fff9f4] rounded-[26.99px] border border-[#e5bf46]/10">
                <div className="left-[20.52px] top-[20.31px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Fund Size
                </div>
                <div className="left-[19.30px] top-[62.15px] absolute text-[#18191c] text-[40px] font-bold font-['Urbanist'] leading-[41.35px]">
                  ${profile.subscriptionFee.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="w-full justify-between items-center gap-[15px] inline-flex">
              <div className="w-[401.71px] h-[124.31px] relative bg-[#f4f4ff] rounded-[26.99px] border border-indigo-600/10">
                <div className="h-[82.69px] left-[20.52px] top-[20.31px] absolute flex-col justify-start items-start gap-[29.88px] inline-flex">
                  <div className="text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                    Tags
                  </div>
                  <div className="self-stretch justify-start items-center gap-[8.54px] inline-flex">
                    {profile.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="px-[12.81px] py-[6.40px] bg-[#443cc4] rounded-[10.67px] justify-start items-start gap-[10.67px] flex"
                      >
                        <div className="text-white text-[15px] font-medium font-['Inter'] leading-snug">
                          {tag}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-[274.17px] h-[130.23px] relative bg-[#f8f8f8] rounded-[20.29px] border border-black/10">
                <div className="left-[20.78px] top-[21.91px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Last project ROI
                </div>
                <div className="left-[20.78px] top-[65.83px] absolute text-[#18191c] text-3xl font-extrabold font-['Urbanist'] leading-[38.92px]">
                  32%
                </div>
              </div>

              <div className="w-[286.19px] h-[130.23px] relative bg-[#039be5]/5 rounded-[20.29px] border border-[#039be5]/20">
                <div className="left-[24.83px] top-[21.91px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Average ROI
                </div>
                <div className="left-[199.96px] top-[20.31px] absolute text-[#18191c] text-3xl font-extrabold font-['Urbanist'] leading-7">
                  72%
                </div>
              </div>

              <div className="w-[269.89px] h-[130.23px] relative bg-[#f4f4ff] rounded-[26.99px] border border-indigo-600/10">
                <div className="left-[20.52px] top-[21.91px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Subscription price
                </div>
                <div className="left-[19.30px] top-[62.15px] absolute text-[#18191c] text-[40px] font-bold font-['Urbanist'] leading-[41.35px]">
                  ${profile.subscriptionFee.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[280px] w-full flex-col justify-start items-start gap-[15px] flex">
          <div className="text-[#18191c] text-[25px] font-bold font-['Urbanist'] leading-7">
            VC Description
          </div>
          <div className="self-stretch text-[#2c2c2c] text-base font-normal font-['Urbanist'] leading-normal">
            {profile.description}
          </div>
        </div>

        <div className="w-full self-stretch flex-col justify-start items-start gap-[15px] flex">
          <div className="text-[#18191c] text-[25px] font-bold font-['Urbanist'] leading-7">
            Last 5 projects
          </div>
          <div className="w-full self-stretch flex-col justify-start items-start gap-[15px] flex">
            {profile.projects.slice(0, 5).map((project) => (
              <div key={project.id} className="w-full h-10 relative"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VCProfilePage;
