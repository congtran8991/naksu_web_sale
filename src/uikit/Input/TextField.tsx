import { TextField } from '@mui/material';
import { forwardRef, memo } from 'react';
import { useInputOptions } from './helpers';

// eslint-disable-next-line react/display-name
const KTextField = forwardRef<HTMLInputElement, unknown>((props, ref) => {
  const { combinedRef } = useInputOptions(props, ref);
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <TextField
      size="small"
      inputRef={combinedRef}
      variant="outlined"
      autoComplete="off"
    />
  );
});

export default memo(KTextField);
