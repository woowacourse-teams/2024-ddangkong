import SelectContainer from './components/SelectContainer/SelectContainer';

import { Content } from '@/components/layout';
import { GameHeader } from '@/components/layout/Header/components';

import { TopicContainer } from '@/components';

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
