import { Tab } from '@headlessui/react'
import React from 'react'
import styles from './Tabs.module.scss';
interface TabProps{
    labels: string[],
    children: any,
    className?: string,
}
export const Panel = ({children} : any)=>{
    return <Tab.Panel className={styles.tabPanel}>{children}</Tab.Panel>
    }

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}


export default function Tabs(props: TabProps) {
    const {labels, children, className} = props;
 
  return (
    <div className={`${styles.tabContainer} ${className ? className :'' }`}>
      <Tab.Group>
        <Tab.List className={styles.tabList}>
          {labels.map((label) => (
            <Tab
              key={label}
              className={({ selected }) =>
              classNames(
                `${styles.tab}`,
                selected
                  && `${styles.selected}`
              )
            }
            >
              {label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className={styles.tabContent}>
          {children}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

