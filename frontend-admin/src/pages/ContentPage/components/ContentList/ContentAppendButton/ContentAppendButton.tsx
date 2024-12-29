import useModal from '@/hooks/useModal';
import { contentAppendButton } from './ContentAppendButton.styles';
import useContentAppendMutation from '@/pages/ContentPage/hooks/useContentAppendMutation';
import ContentAppendModal from '../ContentAppendModal/ContentAppendModal';

interface ContentAppendButtonProps {
  category: string;
  question: string;
  firstOption: string;
  secondOption: string;
}

const ContentAppendButton = () => {
  const { mutate: appendContentItem } = useContentAppendMutation();
  const { showModal } = useModal();

  const handleAppendContent = ({
    category,
    question,
    firstOption,
    secondOption,
  }: ContentAppendButtonProps) => {
    appendContentItem({ category, question, firstOption, secondOption });
  };

  const handleClickAppend = () => {
    showModal(ContentAppendModal, {
      onConfirm: handleAppendContent,
    });
  };

  return (
    <button css={contentAppendButton} onClick={handleClickAppend}>
      질문 추가
    </button>
  );
};

export default ContentAppendButton;
