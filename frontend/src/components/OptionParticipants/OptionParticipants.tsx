import {
  optionInfo,
  optionParticipantsLayout,
  participantsListWrapper,
} from './OptionParticipants.styled';
import NicknameItem from '../NicknameItem/NicknameItem';

export interface OptionParticipantsProps {
  optionName: string;
  memberCount: number;
  members: string[];
}

const OptionParticipants = ({ optionName, memberCount, members }: OptionParticipantsProps) => {
  return (
    <div css={optionParticipantsLayout}>
      <p css={optionInfo}>
        {optionName}: {memberCount}
      </p>
      <ul css={participantsListWrapper}>
        {members.map((member, index) => (
          <NicknameItem nickName={member} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default OptionParticipants;
