import { useNavigate } from 'react-router-dom';

import { NicknameListWrapper } from './RoundResultPage.styled';

import Button from '@/components/common/Button/Button';
import Content from '@/components/layout/Content/Content';
import NicknameList from '@/components/NicknameList/NicknameList';
import RoundVoteResult from '@/components/RoundVoteResult/RoundVoteResult';
import TopicContainer from '@/components/TopicContainer/TopicContainer';

const RoundResultPage = () => {
  const navigate = useNavigate();

  const goToGameResult = () => {
    navigate('/game-result');
  };

  return (
    <Content>
      <TopicContainer />
      <RoundVoteResult />
      <div css={NicknameListWrapper}>
        <NicknameList />
      </div>
      <Button text="다음" active={true} onClick={goToGameResult} />
    </Content>
  );
};

export default RoundResultPage;
