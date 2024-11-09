import ReadyMembersContainer from './ReadyMembersContainer/ReadyMembersContainer';
import RoomSetting from './RoomSetting/RoomSetting';
import StartButtonContainer from './StartButtonContainer/StartButtonContainer';

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
