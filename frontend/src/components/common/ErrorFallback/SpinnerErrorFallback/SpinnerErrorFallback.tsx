import Spinner from '../../Spinner/Spinner';
import { errorFallbackLayout } from '../ErrorFallback.styled';

const SpinnerErrorFallback = () => {
  return (
    <section css={errorFallbackLayout}>
      <Spinner />
    </section>
  );
};

export default SpinnerErrorFallback;
