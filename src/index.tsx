export { default as Accordion } from "./components/Accordion";
export { default as AutoComplete } from "./components/AutoComplete";
export { default as Button } from "./components/Button";
export { default as Checkbox } from "./components/Checkbox";
export { default as CircularProgress } from "./components/CircularProgress";
export { default as Dropdown } from "./components/Dropdown";
export { default as Input } from "./components/Input";
export { default as Modal } from "./components/Modal";
export { default as Popover } from "./components/Popover";
export { default as Radio } from "./components/Radio";
export { default as Select } from "./components/Select";
export { default as Switch } from "./components/Switch";
export { default as Tabs } from "./components/Tabs";
export { Panel } from "./components/Tabs";
export { default as Toast } from "./components/Toast";
export { default as Tooltip } from "./components/Tooltip";

import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
, document.getElementById('root') as HTMLElement)