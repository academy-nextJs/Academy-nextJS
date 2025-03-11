export type CommentSingleType = {
  id: string;
  house_id: string;
  user_id: string;
  title: string;
  caption: string;
  rating: string;
  created_at: string;
  parent_comment_id: string;
};

export type CreateCommentParamsType = {
  rating: number;
  house_id: string;
  title: string;
  caption: string;
  user_id: string | null;
  parent_comment_id: string | null;
};

export type GetAllCommentParamsType = {
  page: number | undefined;
  limit: number | undefined;
  sort: string | undefined;
  order: "ASC" | "DESC" | undefined;
  house_id?: string;
  user_id?: number;
};
