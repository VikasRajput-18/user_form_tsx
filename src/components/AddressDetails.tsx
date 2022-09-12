import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const AddressDetails = () => {
  return (
    <>
      <div className="contact">
        <p className="title">Address Details</p>
      </div>
      <div className="address_details">
        <div>
          <div>
            <div className="text_field">
              <label htmlFor="address">
                Address <span>*</span>
              </label>
              <TextField
                id="address"
                label="Enter Address"
                variant="outlined"
              />
            </div>
          </div>

          <div>
            <div className="text_field">
              <label htmlFor="state">
                State 
              </label>
              <FormControl style={{ width: "130px" }}>
                <InputLabel id="demo-simple-select-label">Enter State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Enter State"
                >
                  <MenuItem value="new_delhi">New Delhi</MenuItem>
                  <MenuItem value="rajasthan">Rajasthan</MenuItem>
                  <MenuItem value="gujrat">Gujrat</MenuItem>
                  <MenuItem value="haryana">Haryana</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div>
            <div className="text_field">
              <label htmlFor="city">
                City 
              </label>
              <FormControl style={{ width: "130px" }}>
                <InputLabel id="demo-simple-select-label">Enter city/town/village</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Enter City"
                >
                  <MenuItem value="new_delhi">New Delhi</MenuItem>
                  <MenuItem value="mumbai">Mumbai</MenuItem>
                  <MenuItem value="kolkata">Kolkata</MenuItem>
                  <MenuItem value="pune">Pune</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default AddressDetails;
