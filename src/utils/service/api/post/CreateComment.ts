import {
  CommentSingleType,
  CreateCommentParamsType,
} from "@/core/models/comment.models";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import http from "../../interceptor/";

export async function CreateComment(
  params: Partial<CreateCommentParamsType>
): Promise<AxiosResponse<CommentSingleType>> {
  const response = await http.post("/comments", params);
  return response;
}

export function useCreateComment() {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ["CREATE_COMMENT"],
    mutationFn: CreateComment,
    onSuccess: () => {
      // toast.success("نظر شما با موفقیت ثبت شد")
      client.invalidateQueries({ queryKey: ["GET_ALL_COMMENTS"] });
    },
  });
}
