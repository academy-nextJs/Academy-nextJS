import {
  CommentSingleType,
  GetAllCommentParamsType,
} from "@/core/models/comment.models";
import { AxiosResponse } from "axios";
import http from "../../interceptor";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export async function GetAllComments(
  params: Partial<GetAllCommentParamsType>
): Promise<AxiosResponse<CommentSingleType[]>> {
  const response = await http.get("/comments", { params: params });
  return response;
}

export function useGetAllComments(
  params: Partial<GetAllCommentParamsType>
): UseQueryResult<CommentSingleType[]> {
  return useQuery({
    queryKey: ["GET_ALL_COMMENTS"],
    queryFn: () => GetAllComments(params),
  });
}
