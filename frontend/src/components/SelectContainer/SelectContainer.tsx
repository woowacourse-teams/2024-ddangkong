import { useParams } from 'react-router-dom';

import { useRoundIsFinished, useSelectOption } from './SelectContainer.hook';
import { selectContainerLayout, selectSection } from './SelectContainer.styled';
import AlertModal from '../common/AlertModal/AlertModal';
import SelectButton from '../common/SelectButton/SelectButton';

import SelectOption from '@/components/SelectOption/SelectOption';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useModal from '@/hooks/useModal';

const SelectContainer = () => {
  const { roomId } = useParams();
  const { balanceContent, isFetching } = useBalanceContentQuery(Number(roomId));
  const { selectedOption, handleClickOption, completeSelection } = useSelectOption();
  const { isOpen, show, close } = useModal();

  useRoundIsFinished({
    contentId: balanceContent?.contentId,
    isFetching,
  });

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
        contentId={balanceContent.contentId}
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
