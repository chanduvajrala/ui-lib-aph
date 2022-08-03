import React, { useState } from 'react';
import styles from './App.module.scss';
import Accordion from './components/Accordion';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import CircularProgress from './components/CircularProgress';
import Dropdown from './components/Dropdown';
import Input from './components/Input';
import Modal from './components/Modal';
import Select from './components/Select';
import Toast from './components/Toast';
import Radio from './components/Radio';
import SwitchToggle from './components/Switch';
import Tabs, { Panel } from './components/Tabs';
import AutoComplete from './components/AutoComplete';
import PopOver from './components/Popover';
import Tooltip from './components/Tooltip';

export function ListItem(props: any) {
  const { value } = props;
  return <>{value}</>;
}

function App() {
  const [inputText, setInputText] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [openToastError, setOpenToastError] = useState(false);

  const selectOptions = [
    {
      value: 'select1',
      label: 'select1',
    },
    {
      value: 'select2',
      label: 'select2',
    },
    {
      value: 'select3',
      label: 'select3',
    },
    {
      value: 'select4',
      label: 'select4',
    },
    {
      value: 'select5',
      label: 'select5',
    },
    {
      value: 'select6',
      label: 'select6',
    },
    {
      value: 'select7',
      label: 'select7',
    },
  ];
  const accordPanel = [
    {
      title: 'What is Accordion?',
      description: 'Lorem Ipsum',
    },
    {
      title: 'What is Accordion?',
      description: 'Lorem Ipsum',
    },

    {
      title: 'What is Accordion?',
      description: 'Lorem Ipsum',
    },

    {
      title: 'What is Accordion?',
      description: 'Lorem Ipsum',
    },

    {
      title: 'What is Accordion?',
      description: 'Lorem Ipsum',
    },

    {
      title: 'What is Accordion?',
      description: 'Lorem Ipsum',
    },
  ];
  const tabLabel = ['tab1', 'tab 2', 'tab 3'];

  const radioOption = ['Radio 1', 'Radio 2', 'Radio 3'];
  const [enabled, setEnabled] = useState(false);

  const [selected, setSelected] = useState(null);
  const people = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook'];

  function callQuery(query: string) {
    const filteredPeople =
      query === ''
        ? people
        : people.filter(person =>
            person
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          );
    return filteredPeople;
  }

  return (
    <div className="App">
      <div className={styles.componentContainer}>
        <div className={styles.component}>
          <Accordion panels={accordPanel} />
        </div>
        <div className={styles.component}>
          <AutoComplete
            placeholder="Autocomplete"
            callQuery={callQuery as any}
            ListItem={ListItem}
          />
        </div>
        <div className={styles.component}>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="tertiary">Tertiary</Button>
          <Button color="secondary" variant="outlined">
            Outlined
          </Button>
          <Button color="primary" disabled>
            Disabled
          </Button>
          <Button color="secondary" disabled>
            Disabled
          </Button>
          <Button color="tertiary" disabled>
            Tertiary
          </Button>
        </div>
        <div className={styles.component}>
          <Checkbox color="primary" label="Checkbox" isChecked={false} className="primaryCheckbox"/>
          <Checkbox color="secondary" label="Checkbox" isChecked={false} />
        </div>
        <div className={styles.component}>
          <CircularProgress />
        </div>
        <div className={styles.component}>
          <Dropdown
            OnClick={() => {}}
            options={selectOptions}
            dropdownText="Strips"
          />
        </div>
        <div className={styles.component}>
          <Input
            type="name"
            label="Input"
            placeholder="Name"
            className="NewInput"
            inputText={inputText}
            setInputText={setInputText}
            errorMsg="Please enter a valid input"
          />
        </div>
        <div className={styles.component}>
          <Button
            color="primary"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Open Modal
          </Button>
          <Modal open={openModal} handleOpen={setOpenModal} size="sm" title="Modal Title">
            Modal
          </Modal>
        </div>
        <div className={styles.component}>

        <PopOver label="PopOver" placement='bottomRight'>
            <p>This is Popover dbsfsdfn kjefhjksdfksd sdjkfsdkjfskj dkjfhsdjkfsdjkfdkjsf</p>
            <Button color="tertiary">Ok</Button>
        </PopOver>
        </div>
        <div className={styles.component}>
          <Radio color="primary" label="" options={radioOption} />
          <Radio color="secondary" label="" options={radioOption} />
        </div>
        <div className={styles.component}>
          <Select
            label="Select Input"
            onChange={(element: any) => {
              setSelected(element);
            }}
            selected={selected}
            options={selectOptions}
          />
        </div>
        <div className={styles.component}>
          <SwitchToggle
          color="primary"
            label="Switch"
            isToggled={enabled}
            handleIsToggled={setEnabled}
          />
           <SwitchToggle
          color="secondary"
            label="Switch"
            isToggled={enabled}
            handleIsToggled={setEnabled}
          />
        </div>
        <div className={styles.component}>
          <Tabs labels={tabLabel}>
            <Panel>Content 1</Panel>
            <Panel>Content 2</Panel>
            <Panel>Content 3</Panel>
          </Tabs>
        </div>
        <div className={styles.component}>
          <Button color="primary" onClick={() => setOpenToast(true)}>Toast</Button>
          <Button color="secondary" onClick={() => setOpenToastError(true)}>Toast Error</Button>
        <Toast
          message="Hello Gowthami, Welcome to this website"
          placement="top"
          open={openToast}
          severity="success"
        />
        <Toast
          message="Hello Gowthami, This is an error"
          placement="bottom"
          open={openToastError}
          severity="error"
        />
        </div>
        <div className={styles.component}>
          <Tooltip tooltip="ToolTip" tooltipInfo='This is a tooltip info.' />
        </div>
      </div>
    </div>
  );
}

export default App;
