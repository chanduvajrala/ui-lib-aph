import styles from './Input.module.scss';
import React from 'react';
interface InputProps {
    type: string,
    placeholder: string,
    label?: string,
    fullWidth?: boolean,
    className?: string,
    inputText: string,
    setInputText: any,
    errorMsg?: string,
}

const Input: React.FC<InputProps> = (props) => {
    const {type, placeholder, label, fullWidth, className, inputText, setInputText, errorMsg} = props;

    const handleInputChange = (e:any) => {
        setInputText(e.target.value);
    }
    
    return(
        <div className={`${styles.formControl} ${fullWidth ? styles.fullWidth: ''} ${className}`}>
            {label && <label>{label}</label>}
            <input type={type} placeholder={placeholder} value={inputText} onChange={handleInputChange} className={styles.input} />
            {errorMsg && <span className={styles.errorMsg}>{errorMsg}</span>}
        </div>
    )
}

export default Input;