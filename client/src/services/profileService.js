// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

const getAllProfiles = async () => {
  // This mimicks postman - same request
  // We never connect directly to database from the frontend
  const response = await axios.get(`/api/profile`);

  return response.data || [];
};

// All of the endpoints in this file can be exported below
export { getAllProfiles };
