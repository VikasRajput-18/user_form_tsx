import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import "./UserForm.css";
import { useState } from "react";
import { Button } from "@mui/material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function UserForm() {
  const [data, setData] = useState({});
  console.log(data);



  const signUpSchema = Yup.object({
    name: Yup.string()
      .min(2)
      .max(25, "Name must be less than 25 characters")
      .required("Please enter your name"),
    dob: Yup.string().required("Age is required"),
    email: Yup.string().email("Must be valid email address"),
    mobile: Yup.string().phone(
      "IN" && "BD"
    ),
    gaurdian: Yup.string(),
    gaurdianName: Yup.string().when("gaurdian", {
      is: Yup.string(),
      then: Yup.string().required("This field is required"),
    }),
    
  });
    function postUser() {
      let userDetails = { ...data };
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(userDetails),
      })
        
    }

  return (
    <Formik
      initialValues={{
        name: "",
        dob: "",
        gender: "",
        mobile: "",
        govtIdType: "",
        govtID: "",
        gaurdian: "",
        gaurdianName: "",
        email: "",
        contactNum: "",
        address: "",
        state: "",
        city: "",
        country: "",
        pincode: "",
        occupation: "",
        religion: "",
        martial_status: "",
        blood_group: "",
        nationality: "",
      }}
      validationSchema={signUpSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        setData(values);
      }}
    >
      {({
        handleSubmit,
        values,
        handleChange,
        handleReset,
        errors,
        handleBlur,
      }) => {
        return (
          <form className="userForm" autoComplete="off" onSubmit={handleSubmit}>
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.name && (
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
                      onChange={handleChange}
                    />
                  </div>
                  {errors.dob && (
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
                    <FormControl style={{ width: "130px" }}>
                      <InputLabel id="demo-simple-select-label">
                        Enter Sex
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="gender"
                        label="Enter Sex"
                        name="gender"
                        value={values.gender}
                        onChange={handleChange}
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
                    onChange={handleChange}
                  />
                  {errors.mobile && (
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
                      <InputLabel id="demo-simple-select-label">
                        ID Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="govtIdType"
                        name="govtIdType"
                        label="Enter ID"
                        value={values.govtIdType}
                        onChange={handleChange}
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
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* contact */}
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
                    onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* contact */}

            {/* address  */}
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
                    name="address"
                    label="Enter Address"
                    variant="outlined"
                    value={values.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <div className="text_field">
                  <label htmlFor="state">State</label>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Enter State
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="state"
                      label="Enter State"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
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
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                    >
                      <MenuItem value={"new_delhi"}>New Delhi</MenuItem>
                      <MenuItem value={"mumbai"}>Mumbai</MenuItem>
                      <MenuItem value={"kolkata"}>Kolkata</MenuItem>
                      <MenuItem value={"pune"}>Pune</MenuItem>
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
                    name="country"
                    defaultValue="India"
                    value={values.country}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <div className="text_field">
                  <label htmlFor="pincode">Pin Code</label>
                  <TextField
                    id="pincode"
                    label="Enter Pincode"
                    name="pincode"
                    variant="outlined"
                    type="number"
                    value={values.pincode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* address  */}

            {/* otherdetails */}
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
                  onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* otherdetails */}

            <div className="buttons">
              <Button variant="contained" color="error" onClick={handleReset}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="success"
                type="submit"
                onClick={postUser}
              >
                Submit
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}
function SetStateAction<T>() {
  throw new Error("Function not implemented.");
}
