import { forwardRef, LegacyRef } from "react";

type CustomInputTextProps = React.InputHTMLAttributes<HTMLInputElement>;

const CustomInputText = forwardRef((props: CustomInputTextProps, ref) => {
  return (
    <input type="text" {...props} ref={ref as LegacyRef<HTMLInputElement>} />
  );
});

export default CustomInputText;
