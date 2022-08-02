import React,{ useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import styles from './Switch.module.scss';

interface SwitchProps {
  label?: string,
  isToggled: boolean,
  handleIsToggled: any,
  color: string,
  className?: string,
}

export default function SwitchToggle(props: SwitchProps) {
  const { label, isToggled, handleIsToggled, color, className } = props;
  const [enabled, setEnabled] = useState<boolean>(!!isToggled);
  useEffect(() => {
    handleIsToggled(enabled);
  }, [enabled, handleIsToggled]);
  return (
    <div className={`${styles.switchContainer} ${className ? className :'' }`}>
    {label && <span className={styles.label}>{label}</span>}
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${styles.switch} ${color ? styles[color] : ''} ${enabled && styles.enabled  }`}
      >
        <span
          aria-hidden="true"
          className={styles.switchButton}
        />
      </Switch>
      </div>
  );
}
