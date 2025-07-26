import React from "react";
import { UserProps } from "../../interfaces";

import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>

      <div style={styles.section}>
        <h4>Address</h4>
        <p>{address.street}, {address.suite}</p>
        <p>{address.city}, {address.zipcode}</p>
        <p><em>Geo:</em> {address.geo.lat}, {address.geo.lng}</p>
      </div>

      <div style={styles.section}>
        <h4>Company</h4>
        <p><strong>{company.name}</strong></p>
        <p>{company.catchPhrase}</p>
        <p><em>{company.bs}</em></p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  section: {
    marginTop: "12px",
  },
};

export default UserCard;
