import { tabButtonStyle } from './TabItem.styled';

type Tab = 'group' | 'total';

interface TabItemProps {
  tab: Tab;
  activeTab: Tab;
  handleClickTab: (tab: Tab) => void;
}

const TAB_TITLE = {
  group: '그룹',
  total: '전체',
} as const;

const TabItem = ({ tab, activeTab, handleClickTab }: TabItemProps) => {
  return (
    <button css={tabButtonStyle(activeTab === tab)} onClick={() => handleClickTab(tab)}>
      {TAB_TITLE[tab]}
    </button>
  );
};
export default TabItem;
