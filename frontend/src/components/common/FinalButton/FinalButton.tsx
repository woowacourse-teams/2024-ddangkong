import { useNavigate, useParams } from 'react-router-dom';

import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import { ROUTES } from '@/constants/routes';

const FinalButton = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(ROUTES.ready(Number(roomId)));
  };

  return (
    <div css={bottomButtonLayout}>
      <Button style={{ width: '100%' }} text="확인" onClick={goToHome} />
    </div>
  );
};

export default FinalButton;
