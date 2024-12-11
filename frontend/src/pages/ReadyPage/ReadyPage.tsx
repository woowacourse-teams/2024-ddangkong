import ReadyMembersContainer from './components/ReadyMembersContainer/ReadyMembersContainer';
import RoomSetting from './components/RoomSetting/RoomSetting';
import StartButtonContainer from './components/StartButtonContainer/StartButtonContainer';

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
