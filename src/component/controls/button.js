import { makeStyles, Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiButtonBase-root": {
      marginTop: theme.spacing(),
    },
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Input(props) {
  const classes = useStyle();
  const { size, color, variant, type, label, fullWidth, onClick } = props;
  return (
    <Button
      className={classes.root}
      color={color || "primary"}
      fullWidth={fullWidth || false}
      size={size || "large"}
      variant={variant || "contained"}
      onClick={onclick}
      type={type || "submit"}
      label={label}
    >
      {label}
    </Button>
  );
}
