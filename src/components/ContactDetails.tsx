import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import { MyFormValues } from "./UserForm";

interface Props {
  values: {
    gaurdian: string;
    gaurdianName: string;
    email: string;
    contactNum: string;
  };
  changeInput: (event: React.SetStateAction<any>) => void;
  changeBlur: (event: React.FocusEvent<any, Element>) => void;
  errors: FormikErrors<MyFormValues>;
  touched: FormikTouched<MyFormValues>;
}

const ContactDetails:React.FC<Props> = ({values , changeInput   , changeBlur , errors , touched}) => {
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
              name="gaurdian"
              value={values.gaurdian}
              onChange={changeInput}
            >
              <MenuItem value={"parent"}>Parent</MenuItem>
              <MenuItem value={"teacher"}>Teacher</MenuItem>
              <MenuItem value={"brother"}>Brother </MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Enter Guardian Name"
            id="gaurdianName"
            name="gaurdianName"
            variant="outlined"
            value={values.gaurdianName}
            onChange={changeInput}
          />
          {errors.gaurdianName && (
            <p
              style={{
                color: "red",
                fontSize: "12px",
                marginLeft: "20px",
              }}
            >
              {errors.gaurdianName}
            </p>
          )}
        </div>

        <div className="text_field">
          <label htmlFor="email">Email</label>
          <TextField
            id="email"
            label="Enter Email"
            variant="outlined"
            type="email"
            value={values.email}
            onChange={changeInput}
            style={{ width: "300px" }}
          />
        </div>

        {errors.email && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              marginLeft: "20px",
            }}
          >
            {errors.email}
          </p>
        )}

        <div className="text_field">
          <label htmlFor="contactNum">Enter Emergency Number</label>
          <TextField
            id="contactNum"
            label="Enter Emergency No."
            variant="outlined"
            type="number"
            value={values.contactNum}
            onChange={changeInput}
            style={{ width: "300px" }}
          />
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
