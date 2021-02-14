import { makeStyles, TextField } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {},
}));

export default function input(props) {

  const {
    name,
    label,
    value,
    onChange,
    id,
    autoComplete,
    type,
    autoFocus,
  } = props;

  return (
    <TextField
      size="small"
      margin="normal"
      variant="outlined"
      required
      fullWidth
      id={id}
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      autoComplete={autoComplete}
      type={type}
      autoFocus={autoFocus}
    />
    
  );
}
