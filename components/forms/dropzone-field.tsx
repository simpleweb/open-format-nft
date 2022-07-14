import { Control, Controller } from "react-hook-form";
import Dropzone from "./dropzone";

export default function DropzoneField({
  name,
  control,
  ...rest
}: {
  name: string;
  control: Control<any>;
}) {
  return (
    <Controller
      render={({ field: { onChange } }) => (
        <Dropzone
          onChange={(e: any) => onChange(e.target.files[0])}
          {...rest}
        />
      )}
      name={name}
      control={control}
    />
  );
}
