const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

// In api.ts or wherever your API functions are defined

export const createVC = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/api/vc/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating VC profile:", error);
    throw error;
  }
};

export const signUp = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};
