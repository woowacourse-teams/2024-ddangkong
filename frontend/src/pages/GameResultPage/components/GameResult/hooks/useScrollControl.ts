const useScrollControl = (resultContainerRef: React.RefObject<HTMLDivElement>) => {
  const scrollToTop = () => {
    if (resultContainerRef.current) {
      resultContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    if (resultContainerRef.current) {
      resultContainerRef.current.scrollTo({
        top: resultContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return {
    scrollToTop,
    scrollToBottom,
  };
};

export default useScrollControl;
