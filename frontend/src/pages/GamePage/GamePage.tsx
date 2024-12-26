import SelectContainer from './components/SelectContainer/SelectContainer';

import { GameHeader } from '@/components/layout/Header/components';

import { Content, TopicContainer } from '@/components';

const GamePage = () => {
  return (
    <>
      <GameHeader />
      <Content>
        <TopicContainer />
        <SelectContainer />
      </Content>
    </>
  );
};

export default GamePage;
