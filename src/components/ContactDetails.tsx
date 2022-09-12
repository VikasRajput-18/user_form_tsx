import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

interface AppInt {
  handleChange: any;
  values: {
    gaurdian: string;
  };
}

const ContactDetails = ({ handleChange, values }: AppInt) => {
  return (
    <>
      <div className="contact">
        <p className="title">Contact Details</p>
      </div>

      <div className="contact_details">
        <div className="guardian_box">
          <label htmlFor="govtID" style={{ width: "300px" }}>
            Guardian Details
          </label>
          <FormControl style={{ width: "50%" }}>
            <InputLabel id="gaurdian">Enter Label</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="gaurdian"
              label="Enter Label"
              value={values.gaurdian}
              onChange={handleChange}
            >
              <MenuItem value={"adhar_card"}>Parent</MenuItem>
              <MenuItem value={"pan_card"}>Teacher</MenuItem>
              <MenuItem value={"voterID_card"}>Brother </MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Enter Guardian Name"
            id="gaurdianName"
            variant="outlined"
          />
        </div>

        <div className="text_field">
          <label htmlFor="email">Email</label>
          <TextField
            id="email"
            label="Enter Email"
            variant="outlined"
            type="email"
          />
        </div>

        <div className="text_field">
          <label htmlFor="contactNum">Enter Emergency Number</label>
          <TextField
            id="contactNum"
            label="Enter Emergency No."
            variant="outlined"
            type="number"
          />
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
