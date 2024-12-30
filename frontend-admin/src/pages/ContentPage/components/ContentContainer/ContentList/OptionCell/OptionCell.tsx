import { ChangeEvent, useState } from 'react';
import {
  detailContainer,
  detailText,
  editButton,
  gridItem,
  optionInput,
  optionText,
} from './OptionCell.styles';
import { Option } from '@/types/content';
import useEditOptionMutation from '@/pages/ContentPage/hooks/useEditOptionMutation';

const OPTION_LIMIT_LENGTH = 16;

interface OptionCellProps {
  option: Option;
}

const OptionCell = ({ option }: OptionCellProps) => {
  const { mutate: editOption } = useEditOptionMutation();
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(option.name);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCompleteEdit = () => {
    editOption(
      { optionId: option.optionId, name: value },
      {
        onSuccess: () => setIsEdit(false),
        onError: () => setValue(option.name),
      },
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= OPTION_LIMIT_LENGTH) {
      setValue(e.target.value);
    }
  };

  return (
    <div css={gridItem}>
      {isEdit ? (
        <input css={optionInput} value={value} onChange={handleChange} />
      ) : (
        <span css={optionText}>{value}</span>
      )}
      <div css={detailContainer}>
        <button css={editButton} onClick={isEdit ? handleCompleteEdit : handleEdit}>
          {isEdit ? '완료' : '편집'}
        </button>
        <span css={detailText}>
          {value.length}/{OPTION_LIMIT_LENGTH}자
        </span>
      </div>
    </div>
  );
};

export default OptionCell;
