import { useParams } from 'react-router-dom';

import useSelectOption from './hooks/useSelectOption';
import { selectContainerLayout, selectSection } from './SelectContainer.styled';
import Timer from './Timer/Timer';
import SelectButton from '../common/SelectButton/SelectButton';

import SelectOption from '@/components/SelectOption/SelectOption';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const SelectContainer = () => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));
  const { selectedOption, handleClickOption, completeSelection } = useSelectOption();

  return (
    <div css={selectContainerLayout}>
      <Timer
        selectedId={selectedOption.id}
        isVoted={selectedOption.isCompleted}
        completeSelection={completeSelection}
      />
      <section css={selectSection}>
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
      <SelectButton
        contentId={balanceContent.contentId}
        selectedId={selectedOption.id}
        completeSelection={completeSelection}
      />
    </div>
  );
};

export default SelectContainer;
