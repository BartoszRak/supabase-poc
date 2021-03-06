import { Button, TextField, Typography } from "@material-ui/core";
import { useState, VoidFunctionComponent } from "react";

export interface SignInData {
  email: string;
  password: string;
}

interface SignInProps {
  onSubmit: (data: SignInData) => void;
}

export const SignIn: VoidFunctionComponent<SignInProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Typography>Sign in</Typography>
      <TextField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() =>
          onSubmit({
            email,
            password,
          })
        }
      >
        Sign in
      </Button>
    </>
  );
};
