"use client";

import { forwardRef, useRef } from "react";
import useCombineRefs from "../../hooks/useCombineRefs";

import Button from "@mui/material/Button";

interface KButtonProps {
  title: string;
}
const KButtonBase = forwardRef<HTMLButtonElement, KButtonProps>(
  (props, ref) => {
    const innerRef = useRef<HTMLButtonElement>();
    const combineRefs = useCombineRefs<HTMLButtonElement>(ref, innerRef);

    const { title } = props;

    return (
      <Button ref={combineRefs} variant="text">
        {title}
      </Button>
    );
  }
);

export default KButtonBase;
