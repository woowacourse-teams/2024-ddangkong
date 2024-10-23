import {
  optionInfo,
  optionParticipantsLayout,
  participantsListWrapper,
} from './OptionParticipants.styled';
import A11yOnly from '../common/a11yOnly/A11yOnly';
import NicknameItem from '../NicknameItem/NicknameItem';

export interface OptionParticipantsProps {
  optionName: string;
  memberCount: number;
  members: string[];
}

const OptionParticipants = ({ optionName, memberCount, members }: OptionParticipantsProps) => {
  const screenReaderOptionParticipants = `${optionName}. ${memberCount}명`;
  return (
    <div css={optionParticipantsLayout}>
      <A11yOnly>{screenReaderOptionParticipants}</A11yOnly>
      <p css={optionInfo} aria-hidden>
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
