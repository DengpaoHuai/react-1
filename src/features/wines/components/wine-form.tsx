import { Wine, wineSchema } from "../../../schemas/wine.schema";
import CustomInputText from "../../../components/ui/InputText";
import useCustomForm from "../../../hooks/useCustomForm";

type WineFormProps = {
  defaultValues?: Omit<Wine, "_id">;
  onSubmit: (data: Omit<Wine, "_id">) => void;
};

const WineForm = ({ defaultValues, onSubmit }: WineFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useCustomForm<Omit<Wine, "_id">>({
    schema: wineSchema,
    defaultValues,
  });

  return (
    <div>
      <h1>Create Wine</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <CustomInputText
          type="text"
          id="name"
          {...register("name")}
        ></CustomInputText>
        {errors.name && <p>{errors.name.message}</p>}
        <CustomInputText
          type="text"
          id="region"
          {...register("region")}
        ></CustomInputText>
        {errors.region && <p>{errors.region.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WineForm;
