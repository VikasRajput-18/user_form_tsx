import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
const ContactDetails = () => {
  return (
    <>
      <div className="contact">
        <p className="title">Contact Details</p>
      </div>

      <div className="contact_details">
        <div className="text_field ">
          <div className="guardian_box">
            <label htmlFor="govtID" style={{ width: "300px" }}>
              Guardian Details
            </label>
            <FormControl style={{width : "50%"}}>
              <InputLabel id="demo-simple-select-label">Enter Label</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Enter Label"
              >
                <MenuItem value="adhar_card">Adhar Card</MenuItem>
                <MenuItem value="pan_card">Pan Card</MenuItem>
                <MenuItem value="voterID_card">VoterID Card </MenuItem>
              </Select>
            </FormControl>

            <TextField label="Enter Guardian Name" variant="outlined" />
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
            <label htmlFor="number">Enter Emergency Number</label>
            <TextField
              id="number"
              label="Enter Emergency No."
              variant="outlined"
              type="number"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
