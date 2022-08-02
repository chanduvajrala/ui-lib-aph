import { useEffect, useState } from 'react';
import styles from './Toast.module.scss';
import React from 'react';
interface ToastProps {
  message: string,
  severity?: string,
  placement: string,
  open: boolean,
  className?: string,
}

const Toast: React.FC<ToastProps> = props => {
  const { message, severity, placement, open, className } = props;
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(open => !open);
  };

  return (
    <>
      {isOpen && (
        <div
          className={`${styles.toastContainer} ${className ? className :'' }  ${styles[placement]}`}
        >
          <div className={`${styles.toastContent} ${
            severity ? styles[severity] : ''
          }`}>
          <p>{message}</p>
          <div className={styles.closeToast} onClick={handleClose}>
            <img src="https://newassets.apollo247.com/images/ic_round_clear.svg" width='16' alt=''/>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
