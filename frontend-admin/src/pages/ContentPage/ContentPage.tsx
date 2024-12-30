import { contentContainer, contentLayout } from './ContentPage.styles';
import ContentContainer from './components/ContentContainer/ContentContainer';
import ContentHeader from './components/ContentHeader/ContentHeader';

const ContentPage = () => {
  return (
    <div css={contentLayout}>
      <div css={contentContainer}>
        <ContentHeader />
        <ContentContainer />
      </div>
    </div>
  );
};

export default ContentPage;
