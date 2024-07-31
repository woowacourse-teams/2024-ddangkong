import React from 'react';

import { readyPageLayout } from './ReadyPage.styled';

import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import Button from '@/components/common/Button/Button';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';

const ReadyPage = () => {
  const handleClick = () => {};

  return (
    <div css={readyPageLayout}>
      <CategoryContainer />
      <ReadyMembersContainer />
      <Button text="시작" onClick={handleClick} style={{ width: '100%' }} bottom />
    </div>
  );
};

export default ReadyPage;
