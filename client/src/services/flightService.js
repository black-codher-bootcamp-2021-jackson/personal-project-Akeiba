// You can create all the fetches to your own APIs and externals APIs here
import axios from "axios";

const getAllFlights = async () => {
  // This mimicks postman - same request
  // We never connect directly to database from the frontend
  const response = await axios.get(`/api/flights`);

  return response.data || [];
};

// All of the endpoints in this file can be exported below
export { getAllFlights };
