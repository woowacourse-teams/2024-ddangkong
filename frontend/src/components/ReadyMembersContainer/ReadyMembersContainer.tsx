import { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  readyMembersContainerLayout,
  totalNumber,
  memberItem,
  memberList,
  profileBox,
  memberStatus,
  membersContainer,
  inviteButton,
} from './ReadyMembersContainer.styled';
import InviteModal from '../common/InviteModal/InviteModal';

import crownIcon from '@/assets/images/crownIcon.png';
import plusIcon from '@/assets/images/plusIcon.png';
import { RoomMembers } from '@/types/room';

interface ReadyMembersContainerProps extends RoomMembers {}

const ReadyMembersContainer = ({ members }: ReadyMembersContainerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { roomId } = useParams();
  const inviteUrl = `${window.location.origin}${`/nickname/${roomId}`}`;

  const handleInviteButton = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div css={readyMembersContainerLayout}>
      <p css={totalNumber}>총 인원 {members.length}명</p>
      <section css={membersContainer}>
        <ul css={memberList}>
          <li>
            <button css={inviteButton} onClick={handleInviteButton}>
              <div css={profileBox}>
                <img src={plusIcon} alt="추가 아이콘" />
              </div>
              <div>초대하기</div>
            </button>
          </li>
          {members.map((member) => (
            <li css={memberItem} key={member.memberId}>
              <div css={profileBox}></div>
              <div css={memberStatus}>
                <span>{member.nickname}</span>
                {member.isMaster && <img src={crownIcon} alt="왕관 아이콘" />}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <InviteModal isOpen={isModalOpen} onClose={handleModalClose} inviteUrl={inviteUrl} />
    </div>
  );
};

export default ReadyMembersContainer;
