import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

const FinalButton = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/ready');
  };

  return (
    <div css={bottomButtonLayout}>
      <Button style={{ width: '100%' }} text="확인" onClick={goToHome} />
    </div>
  );
};

export default FinalButton;
