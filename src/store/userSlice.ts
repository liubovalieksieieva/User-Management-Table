import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../types/userTypes";
import { fetchUsers as fetchUsersAPI } from "../api/userAPI";

interface UsersState {
  users: User[];
  filteredUsers: User[];
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const users = await fetchUsersAPI();
  return users;
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    filterUsers: (
      state,
      action: PayloadAction<{ field: keyof User; value: string }>
    ) => {
      const { field, value } = action.payload;
      state.filteredUsers = state.users.filter((user) => {
        const userFieldValue = user[field];

        if (typeof userFieldValue === "string") {
          return userFieldValue.toLowerCase().includes(value.toLowerCase());
        }

        return false;
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        console.log("Fetched users:", action.payload);
        http: state.users = action.payload;
        state.filteredUsers = action.payload;
      }
    );
  },
});

export const { filterUsers } = userSlice.actions;

export default userSlice.reducer;
