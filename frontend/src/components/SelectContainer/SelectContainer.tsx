import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRoundIsFinishedQuery } from './SelectContainer.hook';
import { selectContainerLayout, selectSection } from './SelectContainer.styled';
import SelectButton from '../common/SelectButton/SelectButton';

import SelectOption from '@/components/SelectOption/SelectOption';
import { ROUTES } from '@/constants/routes';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const SelectContainer = () => {
  const navigate = useNavigate();

  const { balanceContent, isLoading } = useBalanceContentQuery();
  const { isFinished } = useRoundIsFinishedQuery({
    roomId: 1,
    contentId: balanceContent?.contentId,
  });

  const [selectedId, setSelectedId] = useState(0);

  const handleSelectOption = (selectedId: number) => {
    setSelectedId(selectedId);
  };

  useEffect(() => {
    if (isFinished) {
      navigate(ROUTES.roundResult);
    }
  }, [isFinished, navigate]);

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
          <SelectButton isDisabled={!selectedId} selectedId={selectedId} />
        </div>
      )}
    </>
  );
};

export default SelectContainer;
