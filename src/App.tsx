import React, { useEffect } from "react";
import { useAppDispatch } from "./store";
import { fetchUsers } from "./store/userSlice";
import UserTable from "./components/UserTable";
import SearchBar from "./components/SearchBar";
import "./App.css";
import "./index.css";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>User Management</h1>
      <SearchBar />
      <UserTable />
    </div>
  );
};

export default App;
