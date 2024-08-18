import { useParams } from 'react-router-dom';

import { useRoundIsFinished, useSelectOption } from './SelectContainer.hook';
import { selectContainerLayout, selectSection } from './SelectContainer.styled';
import SelectButton from '../common/SelectButton/SelectButton';

import SelectOption from '@/components/SelectOption/SelectOption';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const SelectContainer = () => {
  const { roomId } = useParams();
  const { balanceContent, isLoading, isFetching } = useBalanceContentQuery(Number(roomId));
  const { selectedOption, handleSelectOption, handleClickSelected } = useSelectOption();

  useRoundIsFinished({
    contentId: balanceContent?.contentId,
    isFetching,
  });

  if (isLoading) return <div>Loading...</div>;

  if (!balanceContent) return <div>데이터가 없습니다.</div>;

  return (
    <div css={selectContainerLayout}>
      <section css={selectSection}>
        <SelectOption
          option={balanceContent.firstOption}
          selectedOption={selectedOption}
          handleSelectOption={handleSelectOption}
        />
        <span>VS</span>
        <SelectOption
          option={balanceContent.secondOption}
          selectedOption={selectedOption}
          handleSelectOption={handleSelectOption}
        />
      </section>
      <SelectButton selectedId={selectedOption.id} handleClickSelected={handleClickSelected} />
    </div>
  );
};

export default SelectContainer;
