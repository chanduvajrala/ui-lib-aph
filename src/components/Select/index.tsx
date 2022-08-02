import React from 'react'
import { Listbox } from '@headlessui/react'
import styles from  './Select.module.scss'

interface Option {
    value: String
    label:String
    }

interface SelectProps {
    selected: string | null,
    label: string,
    onChange: any,
    options: Option[],
    className?: string,
}


export default function Select(props: SelectProps) {
    const {  selected, onChange, options, className} = props;
    const selectedOption = options.find((op:Option)=>op.value===selected )
  return (
      <Listbox as="div"  value={selected} onChange={onChange} className={`${styles.selectContainer} ${className ? className :'' }`}>
          <Listbox.Button as="div" className={styles.selectLabel}>
          <span className="block truncate">{(selectedOption && selectedOption.label) ?? 'Select'}</span>
          </Listbox.Button>
            <Listbox.Options className={styles.selectContent}>
              {options.map(({label, value}) => (
                <Listbox.Option
                  key={value as any}
                  className={({ active }) =>
                    `${styles.selectOption} ${
                      active ? styles.active : ''
                    }`
                  }
                  value={value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`${
                          selected ? styles.selected : ''
                        }`}
                      >
                        {label}
                      </span>
                      {selected ? (
                        <></>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
      </Listbox>
  )
}
