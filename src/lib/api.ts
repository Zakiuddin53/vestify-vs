const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

interface SignUpData {
  username: string;
  email: string;
  password: string;
  userType: string;
}

interface VCData {
  name: string;
  description: string;
  logoBase64: string;
  subscriptionFee: number;
  tags: string[];
  kycDone: boolean;
}

interface ProjectInfo {
  name: string;
  category: string;
  description: string;
  round: string;
  vcId: string;
}

interface ProjectData {
  info: ProjectInfo;
  tokenMetrics: Record<string, unknown>;
  deals: Record<string, unknown>;
  teamAndAdvisors: unknown[];
  partnersAndInvestors: unknown[];
  projectSocials: Record<string, unknown>;
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
