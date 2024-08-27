import { categoryContainerLayout, title, subtitle } from './CategoryContainer.styled';

import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';

const CategoryContainer = () => {
  const { roomSetting } = useGetRoomInfo();

  return (
    <section css={categoryContainerLayout}>
      <span css={subtitle}>카테고리</span>
      <h1 css={title}>{roomSetting?.category.label}</h1>
    </section>
  );
};

export default CategoryContainer;
