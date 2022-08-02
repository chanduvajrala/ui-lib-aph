import { Menu } from "@headlessui/react";
import React from "react";
import styles from "./Dropdown.module.scss";

interface Option {
  value: any;
  label: String;
}

interface DropdownProps {
  options: Option[];
  OnClick: any;
  dropdownLabel?: string;
  dropdownText?: any;
  className?: string;
}

export default function Dropdown(props: DropdownProps) {
  const { options, OnClick, dropdownLabel, dropdownText, className } = props;
  return (
    <Menu as="div" className={`${styles.dropdownContainer} ${className ? className :'' }`}>
      <Menu.Button as="div" className={styles.dropdownValue}>
        <>
        {dropdownLabel && {dropdownLabel}}
        {dropdownText && <p>{dropdownText}</p>}
        </>
      </Menu.Button>
      <div className={styles.dropdownContent}>
        <Menu.Items as="ul" className={styles.dropdownList}>
          {options.map(({ value, label }) => (
            <Menu.Item as="li" onClick={OnClick} key={value as any}>
              {({ active }) => (
                <a href='#' className={`${active ? styles.active : ""} `}>{label}</a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
}
