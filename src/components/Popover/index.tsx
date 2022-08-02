import { Popover } from '@headlessui/react';
import React from 'react';
import styles from './Popover.module.scss';

interface PopOverProps{
  children: any,
  label: string,
  placement?: string,
  className?:string,
}

export default function PopOver(props: PopOverProps) {
  const {children, label, placement, className} = props;
  return (
      <Popover className={`${styles.popoverContainer} ${className ? className :'' }`}>
        {({ open }) => (
          <>
            <Popover.Button as="button"
              className={` ${styles.popoverButton}
                ${open ? '' : ''}`}
                  >
              {label}
            </Popover.Button>
           
              <Popover.Panel className={`${styles.popoverContent} ${placement ? styles[placement] : ''}`}>
                 {children}
              </Popover.Panel>
          </>
        )}
      </Popover>
  )
}