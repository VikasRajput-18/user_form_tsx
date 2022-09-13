import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "yup-phone";
import "./UserForm.css";
import { useState } from "react";
import { Alert, Button, Grid } from "@mui/material";

import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import AddressDetails from "./AddressDetails";
import OtherDetails from "./OtherDetails";
import SearchPatient from "./SearchPatient";
import { MyFormValues } from "./formValues";
import { initialValues } from "./formValues";

const UserForm: React.FC = () => {
  const [data, setData] = useState<MyFormValues>(initialValues);

  let signUpSchema = Yup.object({
    name: Yup.string()
      .min(2)
      .max(25, "Name must be less than 25 characters")
      .required("Please enter your name"),
    dob: Yup.string().required("Age is required"),
    email: Yup.string().email("Must be valid email address"),
    mobile: Yup.string().phone("IN" || "BD"),
    gaurdian: Yup.string(),
    gaurdianName: Yup.string().when("gaurdian", {
      is: Yup.string(),
      then: Yup.string().required("This field is required"),
    }),
  });

  function postUser() {
    let userDetails: MyFormValues = { ...data };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(userDetails),
    });
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={(values: MyFormValues, actions) => {
        alert(JSON.stringify(values, null, 2));
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
        touched,
      }) => {
        return (
          <form className="userForm" autoComplete="off" onSubmit={handleSubmit}>
            {/* personal dettails  */}
            <PersonalDetails
              changeInput={handleChange}
              values={values}
              changeBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            {/* personal dettails  */}

            {/* contact */}

            <ContactDetails
              changeInput={handleChange}
              values={values}
              changeBlur={handleBlur}
              errors={errors}
              touched={touched}
            />

            {/* contact */}

            {/* address  */}
            <AddressDetails
              changeInput={handleChange}
              values={values}
              changeBlur={handleBlur}
              errors={errors}
              touched={touched}
            />

            {/* address  */}

            {/* otherdetails */}
            <OtherDetails
              changeInput={handleChange}
              values={values}
              changeBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            {/* otherdetails */}

            <Grid className="buttons" container spacing={2}>
              <Grid
                className="alertBox"
                item
                xs={8}
                container
                spacing={2}
                gap={2}
                style={{ marginTop: "20px" }}
              >
                {touched.name && errors.name && (
                  <Alert variant="filled" severity="error">
                    {errors.name}
                  </Alert>
                )}
                {touched.dob && errors.dob && (
                  <Alert variant="filled" severity="error">
                    {errors.dob}
                  </Alert>
                )}
                {touched.mobile && errors.mobile && (
                  <Alert variant="filled" severity="error">
                    {errors.mobile}
                  </Alert>
                )}
              </Grid>
              <Grid item xs={3} className="submit_btns">
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
              </Grid>
            </Grid>

            <SearchPatient />
          </form>
        );
      }}
    </Formik>
  );
};
function SetStateAction<T>() {
  throw new Error("Function not implemented.");
}

export default UserForm;
