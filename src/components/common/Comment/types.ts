export interface CommentWrapperProps {
  house_id: string;
  width: string;
  height: string;
}

export interface InitialValuesFormType {
  title: string;
  caption: string;
  rating: number;
}

export interface CommentCardFooterProps {
  name: string;
  date: string;
  holderStyles?: string;
  view: "readonly" | "writeonly";
}

export interface CommentCardProps {
  view: "readonly" | "writeonly";
  caption: string;
  title: string;
  name: string;
  date: string;
  score: string;
}
