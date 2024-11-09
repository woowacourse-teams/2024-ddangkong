import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import ReadyMembersContainer from './ReadyMembersContainer';

import { customRender } from '@/utils/test-utils';

describe('ReadyMembersContainer 테스트', () => {
  it('초대하기 버튼을 클릭했을 때, 초대 모달이 뜬다.', async () => {
    const user = userEvent.setup();
    customRender(<ReadyMembersContainer />);

    const inviteButton = await screen.findByText('초대하기');
    await user.click(inviteButton);

    await waitFor(() => {
      const copyText = screen.getByText('초대 링크 복사');
      expect(copyText).toBeInTheDocument();
    });
  });
});
