import React from 'react';

import { readyPageLayout } from './ReadyPage.styled';

import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';

const GameWaitPage = () => {
  return (
    <div css={readyPageLayout}>
      <CategoryContainer />
      <ReadyMembersContainer />
    </div>
  );
};

export default GameWaitPage;
