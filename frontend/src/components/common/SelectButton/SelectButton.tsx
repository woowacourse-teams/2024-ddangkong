import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

interface SelectButtonProps {
  isDisabled: boolean;
}

const SelectButton = ({ isDisabled }: SelectButtonProps) => {
  const navigate = useNavigate();

  const goToRoundResult = () => {
    navigate(`/round/result`);
  };

  return (
    <div css={bottomButtonLayout}>
      <Button
        style={{ width: '100%' }}
        disabled={isDisabled}
        text={'선택'}
        onClick={goToRoundResult}
      />
    </div>
  );
};

export default SelectButton;
