import {
  readyMembersContainerLayout,
  totalNumber,
  memberItem,
  memberList,
  profileBox,
  memberStatus,
} from './ReadyMembersContainer.styled';

import { RoomMembers } from '@/types/room';

interface ReadyMembersContainerProps extends RoomMembers {}

const ReadyMembersContainer = ({ members }: ReadyMembersContainerProps) => {
  return (
    <>
      <div css={totalNumber}>총 인원 5명</div>
      <section css={readyMembersContainerLayout}>
        <ul css={memberList}>
          <li css={memberItem}>
            <div css={profileBox}>+</div>
            <div>초대하기</div>
          </li>
          {members.map((member) => (
            <li css={memberItem} key={member.memberId}>
              <div css={profileBox}>+</div>
              <div css={memberStatus}>
                <span>{member.nickname}</span>
                {member.isMaster && <span>왕관</span>}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ReadyMembersContainer;
