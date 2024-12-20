import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

import {
  readyMembersContainerLayout,
  totalNumber,
  memberItem,
  memberList,
  profileBox,
  memberStatus,
  membersContainer,
  inviteButton,
  profileImage,
} from './ReadyMembersContainer.styled';

import crownIcon from '@/assets/images/crownIcon.webp';
import SillyDdangkongMedium from '@/assets/images/sillyDdangkongMedium.webp';
import A11yOnly from '@/components/common/a11yOnly/A11yOnly';
import InviteModal from '@/components/InviteModal/InviteModal';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';
import useModal from '@/hooks/useModal';

const ReadyMembersContainer = () => {
  const { members, master } = useGetRoomInfo();
  const { showModal } = useModal();
  const queryClient = useQueryClient();
  const returnFocusRef = useRef<HTMLButtonElement>(null);
  const memberCountMessage = `총 인원 ${members.length}명`;

  const handleClickInvite = () => {
    showModal(InviteModal, { returnFocusRef });
  };

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getUserInfo] });
  }, [master.memberId, queryClient]);

  return (
    <section css={readyMembersContainerLayout}>
      <div css={totalNumber}>
        <div role="status">{memberCountMessage}</div>
        <button css={inviteButton} onClick={handleClickInvite} ref={returnFocusRef}>
          초대하기
        </button>
      </div>
      <section css={membersContainer}>
        <ul css={memberList}>
          {members.map((member) => (
            <li css={memberItem} key={member.memberId}>
              <A11yOnly>{`${member.isMaster ? '방장' : ''} ${member.nickname}`}</A11yOnly>
              <div css={profileBox}>
                <img src={SillyDdangkongMedium} alt="" css={profileImage} />
              </div>
              <div css={memberStatus}>
                <span aria-hidden>{member.nickname}</span>
                {member.isMaster && <img src={crownIcon} alt="" />}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ReadyMembersContainer;
