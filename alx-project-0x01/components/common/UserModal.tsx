import React, { useState } from "react";
import { UserModalProps, UserData } from "../../interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [key]: value,
        },
      }));
    } else if (name.startsWith("geo.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [key]: value,
          },
        },
      }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Add New User</h2>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <input name="website" placeholder="Website" onChange={handleChange} />
        <input name="address.street" placeholder="Street" onChange={handleChange} />
        <input name="address.suite" placeholder="Suite" onChange={handleChange} />
        <input name="address.city" placeholder="City" onChange={handleChange} />
        <input name="address.zipcode" placeholder="Zipcode" onChange={handleChange} />
        <input name="geo.lat" placeholder="Latitude" onChange={handleChange} />
        <input name="geo.lng" placeholder="Longitude" onChange={handleChange} />
        <input name="company.name" placeholder="Company Name" onChange={handleChange} />
        <input name="company.catchPhrase" placeholder="Catch Phrase" onChange={handleChange} />
        <input name="company.bs" placeholder="Business Strategy" onChange={handleChange} />

        <div style={styles.actions}>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    width: "400px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
  },
};

export default UserModal;
