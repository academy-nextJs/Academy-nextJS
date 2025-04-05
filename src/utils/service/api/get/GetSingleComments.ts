import { CommentSingleType } from "@/core/models/types/comment.models";
import { AxiosResponse } from "axios";
import http from "../../interceptor";

async function GetSingleComments(
  id: number
): Promise<AxiosResponse<CommentSingleType>> {
  const response = await http.get(`/comments/${id}`);
  return response;
}

export default GetSingleComments;
