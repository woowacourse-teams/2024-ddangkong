import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

const PrevButton = () => {
  const navigate = useNavigate();

  const goToPrev = async () => {
    navigate(-1);
  };

  return (
    <div css={bottomButtonLayout}>
      <Button style={{ width: '100%' }} text={'뒤로가기'} onClick={goToPrev} />
    </div>
  );
};

export default PrevButton;
