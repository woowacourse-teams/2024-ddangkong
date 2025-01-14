import { RoomSetting, ReadyMembersContainer, StartButtonContainer } from './components';

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
