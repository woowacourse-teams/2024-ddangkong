import Dropdown from '@/components/Dropdown/Dropdown';
import ContentList from '../ContentList/ContentList';
import { dropdownWrapper, questionAppendButton } from './ContentContainer.styles';
import useCategoryDropdown from '../../hooks/useCategoryDropdown';
import useCategoryListQuery from '@/hooks/useCategoryListQuery';

const ContentContainer = () => {
  const { data: categoryList } = useCategoryListQuery();
  const { category, handleClickOption } = useCategoryDropdown();

  if (!categoryList) return null;

  return (
    <>
      <div css={dropdownWrapper}>
        <button css={questionAppendButton}>질문 추가</button>
        <Dropdown
          text={category.label}
          optionList={categoryList}
          handleClickOption={handleClickOption}
        />
      </div>
      <ContentList category={category.value} />
    </>
  );
};

export default ContentContainer;
