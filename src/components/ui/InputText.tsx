import { forwardRef } from "react";

type CustomInputTextProps = React.InputHTMLAttributes<HTMLInputElement>;

const CustomInputText = forwardRef((props: CustomInputTextProps, ref) => {
  return <input type="text" {...props} ref={ref} />;
});

export default CustomInputText;
