import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

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
import SillyDdangkong from '@/assets/images/sillyDdangkong.webp';
import InviteModal from '@/components/common/InviteModal/InviteModal';
import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';
import useModal from '@/hooks/useModal';
import { memberInfoState } from '@/recoil/atom';

const ReadyMembersContainer = () => {
  const { members, master } = useGetRoomInfo();
  const { show } = useModal();
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);

  const handleClickInvite = () => {
    show(InviteModal);
  };

  // 원래 방장이 아니다 + 방장의 memberId와 내 memberId가 같다 -> 방장으로 변경
  useEffect(() => {
    if (!memberInfo.isMaster && master.memberId === memberInfo.memberId) {
      setMemberInfo({ ...memberInfo, isMaster: true });
    }
  }, [master.memberId, memberInfo, setMemberInfo]);

  return (
    <section css={readyMembersContainerLayout}>
      <div css={totalNumber}>
        <div aria-live="polite">총 인원 {members.length}명</div>
        <button css={inviteButton} onClick={handleClickInvite}>
          초대하기
        </button>
      </div>
      <section css={membersContainer}>
        <ul css={memberList}>
          {members.map((member) => (
            <li css={memberItem} key={member.memberId}>
              <div css={profileBox}>
                <img src={SillyDdangkong} alt="사용자 프로필" css={profileImage} />
              </div>
              <div css={memberStatus}>
                <span>{member.nickname}</span>
                {member.isMaster && <img src={crownIcon} alt="왕관 아이콘" />}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ReadyMembersContainer;
