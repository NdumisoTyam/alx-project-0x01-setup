import React from "react";
import { UserProps } from "../../interfaces";

import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div style={styles.card}>
      <h2>{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>

      <div style={styles.section}>
        <h4>Address</h4>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
        <p><em>Geo:</em> {user.address.geo.lat}, {user.address.geo.lng}</p>
      </div>

      <div style={styles.section}>
        <h4>Company</h4>
        <p><strong>{user.company.name}</strong></p>
        <p>{user.company.catchPhrase}</p>
        <p><em>{user.company.bs}</em></p>
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
