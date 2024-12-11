import { useParams } from 'react-router-dom';

import GameVoteStatusContainer from './GameVoteStatusContainer/GameVoteStatusContainer';
import useSelectOption from './hooks/useSelectOption';
import { selectContainerLayout, selectSection } from './SelectContainer.styled';
import SelectOption from './SelectOption/SelectOption';
import Timer from './Timer/Timer';
import SelectButton from '../SelectButton/SelectButton';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const SelectContainer = () => {
  const { roomId } = useParams();
  const { balanceContent, isFetching } = useBalanceContentQuery(Number(roomId));
  const { selectedOption, handleClickOption, completeSelection, cancelSelection } =
    useSelectOption();

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
      <GameVoteStatusContainer contentId={balanceContent.contentId} isFetching={isFetching} />
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
