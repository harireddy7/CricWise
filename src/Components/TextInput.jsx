import React from 'react';
import { Input } from '@chakra-ui/react';

const TextInput = ({ id, value, setValue, styles, onBlur, onEnter }) => {

  const handleChange = e => {
    const val = e.target.value;
    const regex = /^[a-zA-Z@]{1}[ a-zA-Z0-9#@()/_'-]{0,}$/gm;

    if (!val || regex.test(val)) {
      setValue(val);
    }
  };

  return (
    <Input
      type="text"
      id={id}
      maxW="250px"
      value={value}
      placeholder="Add Player"
      maxLength={20}
      {...styles}
      onChange={handleChange}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          onEnter(e);
        }
      }}
      onBlur={e => {
        if (typeof onBlur === 'function') {
          onBlur(e);
        }
      }}
    />
  );
};

export default TextInput;
