import { useRoundIsFinished, useSelectOption } from './SelectContainer.hook';
import { selectContainerLayout, selectSection } from './SelectContainer.styled';
import SelectButton from '../common/SelectButton/SelectButton';

import SelectOption from '@/components/SelectOption/SelectOption';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const SelectContainer = () => {
  const { balanceContent, isLoading, isFetching } = useBalanceContentQuery();
  const { selectedId, isSelected, handleSelectOption, handleClickSelected } = useSelectOption();

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
          selectedId={selectedId}
          isSelected={isSelected}
          handleSelectOption={handleSelectOption}
        />
        <span>VS</span>
        <SelectOption
          option={balanceContent.secondOption}
          selectedId={selectedId}
          isSelected={isSelected}
          handleSelectOption={handleSelectOption}
        />
      </section>
      <SelectButton selectedId={selectedId} handleClickSelected={handleClickSelected} />
    </div>
  );
};

export default SelectContainer;
