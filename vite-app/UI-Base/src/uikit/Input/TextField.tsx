'use client';

import { TextField } from '@mui/material';
import { forwardRef, memo, useRef } from 'react';
import useCombineRefs from '../../hooks/useCombineRefs';

interface KInputProps {}
const KTextField = forwardRef<KInputProps, HTMLInputElement>((props, ref) => {
  const innerRef = useRef<HTMLInputElement>();
  const inputRef = useCombineRefs(ref, innerRef);
  return (
    <TextField inputRef={inputRef} id="age" label="firstName" margin="normal" />
  );
});

export default memo(KTextField);
