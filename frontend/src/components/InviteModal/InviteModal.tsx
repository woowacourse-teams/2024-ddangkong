import { RefObject } from 'react';
import QRCode from 'react-qr-code';

import useClipBoard from './hooks/useClipBoard';
import {
  inviteModalLi,
  inviteModalTitle,
  inviteModalUl,
  inviteModalLinkButton,
  inviteModalLinkButtonInfoWrapper,
  inviteModalCopyIcon,
  inviteModalLayout,
  inviteModalText,
  qrcodeWrapper,
} from './InviteModal.styled';
import Modal from '../common/Modal/Modal';

import CopyIcon from '@/assets/images/copyIcon.png';
import { INVITE_URL } from '@/constants/url';
import useGetUserInfo from '@/hooks/useGetUserInfo';
import useToast from '@/hooks/useToast';

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLElement>;
}

const InviteModal = ({ isOpen, onClose, returnFocusRef }: InviteModalProps) => {
  const { roomUuid } = useGetUserInfo();
  const inviteUrl = INVITE_URL(roomUuid);

  const { copyToClipboard } = useClipBoard();
  const { showToast } = useToast();

  const handleCopy = () => {
    copyToClipboard(inviteUrl);
    showToast('링크가 복사되었습니다!');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      css={inviteModalLayout}
      returnFocusRef={returnFocusRef}
    >
      <Modal.Header position="center">
        <Modal.Title css={inviteModalTitle}>초대하기</Modal.Title>
        <Modal.IconButton onClick={onClose} />
      </Modal.Header>
      <Modal.Content>
        <ul css={inviteModalUl}>
          <li>
            <div css={qrcodeWrapper}>
              <QRCode style={{ width: '50%', height: '50%' }} value={inviteUrl} />
            </div>
          </li>
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
    </Modal>
  );
};

export default InviteModal;
