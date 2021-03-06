import { Typography, TypographyProps } from "@material-ui/core";
import { FunctionComponent } from "react";
import { useStyle } from "./SuccessText.style";

export const SuccessText: FunctionComponent = ({
  children,
  ...restOfTypographyProps
}: Omit<TypographyProps, "color">) => {
  const classes = useStyle();
  return (
    <Typography className={classes.root} {...restOfTypographyProps}>
      {children}
    </Typography>
  );
};
