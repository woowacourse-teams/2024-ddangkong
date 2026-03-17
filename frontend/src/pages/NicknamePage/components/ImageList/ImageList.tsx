import {
  imageStyle,
  imageList,
  title,
  imageWrapper,
  closeButton,
  imageListWrapper,
} from './ImageList.styled';

import { Button } from '@/components/common';
import BottomSheet from '@/components/common/BottomSheet/BottomSheet';
import { PROFILE_IMAGE_URLS } from '@/constants/url';
import { BottomSheetComponentProps } from '@/providers/BottomSheetProvider/BottomSheetProvider';

interface ImageListProps extends BottomSheetComponentProps {
  changeImageUrl: (newImageUrl: string) => void;
}

const ImageList = ({ isOpen, onClose, changeImageUrl }: ImageListProps) => {
  const handleImageClick = (imageUrl: string) => {
    changeImageUrl(imageUrl);
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div>
        <h2 css={title}>프로필 이미지 선택</h2>
        <div css={imageListWrapper}>
          <ul css={imageList}>
            {PROFILE_IMAGE_URLS.map((IMAGE, index) => (
              <li key={index}>
                <button onClick={() => handleImageClick(IMAGE)}>
                  <div css={imageWrapper}>
                    <img src={IMAGE} alt={`땅콩 이미지 ${index + 1}번`} css={imageStyle} />
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Button onClick={onClose} text="닫기" css={closeButton} />
      </div>
    </BottomSheet>
  );
};

export default ImageList;
