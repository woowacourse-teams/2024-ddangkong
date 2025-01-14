import { RoomSetting, ReadyMembersContainer, StartButtonContainer } from './components';

import Content from '@/components/layout/Content/Content';

const ReadyPage = () => {
  return (
    <Content>
      <RoomSetting />
      <ReadyMembersContainer />
      <StartButtonContainer />
    </Content>
  );
};

export default ReadyPage;
