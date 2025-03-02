const API_BASE_URL = "http://localhost:5000/api"; // Adjust if needed

export const fetchStudentPerformance = async (studentId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/performance/${studentId}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching performance:", error);
    throw error;
  }
};

export const addPerformanceRecord = async (performanceData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/performance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(performanceData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error adding performance record:", error);
    throw error;
  }
};
