
import AddressDetails from "./AddressDetails";
import ContactDetails from "./ContactDetails";
import PersonalDetails from "./PersonalDetails";
import "./UserForm.css";

export default function UserForm() {
  return (
    <form className="userForm" autoComplete="off">
      <PersonalDetails />
      <ContactDetails />
      <AddressDetails />
    </form>
  );
}
