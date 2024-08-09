import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { toastLayout } from './Toast.styled';

interface ToastProps {
  message: string;
  duration?: number;
  style?: React.CSSProperties;
}

const Toast = ({ message, duration = 2000, style }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const toastContent = (
    <div css={toastLayout(isVisible)} style={style}>
      {message}
    </div>
  );

  return ReactDOM.createPortal(toastContent, document.body);
};

export default Toast;
