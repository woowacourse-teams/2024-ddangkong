import { http, HttpResponse } from "msw";

import BALANCE_CONTENT from "../data/balanceContent.json";
import CATEGORY_LIST from "../data/categoryList.json";

import { MOCK_API_URL } from "@/constants/url";

const fetchBalanceContentHandler = () => {
  return HttpResponse.json(BALANCE_CONTENT);
};

const appendContentHandler = async ({ request }: { request: Request }) => {
  const body = await request.json();

  const content = { ...BALANCE_CONTENT.contents[0] };

  const newContent = {
    contentId: ++content.contentId,
    question: body.question,
    firstOption: {
      optionId: ++content.firstOption.optionId,
      name: body.firstOption,
      count: 0,
      percent: 50,
    },
    secondOption: {
      optionId: ++content.secondOption.optionId,
      name: body.secondOption,
      count: 0,
      percent: 50,
    },
  };

  return HttpResponse.json(newContent);
};

const editQuestionHandler = async ({ request }: { request: Request }) => {
  const body = await request.json();

  const content = BALANCE_CONTENT.contents.find(
    (content) => content.contentId === body.contentId
  );

  if (!content) return new HttpResponse(null, { status: 404 });

  content.firstOption.name = body.name;

  return HttpResponse.json(content);
};

const editOptionHandler = async ({ request }: { request: Request }) => {
  const body = await request.json();

  const firstContent = BALANCE_CONTENT.contents.find(
    (content) => content.firstOption.optionId === body.optionId
  );

  if (firstContent) {
    firstContent.firstOption.name = body.name;
    return HttpResponse.json(firstContent);
  }

  const secondContent = BALANCE_CONTENT.contents.find(
    (content) => content.secondOption.optionId === body.optionId
  );

  if (secondContent) {
    secondContent.firstOption.name = body.name;
    return HttpResponse.json(secondContent);
  }

  return new HttpResponse(null, { status: 404 });
};

const deleteContentHandler = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);

  const contentId = url.searchParams.get("contentId");

  if (!contentId) {
    return new HttpResponse(null, { status: 404 });
  }

  const filteredContent = BALANCE_CONTENT.contents.filter(
    (content) => content.contentId !== Number(contentId)
  );

  BALANCE_CONTENT.contents = filteredContent;

  return new HttpResponse(null, { status: 204 });
};

const fetchCategoryListHandler = () => {
  return HttpResponse.json(CATEGORY_LIST);
};

export const contentHandlers = [
  http.get(MOCK_API_URL.balanceContent, fetchBalanceContentHandler),
  http.post(MOCK_API_URL.contents, appendContentHandler),
  http.patch(MOCK_API_URL.contents, editQuestionHandler),
  http.patch(MOCK_API_URL.options, editOptionHandler),
  http.delete(MOCK_API_URL.deleteContent, deleteContentHandler),
  http.get(MOCK_API_URL.categoryList, fetchCategoryListHandler),
];
