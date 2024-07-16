import { useNavigate } from 'react-router-dom';

import { layout, selectSection } from './SelectContainer.styled';

import Button from '@/components/common/Button/Button';
import SelectOption from '@/components/SelectOption/SelectOption';

const SelectContainer = () => {
  const navigate = useNavigate();

  const goToRoundResult = () => {
    navigate('/game-result');
  };

  return (
    <div css={layout}>
      <section css={selectSection}>
        <SelectOption />
        <span>VS</span>
        <SelectOption />
      </section>
      <Button text="선택" active={true} onClick={goToRoundResult} />
    </div>
  );
};

export default SelectContainer;
