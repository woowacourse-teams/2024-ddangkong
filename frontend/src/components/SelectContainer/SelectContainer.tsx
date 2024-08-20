import { useRoundIsFinished, useSelectOption } from './SelectContainer.hook';
import { selectContainerLayout, selectSection } from './SelectContainer.styled';
import AlertModal from '../common/AlertModal/AlertModal';
import SelectButton from '../common/SelectButton/SelectButton';

import SelectOption from '@/components/SelectOption/SelectOption';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useModal from '@/hooks/useModal';

const SelectContainer = () => {
  const { balanceContent, isLoading, isFetching } = useBalanceContentQuery();
  const { selectedOption, handleClickOption, completeSelection } = useSelectOption();
  const { isOpen, show, close } = useModal();

  useRoundIsFinished({
    contentId: balanceContent?.contentId,
    isFetching,
  });

  if (isLoading) return <div>Loading...</div>;

  if (!balanceContent) return <div>데이터가 없습니다.</div>;

  return (
    <div css={selectContainerLayout}>
      <section css={selectSection}>
        <SelectOption
          option={balanceContent.firstOption}
          selectedOption={selectedOption}
          handleClickOption={handleClickOption}
        />
        <span>VS</span>
        <SelectOption
          option={balanceContent.secondOption}
          selectedOption={selectedOption}
          handleClickOption={handleClickOption}
        />
      </section>
      <SelectButton
        selectedId={selectedOption.id}
        completeSelection={completeSelection}
        showModal={show}
      />
      <AlertModal
        isOpen={isOpen}
        onClose={close}
        title="선택 에러"
        message={'선택이 정상적으로 반영되지 않았어요.'}
      />
    </div>
  );
};

export default SelectContainer;
