import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './Owners.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { API, Storage, Auth } from "aws-amplify";

//import InputGroup from "react-bootstrap/InputGroup";
//import FormCntrl from "react-bootstrap/FormControl";

import { listOwners } from './graphql/queries';
import { createOwner as createOwnerMutation, deleteOwner as deleteOwnerMutation } from './graphql/mutations';


/*
async function fetchOwner(){

}
*/
const initialFormState = {
  ownerID: "",
  lname: "",
  fname: "",
  businessName: "",
  businessDBAName: "",
  street: "",
  unit: "",
  city: "",
  state: "",
  zip: "",
  primaryDentistName: "",
  secondaryDentistName: "",
  businessLicenseNumber: "",
  businessLicenseAcquiredDate: "",
  businessLicenseExpiryDate: "",
  professionalLicenseName: "",
  professionalLicenseNumber: "",
  professionalLicenseAcquiredDate: "",
  professionalLicenseExpiryDate: "",
  missionStatement: "",
  visionStatement: "",
  aboutBusiness: "",
  ownerBiodata: ""
};

function OwnersProfileApp() {

  const [owner, setOwner] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchOwner();
  }, []);

  async function fetchOwner() {
    const apiData = await API.graphql({ query: listOwners });
    setOwner(apiData.data.listOwners.items);
  }

  async function createOwner() {
    if (!formData.lname || !formData.fname) return;
    await API.graphql({ query: createOwnerMutation, variables: { input: formData } });
    setOwner([ ...owner, formData ]);
    setFormData(initialFormState);
  }





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>Welcome To Owners Profile Page</h2>
        </p>
        </header>
      <h1>My Owners App</h1>
   
<table>
  <thead> 
    <tr>
      <th>ownerID</th>
      <th>Lname</th>
      <th>Fname</th>
      <th>businessName</th>
      <th>businessDBAName</th>
      <th>street</th>
      <th>unit</th>
      <th>city</th>
      <th>state</th>
      <th>zip</th>
      <th>primaryDentistName</th>
    </tr>
  </thead>

  <tr>
    <th>formData.ownerID</th>
    <th>formData.lname</th>
    <th>formData.fname</th>
    <th>formData.businessName</th>
    <th>formData.businessDBAName</th>
    <th>formData.steet</th>
    <th>formData.unit</th>
    <th>formData.city</th>
    <th>formData.state</th>
    <th>formData.zip</th>
    <th>formData.primaryDentistName</th>
  </tr>
</table>
      <input
        onChange={e => setFormData({ ...formData, 'lname': e.target.value})}
        placeholder="Owner Last Name"
        value={formData.lname}
      />
      <input
        onChange={e => setFormData({ ...formData, 'fname': e.target.value})}
        placeholder="Owner First Name"
        value={formData.fname}
      />
      <button onClick={createOwner}>Create Owner</button>
      <p> </p>
      <p> </p>
      <p> </p>

       </div>
 
  );
}



export default OwnersProfileApp;