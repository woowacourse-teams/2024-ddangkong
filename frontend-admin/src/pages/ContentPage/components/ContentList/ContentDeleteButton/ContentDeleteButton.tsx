import useModal from "@/hooks/useModal";
import useDeleteContentMutation from "@/pages/ContentPage/hooks/useDeleteContentMutation";
import DeleteModal from "../DeleteModal/DeleteModal";
import { deleteButton } from "./ContentDeleteButton.styles";

interface ContentDeleteButtonProps {
  contentId: number;
  question: string;
}

const ContentDeleteButton = ({
  contentId,
  question,
}: ContentDeleteButtonProps) => {
  const { mutate: deleteContentItem } = useDeleteContentMutation();
  const { showModal } = useModal();

  const handleDeleteContent = () => {
    deleteContentItem({ contentId });
  };

  const handleClickDelete = () => {
    showModal(DeleteModal, {
      message: question,
      onConfirm: handleDeleteContent,
    });
  };

  return (
    <button css={deleteButton} onClick={handleClickDelete}>
      삭제
    </button>
  );
};

export default ContentDeleteButton;
