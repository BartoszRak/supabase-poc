import { Button, TextField, Typography } from "@material-ui/core";
import { useState, VoidFunctionComponent } from "react";

export interface SignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface SignUpProps {
  onSubmit: (data: SignUpData) => void;
}

export const SignUp: VoidFunctionComponent<SignUpProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <Typography>Sign up</Typography>
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
      <TextField
        label="First name"
        type="text"
        name="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <TextField
        label="Last name"
        type="text"
        name="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() =>
          onSubmit({
            email,
            password,
            firstName,
            lastName,
          })
        }
      >
        Sign up
      </Button>
    </>
  );
};
