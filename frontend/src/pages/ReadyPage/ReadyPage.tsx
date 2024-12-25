import ReadyMembersContainer from './components/ReadyMembersContainer/ReadyMembersContainer';
import RoomSetting from './components/RoomSetting/RoomSetting';
import StartButtonContainer from './components/StartButtonContainer/StartButtonContainer';

import Content from '@/components/layout/Content/Content';
import useGAPageTimeSpentGA from '@/lib/googleAnalytics/hooks/usePageTimeSpentGA';

const ReadyPage = () => {
  useGAPageTimeSpentGA('준비 페이지');

  return (
    <Content>
      <RoomSetting />
      <ReadyMembersContainer />
      <StartButtonContainer />
    </Content>
  );
};

export default ReadyPage;
