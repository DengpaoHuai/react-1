import { createWine } from "../../../services/wine.service";
import { useNavigate } from "react-router";
import { Wine, wineSchema } from "../../../schemas/wine.schema";
import CustomInputText from "../../../components/ui/InputText";
import useCustomForm from "../../../hooks/useCustomForm";

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useCustomForm<Omit<Wine, "_id">>({
    schema: wineSchema,
  });
  const navigate = useNavigate();

  const onSubmit = (data: Omit<Wine, "_id">) => {
    console.log(data);
    createWine(data).then((response) => {
      console.log(response);
      navigate("/wines/list");
    });
  };

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

export default Create;
