import { Button, TextField, Typography } from "@material-ui/core";
import { useState, VoidFunctionComponent } from "react";

export interface AddKittyData {
  imageUrl?: string;
  name: string;
  age: number;
}

interface AddKittyProps {
  onSubmit: (data: AddKittyData) => void;
}

export const AddKitty: VoidFunctionComponent<AddKittyProps> = ({
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  return (
    <>
      <Typography>Add kitty</Typography>
      <TextField
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="Age"
        type="number"
        name="age"
        value={age}
        onChange={(event) => setAge(Number(event.target.value))}
      />
      <TextField
        label="Image url"
        type="text"
        name="imageUrl"
        value={imageUrl || ""}
        onChange={(event) => setImageUrl(event.target.value)}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() =>
          onSubmit({
            name,
            age,
            imageUrl,
          })
        }
      >
        Add
      </Button>
    </>
  );
};
