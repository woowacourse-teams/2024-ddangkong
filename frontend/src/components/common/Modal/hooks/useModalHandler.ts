import { useState } from 'react';

const useModalHandler = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, handleModalOpen, handleModalClose };
};

export default useModalHandler;
