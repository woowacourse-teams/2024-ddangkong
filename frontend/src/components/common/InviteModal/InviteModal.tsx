import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import {
  inviteModalLi,
  inviteModalTitle,
  inviteModalUl,
  inviteModalLinkButton,
  inviteModalLinkButtonInfoWrapper,
  inviteModalCopyIcon,
  inviteModalLayout,
  inviteModalText,
} from './InviteModal.styled';
import useClipBoard from './useClipBoard';
import Modal from '../Modal/Modal';
import Toast from '../Toast/Toast';

import CopyIcon from '@/assets/images/copyIcon.png';
import { memberInfoState, roomUuidState } from '@/recoil/atom';

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InviteModal = ({ isOpen, onClose }: InviteModalProps) => {
  const roomUUid = useRecoilValue(roomUuidState);
  const inviteUrl = `${window.location.origin}${`/nickname/${roomUUid}`}`;

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
                <span css={inviteModalText}>초대 링크 복사</span>
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
