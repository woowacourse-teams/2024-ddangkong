import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { selectContainerLayout, selectSection } from './SelectContainer.styled';

import Button from '@/components/common/Button/Button';
import SelectOption from '@/components/SelectOption/SelectOption';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const SelectContainer = () => {
  const navigate = useNavigate();
  const { balanceContent, isLoading } = useBalanceContentQuery();
  const [selectedId, setSelectedId] = useState(0);

  const goToRoundResult = () => {
    navigate('/round-result');
  };

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
          <Button text="선택" active={Boolean(selectedId)} onClick={goToRoundResult} />
        </div>
      )}
    </>
  );
};

export default SelectContainer;
