import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { filterUsers } from "../store/userSlice";
import { User } from "../types/userTypes";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const validFields: Array<keyof User> = [
      "name",
      "username",
      "email",
      "phone",
    ];

    if (validFields.includes(name as keyof User)) {
      dispatch(filterUsers({ field: name as keyof User, value }));
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="text"
        name="name"
        placeholder="Search by Name"
        onChange={handleSearch}
      />
      <input
        className={styles.searchInput}
        type="text"
        name="username"
        placeholder="Search by Username"
        onChange={handleSearch}
      />
      <input
        className={styles.searchInput}
        type="text"
        name="email"
        placeholder="Search by Email"
        onChange={handleSearch}
      />
      <input
        className={styles.searchInput}
        type="text"
        name="phone"
        placeholder="Search by Phone"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
