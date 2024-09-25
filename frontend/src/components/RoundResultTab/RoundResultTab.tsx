import { tabButtonStyle } from './RoundResultTab.styled';

type TabTitle = 'voteResult' | 'voteStatus';

interface RoundResultTabProps {
  tab: TabTitle;
  activeTab: TabTitle;
  handleClickTab: (tab: TabTitle) => void;
}

const TAB_TITLE = {
  voteResult: '투표 결과',
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
