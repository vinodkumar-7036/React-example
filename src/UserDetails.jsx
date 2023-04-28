import React, { useState } from "react";
import Details from "./Details";

function UserDetails(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [userData, setUserData] = useState([]);

  const handleSubmit = () => {
    let obj1 = {
      firstName: firstName,
      lastName: lastName,
      mobileNo: mobileNo,
    };
    setUserData([...userData, obj1]);
    setFirstName("");
    setLastName("");
    setMobileNo("");
    props.history.push("/datails");
  };
  return (
    <div className="">
      <h1>Registration Page</h1>
      <div className="field mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          FirstName:
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="field mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          FirstName:
        </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="field mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Mobile No:
        </label>
        <input
          type="tel"
          className="form-control"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </div>
      <>
        <button onClick={() => handleSubmit()}>Submit</button>
      </>
      <Details userData={userData} />
    </div>
  );
}
export default UserDetails;
