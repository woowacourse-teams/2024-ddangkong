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
  userStatusBox,
  userStatusIcon,
  userOptionsButton,
} from './ReadyMembersContainer.styled';
import UserOptionsBottomSheet from '../UserOptionsBottomSheet/UserOptionsBottomSheet';

import { A11yOnly } from '@/components/common';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import { Member } from '@/types/room';

import { CrownIcon, VerticalMoreIcon } from '@/assets';
import { InviteModal } from '@/components';
import { useGetRoomInfo, useIsMaster, useModal } from '@/hooks';

const ReadyMembersContainer = () => {
  const { members, master } = useGetRoomInfo();
  const isMaster = useIsMaster();
  const queryClient = useQueryClient();
  const returnFocusRef = useRef<HTMLButtonElement>(null);
  const { showModal } = useModal();
  const { showBottomSheet } = useBottomSheet();
  const memberCountMessage = `총 인원 ${members.length}명`;

  const handleClickInvite = () => {
    showModal(InviteModal, { returnFocusRef });
  };

  const handleClickUserOptions = (member: Member) => {
    showBottomSheet(UserOptionsBottomSheet, {
      memberId: member.memberId,
      nickname: member.nickname,
    });
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
                <img src={member.imageUrl} alt="캐릭터 이미지" css={profileImage} />
              </div>
              <div css={memberStatus}>
                <span aria-hidden>{member.nickname}</span>
              </div>
              <div css={userStatusBox}>
                {member.isMaster && <img src={CrownIcon} alt="왕관 아이콘" css={userStatusIcon} />}
                {!member.isMaster && isMaster && (
                  <button
                    css={userOptionsButton}
                    onClick={() => handleClickUserOptions(member)}
                    aria-label={`${member.nickname} 유저옵션`}
                  >
                    <img src={VerticalMoreIcon} alt="" css={userStatusIcon} />
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ReadyMembersContainer;
