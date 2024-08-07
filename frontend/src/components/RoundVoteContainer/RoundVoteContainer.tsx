import { useState } from 'react';

import { tabLayout, tabWrapper } from './RoundVoteContainer.styled';
import RoundResultTab from '../RoundResultTab/RoundResultTab';
import TabContentContainer from '../TabContentContainer/TabContentContainer';

import useMyGameStatus from '@/hooks/useMyGameStatus';

const RoundVoteContainer = () => {
  const [activeTab, setActiveTab] = useState<'group' | 'total'>('group');
  const isGroupTabActive = activeTab === 'group';
  useMyGameStatus();

  const handleClickTab = (clickedTab: 'group' | 'total') => {
    setActiveTab(clickedTab);
  };

  return (
    <div css={tabLayout}>
      <nav css={tabWrapper}>
        <RoundResultTab tab="group" activeTab={activeTab} handleClickTab={handleClickTab} />
        <RoundResultTab tab="total" activeTab={activeTab} handleClickTab={handleClickTab} />
      </nav>
      <TabContentContainer isGroupTabActive={isGroupTabActive} />
    </div>
  );
};

export default RoundVoteContainer;
