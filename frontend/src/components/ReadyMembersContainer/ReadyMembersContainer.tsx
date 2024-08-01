import {
  readyMembersContainerLayout,
  totalNumber,
  memberItem,
  memberList,
  profileBox,
  memberStatus,
} from './ReadyMembersContainer.styled';

const example = {
  isGameStart: false,
  roomSettings: {
    totalRound: 5,
    timeLimit: 10000,
  },
  members: [
    {
      memberId: 1,
      nickname: '든콩',
      isMaster: true,
    },
    {
      memberId: 2,
      nickname: '프콩',
      isMaster: false,
    },
    {
      memberId: 3,
      nickname: '프콩',
      isMaster: false,
    },
    {
      memberId: 4,
      nickname: '프콩',
      isMaster: false,
    },
    {
      memberId: 5,
      nickname: '프콩',
      isMaster: false,
    },
  ],
};

const ReadyMembersContainer = () => {
  return (
    <>
      <div css={totalNumber}>총 인원 5명</div>
      <section css={readyMembersContainerLayout}>
        <ul css={memberList}>
          <li css={memberItem}>
            <div css={profileBox}>+</div>
            <div>초대하기</div>
          </li>
          {example.members.map((member) => (
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
