import Wrapper from "../assets/wrappers/ContatWrapper";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { CONTACTS } from "../queries";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
const ContactInfo = () => {
  //Graphql query to get all contacts data
  const result = useQuery(CONTACTS);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    result.data && setContacts(result.data.contactInfo);
  }, [result]);

  if (contacts) {
    //Destrucuturinf of contacts data if there is one
    const { address, facebookPath, instagramPath } = contacts;
    return (
      <Wrapper>
        <section className="contactContainer">
          <h3>{address}</h3>
        </section>
        <section className="contactContainer social">
          <a href={facebookPath}>
            <FaFacebookF className="facebookIcon" />
          </a>
          <a href={instagramPath}>
            <FiInstagram className="instagramIcon" />
          </a>
        </section>
      </Wrapper>
    );
  }
};
export default ContactInfo;
