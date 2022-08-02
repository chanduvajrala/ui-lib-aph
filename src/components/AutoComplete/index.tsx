import React,{ useState,FC, useEffect,useCallback } from 'react'
import { Combobox } from '@headlessui/react'
import styles from './AutoComplete.module.scss'
import CircularProgress from '../CircularProgress'

interface AutoCompleteProps<T={}>{
  callQuery: (query:string) => Promise<T[]>
  ListItem : FC<any>
  placeholder?: string,
  label?: string,
  className?: string,
}

function debounce(func:(query:string)=>any,timeOut:number) {
  let timer:any;
  return function (...args: any) {
    //@ts-ignore
    const context= this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, timeOut);
  };
};


 export default function AutoComplete<T={}>(props: AutoCompleteProps<T>) {
   const {callQuery,ListItem, placeholder, label, className} = props;
   const [selected, setSelected] = useState(null)
   const [query, setQuery] = useState<string|null>("");
   const [listItems, setListItems] = useState<T[]>([])
   //@ts-ignore
   const [isLoading, setIsLoading] = useState<boolean>(false)
   useEffect(() => {
     selected && setQuery(selected)
   }, [selected])

   const debounceSaved = useCallback(debounce(async (query: string) => {
     try {
         const items = await callQuery(query);
         setListItems(items);
     } catch (error) {
      console.error(error)
     }
     finally {
       setIsLoading(false)
     }
  
   }, 300), [])
   
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsLoading(true);
      setQuery(e.target.value)
      debounceSaved(e.target.value);
   };
  

  return (
    <div className={`${styles.autocompleteContainer}  ${className ? className :'' }`}>
      <Combobox value={selected} onChange={setSelected}>
          <div className={styles.formControl}>
        {label && <label>{label}</label>}
            <Combobox.Input
              className={styles.autocompleteInput}
              placeholder={placeholder}
              displayValue={(person:any) => person}
              onChange={handleChange}
            />
          </div>
            <Combobox.Options className={styles.autocompleteList}>
              {isLoading ? <CircularProgress /> : listItems.length === 0 && query !== '' ? (
                <div className={styles.noData}>
                  Nothing found.
                </div>
              ) : (
                listItems.map((person,idx) => (
                  <Combobox.Option
                    key={idx}
                    
                    value={person}
                  >
                    {({ selected, active }) => (
                        <ListItem selected={selected} active={active} value={person} />
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
      </Combobox> 
    </div>
  )
 }
