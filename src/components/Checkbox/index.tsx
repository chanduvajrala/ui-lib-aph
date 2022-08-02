import styles from "./Checkbox.module.scss";
import React,{ useState, useEffect } from "react";
interface CheckboxProps {
  label: string;
  isChecked: boolean;
  color: string;
  className?: string;
  onChange?: () => {};
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { label, isChecked, color, className, onChange } = props;
  const [checked, setChecked] = useState(!!isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);
  
  const handleCheckbox = () => {
    setChecked((prev)=>!prev)
  };

  return (
    <div className={`${styles.checkbox} ${color ? styles[color]: ''} ${className ? className : ''}`} onClick={handleCheckbox}>
      <input type="checkbox" value="" checked={checked} onChange={onChange} />
      {label && <label>{label}</label>}
    </div>
  );
};

export default Checkbox;
 