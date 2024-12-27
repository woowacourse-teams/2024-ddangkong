import { fetchBalanceContent } from "@/apis/content";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";
import {
  deleteButton,
  detailContainer,
  detailText,
  editButton,
  gridContainer,
  gridHeader,
  gridItem,
} from "./ContentList.styles";

const HEADER_TEXT = [
  "질문",
  "옵션1",
  "옵션2",
  "옵션1 비율",
  "옵션2 비율",
  "비고",
];

const QUESTION_LIMIT_LENGTH = 36;
const OPTION_LIMIT_LENGTH = 16;

interface ContentListProps {
  category: string;
}

const ContentList = ({ category }: ContentListProps) => {
  const { data: contents } = useQuery({
    queryKey: ["contents", category],
    queryFn: () => fetchBalanceContent(category),
    select: (data) => data.contents,
    staleTime: Infinity,
  });

  if (!contents) return null;

  return (
    <div css={gridContainer}>
      {HEADER_TEXT.map((text) => (
        <div key={text} css={gridHeader}>
          {text}
        </div>
      ))}

      {contents.map((content) => (
        <Fragment key={content.contentId}>
          <div css={gridItem}>
            <span>{content.question}</span>
            <div css={detailContainer}>
              <button css={editButton}>편집</button>
              <span css={detailText}>
                {content.question.length}/{QUESTION_LIMIT_LENGTH}자
              </span>
            </div>
          </div>

          <div css={gridItem}>
            <span>{content.firstOption.name}</span>
            <div css={detailContainer}>
              <button css={editButton}>편집</button>
              <span css={detailText}>
                {content.firstOption.name.length}/{OPTION_LIMIT_LENGTH}자
              </span>
            </div>
          </div>
          <div css={gridItem}>
            <span>{content.secondOption.name}</span>
            <div css={detailContainer}>
              <button css={editButton}>편집</button>
              <span css={detailText}>
                {content.secondOption.name.length}/{OPTION_LIMIT_LENGTH}자
              </span>
            </div>
          </div>

          <div css={gridItem}>
            <span>{content.firstOption.percent}%</span>
            <span css={detailText}>{content.firstOption.count}표</span>
          </div>
          <div css={gridItem}>
            <span>{content.secondOption.percent}%</span>
            <span css={detailText}>{content.secondOption.count}표</span>
          </div>
          <div css={gridItem}>
            <button css={deleteButton}>삭제</button>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default ContentList;
