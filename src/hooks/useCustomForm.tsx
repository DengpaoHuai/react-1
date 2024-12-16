import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm, UseFormProps } from "react-hook-form";
import { z } from "zod";

const useCustomForm = <
  TFieldValues extends FieldValues = FieldValues,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TContext = any
>(
  props: UseFormProps<TFieldValues, TContext> & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    schema: z.ZodObject<any>;
  }
) => {
  const { schema, ...propsList } = props;

  const data = useForm<TFieldValues>({
    ...propsList,
    resolver: zodResolver(schema),
  });

  return data;
};

export default useCustomForm;
