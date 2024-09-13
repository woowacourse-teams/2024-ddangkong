import {
  skeletonLayout,
  skeletonCategory,
  skeletonOptionContainer,
  skeletonText,
} from './GameSkeleton.styled';

const GameSkeleton = () => {
  return (
    <div css={skeletonLayout}>
      <div css={skeletonCategory} />
      <span css={skeletonText} aria-label="로딩중" />
      <div css={skeletonOptionContainer} />
    </div>
  );
};

export default GameSkeleton;
