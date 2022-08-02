import React,{ useState } from "react";
import { RadioGroup } from "@headlessui/react";
import  styles from './Radio.module.scss';

interface RadioProps {
  options: string[],
  label?: string,
  color: string,
  className?: string,
}

export default function Radio(props: RadioProps) {
  const { options, label, color, className } = props;
  const [selected, setSelected] = useState(options[0]);

  return (
        <RadioGroup value={selected} onChange={setSelected} className={`${styles.radioGroup} ${className ? className :'' }`}>
          {label && <RadioGroup.Label>{label}</RadioGroup.Label>}
          {options.map((option, index) => (
            <RadioGroup.Option value={option} key={`${option}-${index}`}>
              {({ checked }) => (
                <div className={`${styles.radio} ${color ? styles[color] : ''} ${checked ? styles.checked : ""}`}>{option}</div>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
  );
}
