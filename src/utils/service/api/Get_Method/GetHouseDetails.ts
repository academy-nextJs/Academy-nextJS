import HTTP from "../../interceptor";

const UseGetHouseDetails = async () => {
  try {
    const response = await HTTP.get(`/houses/3`);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error)
  }
};

export default UseGetHouseDetails;
