import { AxiosResponse } from "axios";
import http from "../../interceptor";
import { GetSingleHouseType } from "@/core/models/house.models";

async function GetSingleHouse(
  id: string
): Promise<AxiosResponse<GetSingleHouseType> | any> {
  try {
    const response = await http.get(`/houses/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default GetSingleHouse;
