import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import Button from '../Button';
import styles from './Modal.module.scss';

interface ActionButton {
  label: string;
  onClick: any;
  className: string;
}

interface ModalProps {
  open: boolean;
  handleOpen: any;
  title: string;
  children: any;
  actionButtons?: ActionButton[];
  size: string;
}

export default function Modal(props: ModalProps) {
  const { open, handleOpen, title, children, actionButtons, size } = props;

  function closeModal() {
    handleOpen(false);
  }

  // function openModal() {
  //   handleOpen(true);
  // }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className={styles.modalContainer} onClose={closeModal}>
        <div className={styles.modalBackdrop} />
        <div className={styles.modal}>
          <Dialog.Panel className={`${styles.modalBox} ${size ? styles[size] : ''}`}>
            <Dialog.Title as="div" className={styles.modalTitle}>
              <h2>{title}</h2>
              <span
                className={styles.modalClose}
                onClick={() => {
                  handleOpen(false);
                }}
              >
                <img
                  src="https://newassets.apollo247.com/images/ic_cross_popup.svg"
                  width="20"
                  height="20"
                  alt=""
                />
              </span>
            </Dialog.Title>
            <div className={styles.modalContent}>{children}</div>

            <div className={styles.modalActions}>
              {actionButtons && actionButtons.length ? (
                actionButtons.map(({ label, className, onClick }) => (
                  <button type="button" className={className} onClick={onClick}>
                    {label}
                  </button>
                ))
              ) : (
                <Button
                  color="primary"
                  className=""
                  onClick={() => {
                    handleOpen(false);
                  }}
                >
                  Ok
                </Button>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
