import { useParams } from 'react-router-dom';

import useSelectOption from './hooks/useSelectOption';
import useVoteIsFinished from './hooks/useVoteIsFinished';
import { selectContainerLayout, selectSection } from './SelectContainer.styled';
import SelectOption from './SelectOption/SelectOption';
import Timer from './Timer/Timer';
import SelectButton from '../SelectButton/SelectButton';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import { Theme } from '@/styles/Theme';

const SelectContainer = () => {
  const { roomId } = useParams();
  const { balanceContent, isFetching } = useBalanceContentQuery(Number(roomId));
  const { selectedOption, handleClickOption, completeSelection, cancelSelection } =
    useSelectOption();

  const { voteCount, memberCount } = useVoteIsFinished({
    contentId: balanceContent.contentId,
    isFetching,
  });

  const voteText = `${memberCount || 0}명 중 ${voteCount || 0}명이 투표했어요!`;

  return (
    <div css={selectContainerLayout}>
      <Timer
        selectedOption={selectedOption}
        completeSelection={completeSelection}
        cancelSelection={cancelSelection}
      />
      <section role="radiogroup" css={selectSection}>
        <SelectOption
          option={balanceContent.firstOption}
          selectedOption={selectedOption}
          handleClickOption={handleClickOption}
        />
        <span aria-hidden>VS</span>
        <SelectOption
          option={balanceContent.secondOption}
          selectedOption={selectedOption}
          handleClickOption={handleClickOption}
        />
      </section>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <span style={{ fontSize: 16, fontWeight: 'bold' }}>{voteText}</span>
        <span style={{ fontSize: 12, fontWeight: 'bold', color: Theme.color.gray500 }}>
          “모두 선택하면 빠르게 결과를 확인할 수 있어요”
        </span>
      </div>

      <SelectButton
        contentId={balanceContent.contentId}
        selectedOption={selectedOption}
        completeSelection={completeSelection}
        cancelSelection={cancelSelection}
      />
    </div>
  );
};

export default SelectContainer;
