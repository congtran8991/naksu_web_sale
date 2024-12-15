'use client';

import { TextField } from '@mui/material';
import { forwardRef, memo } from 'react';

import { useInputOptions } from './helpers';

interface KInputProps {}
const KTextField = forwardRef<any, any>((props, ref) => {
  const inputOptions = useInputOptions(props, ref);
  return (
    <TextField id="age" label="firstName" margin="normal" {...inputOptions} />
  );
});

export default memo(KTextField);
