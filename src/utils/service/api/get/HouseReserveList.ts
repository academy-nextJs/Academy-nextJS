"use client"
import {
  HouseReserveListParamsType,
  HouseReserveListType,
} from "@/core/models/types/houseList.models";
import { AxiosResponse } from "axios";
import http from "@/utils/service/interceptor";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export async function getHousesList(
  params?: Partial<HouseReserveListParamsType>
): Promise<AxiosResponse<HouseReserveListType[]>> {
  const response = await http.get("/api/houses", { params: params });
  return response;
}

export function useGetHousesList(
  params?: Partial<HouseReserveListParamsType>
): UseQueryResult<HouseReserveListType[]> {
  return useQuery({
    queryKey: ["GET_HOUSES_LIST",params],
    queryFn: () => getHousesList(params),
  });
}
