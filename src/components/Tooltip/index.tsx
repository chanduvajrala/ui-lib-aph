import React from 'react';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  tooltip?: any;
  tooltipInfo?: string;
  placement?: string;
  className?: string;
}

export default function Tooltip(props: TooltipProps) {
  const { tooltip, tooltipInfo, placement, className } = props;
  return (
    <div
      className={`${styles.tooltipContainer} ${
        placement ? styles[placement] : ''
      } ${className ? className : ''}`}
    >
      <p className={styles.tooltip}>{tooltip}</p>
      <div className={styles.tooltipContent}>{tooltipInfo}</div>
    </div>
  );
}
