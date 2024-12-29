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
import QuestionInput from './QuestionInput';
import { ModalState } from '@/types/modal';
import useInput from '@/hooks/useInput';

const ContentAppendModal = ({ isOpen, onClose, onConfirm, title }: ModalState) => {
  const { category, handleClickOption } = useCategory();
  const { data: categoryList } = useCategoryListQuery();

  const { value: question, handleChange: handleChangeQuestion } = useInput({ maxLength: 36 });
  const { value: firstOption, handleChange: handleChangeFirstOption } = useInput();
  const { value: secondOption, handleChange: handleChangeSecondOption } = useInput();

  const handleClick = () => {
    if (onConfirm) {
      onConfirm({ category, question, firstOption, secondOption });
    }
    onClose();
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
        <QuestionInput
          label="질문"
          value={question}
          handleChange={handleChangeQuestion}
          placeholder="추가할 질문을 입력해주세요"
          maxLength={36}
        />
        <QuestionInput
          label="옵션 1"
          value={firstOption}
          handleChange={handleChangeFirstOption}
          placeholder="첫 번째 옵션을 입력해주세요"
        />
        <QuestionInput
          label="옵션 2"
          value={secondOption}
          handleChange={handleChangeSecondOption}
          placeholder="두 번째 옵션을 입력해주세요"
        />
      </Modal.Content>
      <Modal.Footer css={footerContainer}>
        <Modal.TextButton onClick={handleClick} width="40%" css={appendButton}>
          추가
        </Modal.TextButton>
        <Modal.TextButton
          onClick={handleClick}
          width="40%"
          backgroundColor="white"
          css={closeButton}
        >
          취소
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ContentAppendModal;
