import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
;
const PersonalDetails = () => {
  return (
    <>
      <div>
        <p className="title">Personal Details</p>
      </div>

      <div className="personal_details">
        <div className="user_details">
          <div>
            <div className="text_field">
              <label htmlFor="name">
                Name <span>*</span>
              </label>
              <TextField id="name" label="Enter Name" variant="outlined" />
            </div>
          </div>

          <div>
            <div className="text_field">
              <label htmlFor="dob">
                Date of Birth or Age <span>*</span>
              </label>
              <TextField
                id="dob"
                label="DD/MM/YYYY or Age in Years"
                variant="outlined"
              />
            </div>
          </div>

          <div>
            <div className="text_field">
              <label htmlFor="sex">
                Sex <span>*</span>
              </label>
              <FormControl style={{ width: "130px" }}>
                <InputLabel id="demo-simple-select-label">Enter Sex</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Enter Sex"
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="others">Others</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="user_details2">
          <div className="text_field phn_field">
            <label htmlFor="phone">Mobile</label>
            <TextField
              id="name"
              label="Mobile"
              variant="outlined"
              type="number"
            />
          </div>

          <div className="text_field govtID_field">
            <div className="govt_id_box">
              <label htmlFor="govtID" style={{ width: "300px" }}>
                Govt Issued ID
              </label>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">ID Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Enter ID"
                >
                  <MenuItem value="adhar_card">Adhar Card</MenuItem>
                  <MenuItem value="pan_card">Pan Card</MenuItem>
                  <MenuItem value="voterID_card">VoterID Card </MenuItem>
                </Select>
              </FormControl>

              <TextField label="Enter Govt ID" variant="outlined" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
