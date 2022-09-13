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
  Formik,
  ErrorMessage,
  FieldArray,
  FieldArrayRenderProps,
} from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

interface SearchPatientForm {
  date: string;
  consultant: string;
  referred: string;
  services: {
    name: string;
    rate: number;
    qty: number;
    unit: number;
    discount: number;
    total: number;
    remark: string;
  }[];
}

let patientSearchForm: SearchPatientForm = {
  date: "",
  consultant: "",
  referred: "",
  services: [
    { name: "", rate: 0, qty: 1, unit: 0, discount: 0, total: 0, remark: "" },
  ],
};

const validationSchema = Yup.object({
  date: Yup.string().required("Date is required"),
  consultant: Yup.string().required("Consultant is required"),
  services: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Service Name is required"),
      rate: Yup.string().required("Rate is required"),
      qty: Yup.string().required("Qty is required"),
    })
  ),
});
const SearchPatient: React.FC = () => {
  return (
    <>
      <div>
        <Formik
          initialValues={{
            date: "",
            consultant: "",
            referred: "",
            services: patientSearchForm.services,
          }}
          onSubmit={(values) => {
            console.log("values::::====", values);
          }}
          validationSchema={validationSchema}
        >
          {(formik) => {
            console.log("errors", formik.errors.services);
            return (
              <div>
                <div className="search_patient">
                  <span className="p_title">Search Patient</span>

                  <div className="registraion_details">
                    <h1 className="title">OPD Registration Details</h1>
                    <div className="opd_registration_details">
                      <div className="date_field">
                        <label htmlFor="date">Date</label>
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <TextField
                            id="date"
                            name="date"
                            variant="outlined"
                            type="date"
                            style={{ width: "300px" }}
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.errors.date && (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {formik.errors.date}
                            </span>
                          )}
                        </div>
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
                            onChange={formik.handleChange}
                            style={{ width: "300px" }}
                          >
                            <MenuItem value={"dk_vatsal"}>DK VATSAL</MenuItem>
                            <MenuItem value={"vatsal_dk"}>VATSAL DK</MenuItem>
                            <MenuItem value={"demo_1"}>Demo1</MenuItem>
                          </Select>
                          {formik.errors.consultant && (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {formik.errors.consultant}
                            </span>
                          )}
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
                          onChange={formik.handleChange}
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
                  <div>
                    <div className="form_group">
                      <FieldArray
                        name="services"
                        render={(arrayHelpers: FieldArrayRenderProps) => {
                          return (
                            <div>
                              {formik.values.services.map(
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
                                              id="name"
                                              label="Enter Name"
                                              name={`services[${ind}].name`}
                                              onChange={formik.handleChange}
                                              onBlur={formik.handleBlur}
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
                                        </div>
                                        <div>
                                          <div>
                                            <TextField
                                              type="number"
                                              label="Rate"
                                              name={`services[${ind}].rate`}
                                              onChange={formik.handleChange}
                                              onBlur={formik.handleBlur}
                                            />
                                          </div>
                                          
                                        </div>

                                        <div>
                                          <TextField
                                            type="number"
                                            label="Quantity"
                                            name={`services[${ind}].qty`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                          />
                                        </div>
                                        <div>
                                          <TextField
                                            type="number"
                                            label="Unit"
                                            name={`services[${ind}].unit`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                          />
                                        </div>
                                        <div>
                                          <TextField
                                            type="number"
                                            label="Discount"
                                            name={`services[${ind}].discount`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                          />
                                        </div>
                                        <div>
                                          <TextField
                                            type="number"
                                            label="total"
                                            name={`services[${ind}].total`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                          />
                                        </div>
                                        <div>
                                          <TextField
                                            type="text"
                                            label="Remark"
                                            name={`services[${ind}].remark`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
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
                                  onClick={() => arrayHelpers.push({})}
                                >
                                  Add
                                </Button>
                              </div>
                            </div>
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <Button type="submit" onClick={(e) => e.preventDefault()}>
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default SearchPatient;
