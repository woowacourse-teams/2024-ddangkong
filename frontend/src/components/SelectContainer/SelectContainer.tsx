import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { layout, selectSection } from './SelectContainer.styled';

import Button from '@/components/common/Button/Button';
import SelectOption from '@/components/SelectOption/SelectOption';
import useQuestionQuery from '@/hooks/useQuestionQuery';

const SelectContainer = () => {
  const navigate = useNavigate();
  const { data: question, isLoading } = useQuestionQuery();
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
      {question && (
        <div css={layout}>
          <section css={selectSection}>
            <SelectOption
              option={question.firstOption}
              selectedId={selectedId}
              handleSelectOption={handleSelectOption}
            />
            <span>VS</span>
            <SelectOption
              option={question.secondOption}
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
