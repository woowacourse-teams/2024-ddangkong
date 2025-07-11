import { screen, waitFor, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import ReadyMembersContainer from './ReadyMembersContainer';

import { customRender } from '@/utils/test-utils';

import { useIsMaster } from '@/hooks';

jest.mock('@/hooks/useIsMaster');

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

  it('유저 옵션 버튼을 클릭했을 때, 바텀시트에 "방장 넘기기" 버튼이 보인다.', async () => {
    (useIsMaster as jest.Mock).mockReturnValue(true);

    const user = userEvent.setup();
    customRender(<ReadyMembersContainer />);

    const memberItems = await screen.findAllByRole('listitem');

    const secondMember = memberItems[1];
    const userOptionButton = within(secondMember).getByRole('button');

    await user.click(userOptionButton);

    await waitFor(() => {
      expect(screen.getByText(/님에게 방장 넘기기/)).toBeInTheDocument();
    });
  });
});
