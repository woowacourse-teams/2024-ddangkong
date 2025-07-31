import { imageStyle, imageList, title, imageWrapper, closeButton } from './ImageList.styled';

import { Button } from '@/components/common';
import BottomSheet from '@/components/common/BottomSheet/BottomSheet';
import { BottomSheetComponentProps } from '@/providers/BottomSheetProvider/BottomSheetProvider';

interface ImageListProps extends BottomSheetComponentProps {
  changeImageUrl: (newImageUrl: string) => void;
}

const STORAGE_URL = 'https://storage.googleapis.com/ddangkong-images';

const IMAGE_LIST = [
  `${STORAGE_URL}/image1.png`,
  `${STORAGE_URL}/image2.png`,
  `${STORAGE_URL}/image3.png`,
  `${STORAGE_URL}/image4.png`,
  `${STORAGE_URL}/image5.png`,
  `${STORAGE_URL}/image6.png`,
  `${STORAGE_URL}/image7.png`,
  `${STORAGE_URL}/image8.png`,
  `${STORAGE_URL}/image9.png`,
  `${STORAGE_URL}/image10.png`,
];

const ImageList = ({ isOpen, onClose, changeImageUrl }: ImageListProps) => {
  const handleImageClick = (imageUrl: string) => {
    changeImageUrl(imageUrl);
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div>
        <h2 css={title}>이미지 목록</h2>
        <ul css={imageList}>
          {IMAGE_LIST.map((IMAGE, index) => (
            <li key={index}>
              <button onClick={() => handleImageClick(IMAGE)}>
                <div css={imageWrapper}>
                  <img src={IMAGE} alt={`이미지 ${index + 1}`} css={imageStyle} />
                </div>
              </button>
            </li>
          ))}
        </ul>
        <Button onClick={onClose} text="닫기" css={closeButton} />
      </div>
    </BottomSheet>
  );
};

export default ImageList;
