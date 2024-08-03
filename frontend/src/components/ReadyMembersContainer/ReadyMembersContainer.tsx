import {
  readyMembersContainerLayout,
  totalNumber,
  memberItem,
  memberList,
  profileBox,
  memberStatus,
  membersContainer,
} from './ReadyMembersContainer.styled';

import crownIcon from '@/assets/images/crownIcon.png';
import plusIcon from '@/assets/images/plusIcon.png';
import { RoomMembers } from '@/types/room';

interface ReadyMembersContainerProps extends RoomMembers {}

const ReadyMembersContainer = ({ members }: ReadyMembersContainerProps) => {
  return (
    <div css={readyMembersContainerLayout}>
      <p css={totalNumber}>총 인원 {members.length}명</p>
      <section css={membersContainer}>
        <ul css={memberList}>
          <li css={memberItem}>
            <button css={profileBox}>
              <img src={plusIcon} alt="추가 아이콘" />
            </button>
            <div>초대하기</div>
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
