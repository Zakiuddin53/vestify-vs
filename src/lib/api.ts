const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export interface SignUpData {
  username: string;
  email: string;
  password: string;
  userType: string;
}

export interface VCData {
  name: string;
  description: string;
  logoBase64: string;
  subscriptionFee: number;
  tags: string[];
  kycDone: boolean;
}

export interface ProjectInfo {
  name: string;
  category: string;
  description: string;
  round: string;
}

export interface TokenMetrics {
  allocation: string;
  fdv: string;
  price: string;
  tgeUnlock: string;
  tge: string;
  vesting: string;
}

export interface Deals {
  maximum: number;
  minimum: number;
  acceptedTokens: string;
  poolFee: number;
}

export interface TeamMember {
  description: string;
  name: string;
  title: string;
}

export interface Partner {
  logo: string | File | null;
  name: string;
}

export interface ProjectSocials {
  x?: string;
  instagram?: string;
  discord?: string;
  telegram?: string;
  medium?: string;
  youtube?: string;
}

export interface ProjectData {
  info: ProjectInfo;
  tokenMetrics: TokenMetrics;
  deals: Deals;
  teamAndAdvisors: TeamMember[];
  partnersAndInvestors: Partner[];
  projectSocials: ProjectSocials;
}

interface ApiResponse<T> {
  data: T;
  message: string;
}

async function fetchApi<T>(
  url: string,
  method: string,
  data: unknown
): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_URL}${url}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

export const signUp = (
  data: SignUpData
): Promise<ApiResponse<{ user: SignUpData }>> => {
  return fetchApi<{ user: SignUpData }>("/api/auth/signup", "POST", data);
};

export const createVC = (
  data: VCData
): Promise<ApiResponse<{ vc: VCData }>> => {
  return fetchApi<{ vc: VCData }>("/api/vc/new", "POST", data);
};

export const createProject = (
  data: ProjectData
): Promise<ApiResponse<{ project: ProjectData }>> => {
  return fetchApi<{ project: ProjectData }>("/api/project/new", "POST", data);
};
