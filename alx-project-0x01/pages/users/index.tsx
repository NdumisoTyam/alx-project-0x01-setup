import Header from "@/components/layout/Header";

import React, { useState } from "react";
import { UserProps, UserData } from "../../interfaces";
import UserCard from "../../components/common/UserCard";
import UserModal from "../../components/common/UserModal";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [users, setUsers] = useState<UserProps[]>(posts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Users</h1>
      <button onClick={() => setIsModalOpen(true)}>Add User</button>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
