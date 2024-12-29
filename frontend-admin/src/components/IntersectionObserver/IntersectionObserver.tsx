import { PropsWithChildren, RefObject, useEffect, useState } from "react";

interface IntersectionObserverScrollProps {
  observerRef: RefObject<HTMLDivElement>;
  onReachBottom: () => void;
  onLeaveBottom: () => void;
  threshold?: number;
}

const IntersectionObserverScroll = ({
  children,
  onReachBottom,
  onLeaveBottom,
  observerRef,
  threshold = 1.0,
}: PropsWithChildren<IntersectionObserverScrollProps>) => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    if (!observerRef.current) return;

    const observerElement = observerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!isAtBottom) {
            // 최하단에 처음 도달한 경우
            setIsAtBottom(true);
            onReachBottom();
          }
        } else {
          if (isAtBottom) {
            // 최하단에서 벗어난 경우
            setIsAtBottom(false);
            onLeaveBottom();
          }
        }
      },
      {
        threshold,
      }
    );

    observer.observe(observerRef.current);

    return () => {
      if (observerElement) observer.unobserve(observerElement);
    };
  }, [isAtBottom, onLeaveBottom, onReachBottom, threshold, observerRef]);

  return <div style={{ position: "relative" }}>{children}</div>;
};

export default IntersectionObserverScroll;
