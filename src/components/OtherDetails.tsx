import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FormikErrors, FormikTouched } from "formik";
import { MyFormValues } from "./formValues";

interface Props {
  values: {
    occupation: string;
    religion: string;
    martial_status: string;
    blood_group: string;
    nationality: string;
  };
  changeInput: (event: React.SetStateAction<any>) => void;
  changeBlur: (event: React.FocusEvent<any, Element>) => void;
  errors: FormikErrors<MyFormValues>;
  touched: FormikTouched<MyFormValues>;
}

const OtherDetails: React.FC<Props> = ({
  values,
  changeInput,
  changeBlur,
  errors,
  touched,
}) => {
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
            name="occupation"
            variant="outlined"
            type="text"
            value={values.occupation}
            onChange={changeInput}
            style={{ width: "300px" }}
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
                name="religion"
                value={values.religion}
                onChange={changeInput}
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
                name="martial_status"
                value={values.martial_status}
                onChange={changeInput}
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
                name="blood_group"
                value={values.blood_group}
                onChange={changeInput}
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
              name="nationality"
              variant="outlined"
              defaultValue="India"
              value={values.nationality}
              onChange={changeInput}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherDetails;
