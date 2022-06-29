import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SharedSelect = ({ value, onChange, options }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      style={{ width: "100%" }}
    >
      {options.map((v, i) => (
        <Option index={i} key={v.id} value={v.id}>{v.label}</Option>
      ))}
    </Select>
  )
}

export default SharedSelect;