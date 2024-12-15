import { useRef } from 'react';
import useCombineRefs from '../../hooks/useCombineRefs';

const useInputOptions = (props: any, ref: any) => {
  const innerRef = useRef<HTMLInputElement>();
  const combineRef = useCombineRefs(ref, innerRef);
  const { message, ...rest } = props;
  return { inputRef: combineRef, helperText: message, ...rest };
};

export { useInputOptions };
