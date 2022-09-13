import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import {
  Field,
  Formik,
  ErrorMessage,
  Form,
  FieldArray,
  FieldArrayRenderProps,
} from "formik";
import React from "react";
import * as Yup from "yup";

let SearchPatientForm: {
  date: string;
  consultant: string;
  referred: string;
  name: string;
  rate: string;
  qyt: string;
  unit: string;
  discount: string;
  total: string;
  remark: string;
}[] = [
  {
    date: "",
    consultant: "",
    referred: "",
    name: "",
    rate: "",
    qyt: "",
    unit: "",
    discount: "",
    total: "",
    remark: "",
  },
];

const validationSchema = Yup.object({
  employees: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("field is required"),
      last: Yup.string().required("field is required"),
    })
  ),
});
const SearchPatient: React.FC = () => {
  return (
    <>
      <div>
        <Formik
          initialValues={{
            patitentForm: SearchPatientForm,
          }}
          onSubmit={(values) => {
            console.log("Submit" , values);
          }}
          validationSchema={validationSchema}
        >
          {(formik) => {
            console.log("Values" , formik.values.patitentForm)
            return (
              <>
                <div className="search_patient">
                  <span className="p_title">Search Patient</span>

                  <div className="registraion_details">
                    <h1 className="title">OPD Registration Details</h1>
                    <div className="opd_registration_details">
                      <div className="date_field">
                        <label htmlFor="date">Date</label>
                        <TextField
                          id="date"
                          name="date"
                          variant="outlined"
                          type="date"
                          style={{ width: "300px" }}
                          // value={values}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className="consultant_field">
                        <label htmlFor="sex">Consultant</label>
                        <FormControl style={{ width: "300px" }}>
                          <InputLabel id="demo-simple-select-label">
                            Consultant
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="gender"
                            label="Consultant"
                            name="consultant"
                            style={{ width: "300px" }}
                          >
                            <MenuItem value={"dk_vatsal"}>DK VATSAL</MenuItem>
                            <MenuItem value={"vatsal_dk"}>VATSAL DK</MenuItem>
                            <MenuItem value={"demo_1"}>Demo1</MenuItem>
                          </Select>
                        </FormControl>
                      </div>

                      <div className="referred_field">
                        <label htmlFor="date">Referred By</label>
                        <TextField
                          id="referred"
                          name="referred"
                          label="Enter Referred By"
                          variant="outlined"
                          type="text"
                          style={{ width: "300px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient_form">
                  <div className="patient_data">
                    <span>#</span>
                    <span>Name</span>
                    <span>Rate (Rs.)</span>
                    <span>Qty</span>
                    <span>Unit</span>
                    <span>Discount</span>
                    <span>Total(Rs.)</span>
                    <span>Remark</span>
                    <span></span>
                  </div>
                  <Form onSubmit={formik.handleSubmit}>
                    <div className="form_group">
                      <FieldArray
                        name="patitentForm"
                        render={(arrayHelpers: FieldArrayRenderProps) => {
                          return (
                            <div>
                              {formik.values.patitentForm.map(
                                (patient, ind: number) => {
                                  return (
                                    <div key={ind} className="patient_details">
                                      {/* close  */}
                                      <div className="close">
                                        <Button
                                          type="button"
                                          onClick={() =>
                                            arrayHelpers.remove(ind)
                                          }
                                        >
                                          <DeleteIcon
                                            style={{ color: "red" }}
                                          />
                                        </Button>
                                      </div>
                                      {/* close  */}
                                      <div className="service_info">
                                        <p className="serial_no">{ind + 1}</p>
                                        <div>
                                          <FormControl
                                            style={{ width: "300px" }}
                                          >
                                            <InputLabel id="demo-simple-select-label">
                                              Consultant
                                            </InputLabel>
                                            <Select
                                              labelId="demo-simple-select-label"
                                              id="gender"
                                              label="Enter Consultant"
                                              name={`patitentForm.${ind}.name`}
                                              onChange={formik.handleChange}
                                            >
                                              <MenuItem
                                                value={"consultant_fees"}
                                              >
                                                consultant Fees DR. DK VATSAL
                                              </MenuItem>
                                              <MenuItem
                                                value={"stiching_charges"}
                                              >
                                                Stiching Charges
                                              </MenuItem>
                                              <MenuItem
                                                value={"first_aid_charges"}
                                              >
                                                First Aid Charges
                                              </MenuItem>
                                            </Select>
                                          </FormControl>
                                          <ErrorMessage
                                            component="span"
                                            name={`patitentForm.${ind}.name`}
                                          />
                                        </div>
                                        <div>
                                          <TextField
                                            type="number"
                                            label="Rate"
                                            name={`patitentForm.${ind}.rate`}
                                          />
                                        </div>

                                        <div>
                                          <TextField
                                            type="number"
                                            label="Quantity"
                                            name={`patitentForm.${ind}.qty`}
                                          />
                                        </div>
                                        <div>
                                          <TextField
                                            type="number"
                                            label="Unit"
                                            name={`patitentForm.${ind}.unit`}
                                          />
                                        </div>
                                        <div>
                                          <TextField
                                            type="number"
                                            label="Discount"
                                            name={`patitentForm.${ind}.discount`}
                                          />
                                        </div>
                                        <div>
                                          <TextField
                                            type="number"
                                            label="total"
                                            name={`patitentForm.${ind}.total`}
                                          />
                                        </div>
                                        <div>
                                          <TextField
                                            type="text"
                                            label="Remark"
                                            name={`patitentForm.${ind}.remark`}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                              <div className="add_btn">
                                <Button
                                  type="button"
                                  variant="contained"
                                  color="success"
                                  onClick={() =>
                                    arrayHelpers.insert(
                                      formik.values.patitentForm.length + 1,
                                      {}
                                    )
                                  }
                                >
                                  Add
                                </Button>
                              </div>
                            </div>
                          );
                        }}
                      />
                    </div>
                    <div>
                      <Button type="submit">Submit</Button>
                    </div>
                  </Form>
                </div>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default SearchPatient;