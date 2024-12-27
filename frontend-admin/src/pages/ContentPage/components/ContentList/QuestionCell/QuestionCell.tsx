import { ChangeEvent, useState } from "react";
import {
  detailContainer,
  detailText,
  editButton,
  gridItem,
} from "../ContentList.styles";
import { questionInput, questionText } from "./QuestionCell.styles";
import useEditQuestionMutation from "@/pages/ContentPage/hooks/useEditQuestionMutation";

const QUESTION_LIMIT_LENGTH = 36;

interface QuestionCellProps {
  question: string;
  contentId: number;
}

const QuestionCell = ({ question, contentId }: QuestionCellProps) => {
  const { mutate: editQuestion } = useEditQuestionMutation();
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(question);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCompleteEdit = () => {
    editQuestion(
      { contentId, name: question },
      { onSuccess: () => setIsEdit(false), onError: () => setValue(question) }
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= QUESTION_LIMIT_LENGTH) {
      setValue(e.target.value);
    }
  };

  return (
    <div css={gridItem}>
      {isEdit ? (
        <input css={questionInput} value={value} onChange={handleChange} />
      ) : (
        <span css={questionText}>{value}</span>
      )}
      <div css={detailContainer}>
        <button
          css={editButton}
          onClick={isEdit ? handleCompleteEdit : handleEdit}
        >
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
