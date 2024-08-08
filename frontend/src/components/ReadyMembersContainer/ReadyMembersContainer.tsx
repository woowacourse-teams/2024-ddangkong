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

import crownIcon from '@/assets/images/crownIcon.png';
import plusIcon from '@/assets/images/plusIcon.png';
import { RoomMembers } from '@/types/room';

interface ReadyMembersContainerProps extends RoomMembers {}

const ReadyMembersContainer = ({ members }: ReadyMembersContainerProps) => {
  if (!members) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div css={readyMembersContainerLayout}>
      <p css={totalNumber}>총 인원 {members.length}명</p>
      <section css={membersContainer}>
        <ul css={memberList}>
          <li>
            <button css={inviteButton}>
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
    </div>
  );
};

export default ReadyMembersContainer;
