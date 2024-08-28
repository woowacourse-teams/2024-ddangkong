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
import InviteModal from '../common/InviteModal/InviteModal';

import crownIcon from '@/assets/images/crownIcon.png';
import plusIcon from '@/assets/images/plusIcon.png';
import SillyDdangkong from '@/assets/images/sillyDdangkong.png';
import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';
import useModal from '@/hooks/useModal';
import { memberInfoState } from '@/recoil/atom';

const ReadyMembersContainer = () => {
  const { members, master } = useGetRoomInfo();
  const { isOpen, show, close } = useModal();
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);

  // 원래 방장이 아니다 + 방장의 memberId와 내 memberId가 같다 -> 방장으로 변경
  useEffect(() => {
    if (!memberInfo.isMaster && master.memberId === memberInfo.memberId) {
      setMemberInfo({ ...memberInfo, isMaster: true });
    }
  }, [master.memberId]);

  return (
    <section css={readyMembersContainerLayout}>
      <p css={totalNumber}>총 인원 {members.length}명</p>
      <section css={membersContainer}>
        <ul css={memberList}>
          <li>
            <button css={inviteButton} onClick={show}>
              <div css={profileBox}>
                <img src={plusIcon} alt="추가 아이콘" />
              </div>
              <div>초대하기</div>
            </button>
          </li>
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
      <InviteModal isOpen={isOpen} onClose={close} />
    </section>
  );
};

export default ReadyMembersContainer;
