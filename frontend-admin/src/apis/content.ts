import fetcher from "./fetcher";

import { API_URL } from "@/constants/url";

interface ContentResponse {
  contents: Content[];
}

interface Content {
  contentId: number;
  question: string;
  firstOption: {
    optionId: number;
    name: string;
    count: number;
    percent: number;
  };
  secondOption: {
    optionId: number;
    name: string;
    count: number;
    percent: number;
  };
}

interface ContentAppendParams {
  category: string;
  question: string;
  firstOption: string;
  secondOption: string;
}

interface QuestionEditParams {
  contentId: number;
  name: string;
}

interface OptionEditParams {
  optionId: number;
  name: string;
}

interface ContentDeleteParams {
  contentId: number;
}

// 컨텐츠 가져오기
export const fetchBalanceContent = async (
  category: string
): Promise<ContentResponse> => {
  const res = await fetcher.get(API_URL.balanceContent(category));

  return await res.json();
};

// 컨텐츠 추가
export const appendContent = async ({
  category,
  question,
  firstOption,
  secondOption,
}: ContentAppendParams) => {
  const res = await fetcher.post(API_URL.contents, {
    body: {
      category,
      question,
      firstOption,
      secondOption,
    },
  });

  return await res.json();
};

// 질문 수정
export const editQuestion = async ({ contentId, name }: QuestionEditParams) => {
  const res = await fetcher.patch(API_URL.contents, {
    body: {
      contentId,
      name,
    },
  });

  return await res.json();
};

// 옵션 수정
export const editOption = async ({ optionId, name }: OptionEditParams) => {
  const res = await fetcher.patch(API_URL.options, {
    body: {
      optionId,
      name,
    },
  });

  return await res.json();
};

// 컨텐츠 삭제
export const deleteOption = async ({ contentId }: ContentDeleteParams) => {
  return await fetcher.delete(API_URL.deleteContent(contentId));
};
