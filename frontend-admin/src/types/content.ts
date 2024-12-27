export type CategoryLabel = "음식" | "연애" | "MBTI" | "만약에" | "개발";
export type CategoryValue = "FOOD" | "ROMANCE" | "MBTI" | "IF" | "DEVELOP";

export interface Category {
  value: CategoryValue;
  label: CategoryLabel;
}

export interface Content {
  contentId: number;
  question: string;
  firstOption: Option;
  secondOption: Option;
}

export interface Option {
  optionId: number;
  name: string;
  count: number;
  percent: number;
}
