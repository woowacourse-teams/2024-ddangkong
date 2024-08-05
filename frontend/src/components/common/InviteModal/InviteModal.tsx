import {
  inviteModalLi,
  inviteModalHeader,
  inviteModalIconButton,
  inviteModalTitle,
  inviteModalUl,
  inviteModalLinkButton,
  inviteModalLinkButtonInfoWrapper,
  inviteModalCopyIcon,
} from './InviteModal.styled';
import Modal from '../Modal/Modal';

import CopyIcon from '@/assets/images/copyIcon.png';

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InviteModal = ({ isOpen, onClose }: InviteModalProps) => {
  const handleCopy = () => {
    // TODO: 링크 영역 클릭하면 카피되는 기능
    // TODO: 카피가 성공하면 토스트 복사 알림
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header css={inviteModalHeader}>
        <Modal.Title css={inviteModalTitle}>초대하기</Modal.Title>
        <Modal.IconButton onClick={onClose} css={inviteModalIconButton} />
      </Modal.Header>
      <Modal.Content>
        <ul css={inviteModalUl}>
          <li>{/* TODO: P2에 QR 추가 */}</li>
          <li css={inviteModalLi}>
            <button onClick={handleCopy} css={inviteModalLinkButton}>
              <div css={inviteModalLinkButtonInfoWrapper}>
                <span>초대 링크 복사</span>
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
    </Modal>
  );
};

export default InviteModal;
