import {
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {},
  radio: {
    "& .MuiFormLabel-root": {
      display: "flex",
    },
  },
}));

export default function RadioGroup(props) {
  const classes = useStyle();
  const { label, name, value, onChange, items } = props;

  return (
    <FormControl className={classes.radio}>
      <MuiRadioGroup  name={name} value={value} onChange={onChange}>
        <FormLabel>
          {/* <FormLabel style={{ padding: "12px", margin: "24px 0 0 -105px" }}> */}
          {label}
        </FormLabel>
        {items.map((m, index) => (
          <FormControlLabel value={m.id} control={<Radio />} label={m.title} />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}
