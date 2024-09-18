import {
  skeletonBody,
  skeletonCategory,
  skeletonInfo,
  skeletonLayout,
  skeletonMemberContainer,
  skeletonText,
} from './ReadySkeleton.styled';

const ReadySkeleton = () => {
  return (
    <div css={skeletonLayout}>
      <div css={skeletonCategory}></div>
      <div css={skeletonBody}>
        <div css={skeletonInfo}>
          <span css={skeletonText} />
        </div>
        <div css={skeletonMemberContainer}></div>
      </div>
    </div>
  );
};

export default ReadySkeleton;
