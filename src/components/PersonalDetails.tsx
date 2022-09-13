import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import React from 'react'
import { MyFormValues } from "./formValues";

import {useState}  from 'react'
interface Props {
  values: {
    name: string;
    dob: string;
    gender: string;
    mobile: string;
    govtIdType: string;
    govtID: string;
  };
  changeInput: (event: React.SetStateAction<any>) => void;
  changeBlur: (event: React.FocusEvent<any, Element>) => void;
  errors: FormikErrors<MyFormValues>;
  touched: FormikTouched<MyFormValues>;
}

const PersonalDetails: React.FC<Props> = ({
  changeInput,
  values,
  changeBlur,
  errors,
  touched,
}) => {

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
              <TextField
                id="name"
                label="Enter Name"
                variant="outlined"
                value={values.name}
                onChange={changeInput}
                onBlur={changeBlur}
                style={{ width: "300px" }}
              />
            </div>
            {touched.name && errors.name && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginLeft: "20px",
                }}
              >
                {errors.name}
              </p>
            )}
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
                value={values.dob}
                onChange={changeInput}
                onBlur={changeBlur}
                style={{ width: "300px" }}
              />
            </div>
            {touched.dob && errors.dob && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginLeft: "20px",
                }}
              >
                {errors.dob}
              </p>
            )}
          </div>

          <div>
            <div className="text_field">
              <label htmlFor="sex">
                Sex <span>*</span>
              </label>
              <FormControl style={{ width: "300px" }}>
                <InputLabel id="demo-simple-select-label">Enter Sex</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="gender"
                  label="Enter Sex"
                  name="gender"
                  value={values.gender}
                  onChange={changeInput}
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"others"}>Others</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="user_details2">
          <div className="text_field phn_field">
            <label htmlFor="mobile">Mobile</label>
            <TextField
              id="mobile"
              label="Mobile"
              variant="outlined"
              type="number"
              value={values.mobile}
              onChange={changeInput}
              onBlur={changeBlur}
              style={{ width: "300px" }}
            />
            {touched.mobile && errors.mobile && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginLeft: "20px",
                }}
              >
                {errors.mobile}
              </p>
            )}
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
                  id="govtIdType"
                  name="govtIdType"
                  label="Enter ID"
                  value={values.govtIdType}
                  onChange={changeInput}
                >
                  <MenuItem value={"adhar_card"}>Adhar Card</MenuItem>
                  <MenuItem value={"pan_card"}>Pan Card</MenuItem>
                  <MenuItem value={"voterID_card"}>VoterID Card</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Enter Govt ID"
                id="govtID"
                name="govtID"
                variant="outlined"
                value={values.govtID}
                onChange={changeInput}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails