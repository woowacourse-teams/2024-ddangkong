import React from 'react';

import { readyPageLayout, totalNumber } from './ReadyPage.styled';

import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';

const example = {
  members: [
    {
      memberId: 1,
      nickname: '든콩',
      isMaster: true,
    },
    {
      memberId: 2,
      nickname: '프콩',
      isMaster: false,
    },
  ],
};

const GameWaitPage = () => {
  return (
    <div css={readyPageLayout}>
      <CategoryContainer />
      <div css={totalNumber}>총 인원 5명</div>
      <ReadyMembersContainer />
    </div>
  );
};

export default GameWaitPage;
