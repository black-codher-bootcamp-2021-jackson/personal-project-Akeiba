// You can create all the fetches to your own APIs and externals APIs here
import axios from "axios";

const getAllHotels = async () => {
  // This mimicks postman - same request
  // We never connect directly to database from the frontend
  // Client is getting this from localhost:8080 and then the endpoint, this means not having to add whole URL.
  const response = await axios.get(`/api/hotels`);

  return response.data || [];
};

// All of the endpoints in this file can be exported below
export { getAllHotels };
