import { Fragment } from 'react';
import {
  detailText,
  gradientOverlay,
  gridContainer,
  gridHeader,
  gridItem,
} from './ContentList.styles';
import QuestionCell from './QuestionCell/QuestionCell';
import OptionCell from './OptionCell/OptionCell';
import useContentListQuery from '../../hooks/useContentListQuery';
import ContentDeleteButton from './ContentDeleteButton/ContentDeleteButton';
import IntersectionObserverScroll from '@/components/IntersectionObserver/InterSectionObserver';
import useObserverBottom from '../../hooks/useObserverBottom';

const HEADER_TEXT = ['질문', '옵션1', '옵션2', '옵션1 비율', '옵션2 비율', '비고'];

interface ContentListProps {
  category: string;
}

const ContentList = ({ category }: ContentListProps) => {
  const { data: contents } = useContentListQuery(category);

  const { isBottomVisible, handleReachBottom, handleLeaveBottom, observerRef } =
    useObserverBottom();

  if (!contents) return null;

  return (
    <div css={gridContainer}>
      {HEADER_TEXT.map((text) => (
        <div key={text} css={gridHeader}>
          {text}
        </div>
      ))}
      <IntersectionObserverScroll
        observerRef={observerRef}
        onReachBottom={handleReachBottom}
        onLeaveBottom={handleLeaveBottom}
      >
        {contents.map((content) => (
          <Fragment key={content.contentId}>
            <QuestionCell question={content.question} contentId={content.contentId} />
            <OptionCell option={content.firstOption} />
            <OptionCell option={content.secondOption} />

            <div css={gridItem}>
              <span>{content.firstOption.percent}%</span>
              <span css={detailText}>{content.firstOption.count}표</span>
            </div>
            <div css={gridItem}>
              <span>{content.secondOption.percent}%</span>
              <span css={detailText}>{content.secondOption.count}표</span>
            </div>
            <div css={gridItem}>
              <ContentDeleteButton contentId={content.contentId} question={content.question} />
            </div>
            <div css={gradientOverlay} style={{ opacity: isBottomVisible ? 0 : 0.3 }} />
          </Fragment>
        ))}
      </IntersectionObserverScroll>
    </div>
  );
};

export default ContentList;
