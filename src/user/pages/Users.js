import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Amit Ghade",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
