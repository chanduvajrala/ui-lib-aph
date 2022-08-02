import { Disclosure } from "@headlessui/react";
import React from 'react';
import styles from './Accordion.module.scss';

interface Panel {
  title: string;
  description: string;
}

interface AccordionProps {
  panels: Panel[];
  className?: string;
}

export default function Accordion(props: AccordionProps) {
  const { panels, className } = props;
  return (
      <div className={`${styles.accordionContainer}  ${className ? className :'' }`}>
        {panels.map(({ title, description }, idx) => (
          <Disclosure as="div" className={styles.accordion} key={idx}>
            {({ open }) => (
              <>
                <Disclosure.Button as="div" className={`${styles.accordionPanel} ${open ? styles.active : ''}`}>
                  <h2>{title}</h2>
                </Disclosure.Button>
                <Disclosure.Panel className={styles.accordionPanelDetails}>
                  <div className={styles.panelContent}>{description}</div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
  );
}
