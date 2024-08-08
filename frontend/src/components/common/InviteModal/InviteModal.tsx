import { useParams } from 'react-router-dom';

import {
  inviteModalLi,
  inviteModalTitle,
  inviteModalUl,
  inviteModalLinkButton,
  inviteModalLinkButtonInfoWrapper,
  inviteModalCopyIcon,
  inviteModalUrlText,
  inviteModalLayout,
} from './InviteModal.styled';
import useClipBoard from './useClipBoard';
import Modal from '../Modal/Modal';
import Toast from '../Toast/Toast';

import CopyIcon from '@/assets/images/copyIcon.png';

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InviteModal = ({ isOpen, onClose }: InviteModalProps) => {
  const { roomId } = useParams();
  const inviteUrl = `${window.location.origin}${`/nickname/${roomId}`}`;

  const { isCopied, copyToClipboard } = useClipBoard();

  const handleCopy = () => {
    copyToClipboard(inviteUrl);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} css={inviteModalLayout}>
      <Modal.Header position="center">
        <Modal.Title css={inviteModalTitle}>초대하기</Modal.Title>
        <Modal.IconButton onClick={onClose} />
      </Modal.Header>
      <Modal.Content>
        <ul css={inviteModalUl}>
          <li>{/* TODO: P2에 QR 추가 */}</li>
          <li css={inviteModalLi}>
            <button onClick={handleCopy} css={inviteModalLinkButton}>
              <div css={inviteModalLinkButtonInfoWrapper}>
                <span css={inviteModalUrlText}>{inviteUrl}</span>
                <img src={CopyIcon} alt="복사하기 이미지" css={inviteModalCopyIcon} />
              </div>
            </button>
          </li>
        </ul>
      </Modal.Content>
      <Modal.Footer buttonPosition="center">
        <Modal.TextButton buttonWidth="100%" onClick={onClose}>
          닫기
        </Modal.TextButton>
      </Modal.Footer>
      {isCopied && <Toast message="링크가 복사되었습니다!" duration={2000} />}
    </Modal>
  );
};

export default InviteModal;
