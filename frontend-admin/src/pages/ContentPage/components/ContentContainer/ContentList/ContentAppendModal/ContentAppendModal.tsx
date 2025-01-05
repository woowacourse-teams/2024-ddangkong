import {
  appendButton,
  closeButton,
  contentContainer,
  dropdownLabel,
  dropdownWrapper,
  footerContainer,
  header,
  modalLayout,
} from './ContentAppendModal.styles';
import Modal from '@/components/Modal/Modal';
import Dropdown from '@/components/Dropdown/Dropdown';
import useCategory from '@/pages/ContentPage/hooks/useCategory';
import useCategoryListQuery from '@/hooks/useCategoryListQuery';
import { ModalState } from '@/types/modal';
import useInput from '@/hooks/useInput';
import ContentInput from './ContentInput/ContentInput';
import { useState } from 'react';

const ContentAppendModal = ({ isOpen, onClose, onConfirm, title }: ModalState) => {
  const { category, handleClickOption } = useCategory();
  const { data: categoryList } = useCategoryListQuery();

  const { value: question, handleChange: handleChangeQuestion } = useInput({ maxLength: 36 });
  const { value: firstOption, handleChange: handleChangeFirstOption } = useInput();
  const { value: secondOption, handleChange: handleChangeSecondOption } = useInput();

  // TODO: 입력값과 에러 상태를 묶어서 다루기
  const [errors, setErrors] = useState({
    question: false,
    firstOption: false,
    secondOption: false,
  });

  const handleClick = () => {
    const newErrors = {
      question: !question,
      firstOption: !firstOption,
      secondOption: !secondOption,
    };

    setErrors(newErrors);

    if (newErrors.question || newErrors.firstOption || newErrors.secondOption) return;

    if (onConfirm) {
      onConfirm({ category: category.value, question, firstOption, secondOption });
    }
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  if (!categoryList) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} css={modalLayout}>
      <Modal.Header css={header}>
        <Modal.Title>{title || '밸런스 게임 추가하기'}</Modal.Title>
        <Modal.IconButton onClick={onClose} imgSize="2.4rem" />
      </Modal.Header>
      <Modal.Content css={contentContainer}>
        <div css={dropdownWrapper}>
          <span css={dropdownLabel}>카테고리</span>
          <Dropdown
            text={category.label}
            optionList={categoryList}
            handleClickOption={handleClickOption}
            width="100%"
          />
        </div>
        <ContentInput
          label="질문"
          value={question}
          handleChange={handleChangeQuestion}
          handleKeyDown={handleKeyDown}
          hasError={Boolean(errors.question)}
          placeholder="추가할 질문을 입력해주세요"
          maxLength={36}
        />
        <ContentInput
          label="옵션 1"
          value={firstOption}
          handleChange={handleChangeFirstOption}
          handleKeyDown={handleKeyDown}
          hasError={Boolean(errors.firstOption)}
          placeholder="첫 번째 옵션을 입력해주세요"
        />
        <ContentInput
          label="옵션 2"
          value={secondOption}
          handleChange={handleChangeSecondOption}
          handleKeyDown={handleKeyDown}
          hasError={Boolean(errors.secondOption)}
          placeholder="두 번째 옵션을 입력해주세요"
        />
      </Modal.Content>
      <Modal.Footer css={footerContainer}>
        <Modal.TextButton onConfirm={handleClick} width="40%" css={appendButton}>
          추가
        </Modal.TextButton>
        <Modal.TextButton onConfirm={onClose} width="40%" backgroundColor="white" css={closeButton}>
          취소
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ContentAppendModal;
