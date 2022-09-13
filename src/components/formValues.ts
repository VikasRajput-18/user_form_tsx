export interface MyFormValues {
  name: string;
  dob: string;
  gender: string;
  mobile: string;
  govtIdType: string;
  govtID: string;
  gaurdian: string;
  gaurdianName: string;
  email: string;
  contactNum: string;
  address: string;
  state: string;
  city: string;
  country: string;
  pincode: string;
  occupation: string;
  religion: string;
  martial_status: string;
  blood_group: string;
  nationality: string;
}


export const initialValues: MyFormValues = {
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
};