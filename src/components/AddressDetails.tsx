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
      <div className="address">
        <p className="title">Address Details</p>
      </div>
      <div className="address_details">
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
            <label htmlFor="state">State</label>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Enter State</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="state"
                label="Enter State"
                style={{ width: "200px" }}
                
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
            <label htmlFor="city">City</label>
            <FormControl style={{ width: "200px" }}>
              <InputLabel id="demo-simple-select-label">
                Enter city/town/village
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="city"
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

        <div>
          <div className="text_field">
            <label htmlFor="country">Country</label>
            <TextField
              id="country"
              label="Enter Country"
              variant="outlined"
              defaultValue="India"
              
            />
          </div>
        </div>

        <div>
          <div className="text_field">
            <label htmlFor="pincode">Pin Code</label>
            <TextField
              id="pincode"
              label="Enter Pincode"
              variant="outlined"
              type="number"
              
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressDetails;
