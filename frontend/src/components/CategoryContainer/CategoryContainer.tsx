import { categoryContainerLayout, title, subtitle } from './CategoryContainer.styled';
import RoomSettingModal from '../common/RoomSettingModal/RoomSettingModal';

import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';
import useModal from '@/hooks/useModal';

const CategoryContainer = () => {
  const { roomSetting } = useGetRoomInfo();
  const { isOpen, show, close } = useModal();

  return (
    <>
      <button css={categoryContainerLayout} onClick={show}>
        <span css={subtitle}>카테고리</span>
        <h1 css={title}>{roomSetting.category.label}</h1>
      </button>
      {isOpen && <RoomSettingModal isOpen={isOpen} onClose={close} />}
    </>
  );
};

export default CategoryContainer;
