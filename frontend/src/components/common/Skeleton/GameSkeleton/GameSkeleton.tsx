import {
  skeletonLayout,
  skeletonCategory,
  skeletonOptionContainer,
  skeletonText,
} from './GameSkeleton.styled';

const GameSkeleton = () => {
  return (
    <div css={skeletonLayout}>
      <div css={skeletonCategory} data-testid="skeletonCategory" />
      <span css={skeletonText} />
      <div css={skeletonOptionContainer} />
    </div>
  );
};

export default GameSkeleton;
