import { tabButtonStyle } from './RoundResultTab.styled';

type TabTitle = 'voteStatistics' | 'voteStatus';

interface RoundResultTabProps {
  tab: TabTitle;
  activeTab: TabTitle;
  handleClickTab: (tab: TabTitle) => void;
}

const TAB_TITLE = {
  voteStatistics: '투표 통계',
  voteStatus: '투표 현황',
} as const;

const RoundResultTab = ({ tab, activeTab, handleClickTab }: RoundResultTabProps) => {
  return (
    <button css={tabButtonStyle(activeTab === tab)} onClick={() => handleClickTab(tab)}>
      {TAB_TITLE[tab]}
    </button>
  );
};

export default RoundResultTab;
