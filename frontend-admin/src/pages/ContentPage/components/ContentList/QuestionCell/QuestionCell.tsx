import { ChangeEvent, useState } from "react";
import {
  detailContainer,
  detailText,
  editButton,
  gridItem,
} from "../ContentList.styles";
import { questionInput, questionText } from "./QuestionCell.styles";

const QUESTION_LIMIT_LENGTH = 36;

interface QuestionCellProps {
  question: string;
  contentId: number;
}

const QuestionCell = ({ question }: QuestionCellProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(question);

  const handleClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div css={gridItem}>
      {isEdit ? (
        <input css={questionInput} value={value} onChange={handleChange} />
      ) : (
        <span css={questionText}>{question}</span>
      )}
      <div css={detailContainer}>
        <button css={editButton} onClick={handleClickEdit}>
          {isEdit ? "완료" : "편집"}
        </button>
        <span css={detailText}>
          {value.length}/{QUESTION_LIMIT_LENGTH}자
        </span>
      </div>
    </div>
  );
};

export default QuestionCell;
