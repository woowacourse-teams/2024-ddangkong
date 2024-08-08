import { useRoundIsFinished, useSelectOption } from './SelectContainer.hook';
import { selectContainerLayout, selectSection } from './SelectContainer.styled';
import SelectButton from '../common/SelectButton/SelectButton';

import SelectOption from '@/components/SelectOption/SelectOption';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const SelectContainer = () => {
  const { balanceContent, isLoading, isFetched, isFetching } = useBalanceContentQuery();
  const { selectedId, handleSelectOption } = useSelectOption();

  useRoundIsFinished({
    contentId: balanceContent?.contentId,
    isFetched,
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
          handleSelectOption={handleSelectOption}
        />
        <span>VS</span>
        <SelectOption
          option={balanceContent.secondOption}
          selectedId={selectedId}
          handleSelectOption={handleSelectOption}
        />
      </section>
      <SelectButton selectedId={selectedId} />
    </div>
  );
};

export default SelectContainer;
