import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useEffect, VoidFunctionComponent } from "react";
import { useAuth } from "../hooks/useAuth";
import { useKitties } from "../hooks/useKitties";
import { isDefined } from "../utils/isDefined";
import { AddKitty } from "./add-kitty/AddKitty";

export const Kitties: VoidFunctionComponent = () => {
  const { user } = useAuth();
  const { add, kitties, fetchAll } = useKitties();

  useEffect(() => {
    fetchAll()
  }, [fetchAll])

  if (!isDefined(user)) {
    return <Typography color="error">Log in to add kitty!</Typography>;
  }

  return (
    <>
      <AddKitty onSubmit={(data) => add({ ...data, user_id: user.id })} />
      <List>
        {kitties.map(({ id, name, imageUrl }) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <Avatar src={imageUrl} />
            </ListItemAvatar>
            <ListItemText>{name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};
