
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const OtherDetails = () => {
  return (
    <>
      <div className="others">
        <p className="title">Other Details</p>
      </div>
      <div className="others_details">
        <div className="text_field">
          <label htmlFor="occupation">Occupation</label>
          <TextField
            id="occupation"
            label="Enter Occupation"
            variant="outlined"
            type="text"
           
          />
        </div>

        <div>
          <div className="guardian_box">
            <label htmlFor="religion">Religion</label>
            <FormControl style={{ width: "300px" }}>
              <InputLabel id="demo-simple-select-label">
                Enter Religion
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="religion"
                label="Enter Religion"
               
              >
                <MenuItem value="hindu">Hindu</MenuItem>
                <MenuItem value="muslim">Muslim</MenuItem>
                <MenuItem value="christian">Christian </MenuItem>
                <MenuItem value="punjabi">Punjabi </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div>
          <div className="guardian_box">
            <label htmlFor="martial">Martial Status</label>
            <FormControl style={{ width: "300px" }}>
              <InputLabel id="demo-simple-select-label">
                Enter Martial Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="martial_status"
                label="Enter Martial Status"
               
              >
                <MenuItem value="married">Married</MenuItem>
                <MenuItem value="unmarried">Unmarried</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div>
          <div className="guardian_box">
            <label htmlFor="bloog_group">Blood Group</label>
            <FormControl style={{ width: "300px" }}>
              <InputLabel id="demo-simple-select-label">
                Enter Blood Group
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="blood_group"
                label="Enter Blood Group"
               
              >
                <MenuItem value="b+">B +</MenuItem>
                <MenuItem value="b-">B -</MenuItem>
                <MenuItem value="a+">A +</MenuItem>
                <MenuItem value="a-">A -</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div>
          <div className="text_field">
            <label htmlFor="nationality">Nationality</label>
            <TextField
              id="nationality"
              label="Enter Nationality"
              variant="outlined"
              defaultValue="India"
             
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherDetails;