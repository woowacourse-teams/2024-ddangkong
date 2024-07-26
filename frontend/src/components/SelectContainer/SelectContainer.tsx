import { useState } from 'react';

import { selectContainerLayout, selectSection } from './SelectContainer.styled';
import SelectButton from '../common/SelectButton/SelectButton';

import SelectOption from '@/components/SelectOption/SelectOption';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const SelectContainer = () => {
  const { balanceContent, isLoading } = useBalanceContentQuery();
  const [selectedId, setSelectedId] = useState(0);

  const handleSelectOption = (selectedId: number) => {
    setSelectedId(selectedId);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {balanceContent && (
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
          <SelectButton isDisabled={!selectedId} />
        </div>
      )}
    </>
  );
};

export default SelectContainer;
