import * as CheckBoxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "phosphor-react"
import { forwardRef } from "react";

export interface CheckboxProps extends CheckBoxPrimitive.CheckboxProps {}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => {
  return (
    <CheckBoxPrimitive.Root ref={ref} className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}>
      <CheckBoxPrimitive.Indicator>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckBoxPrimitive.Indicator>
    </CheckBoxPrimitive.Root>
  );
})
