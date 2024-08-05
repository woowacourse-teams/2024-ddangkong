import { tabButtonStyle } from './RoundResultTab.styled';

type TabTitle = 'group' | 'total';

interface RoundResultTabProps {
  tab: TabTitle;
  activeTab: TabTitle;
  handleClickTab: (tab: TabTitle) => void;
}

const TAB_TITLE = {
  group: '그룹',
  total: '전체',
} as const;

const RoundResultTab = ({ tab, activeTab, handleClickTab }: RoundResultTabProps) => {
  return (
    <button css={tabButtonStyle(activeTab === tab)} onClick={() => handleClickTab(tab)}>
      {TAB_TITLE[tab]}
    </button>
  );
};

export default RoundResultTab;
