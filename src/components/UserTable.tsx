import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styles from "./UserTable.module.css";

const UserTable: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.filteredUsers);

  return (
    <div className={styles.wrapper_table}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
