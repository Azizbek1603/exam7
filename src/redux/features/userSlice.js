import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: [], 
    isLoading: false,
    error: false,
    message: null,
    success: false
}

const fetchUsers = createAsyncThunk(
    "fetch/users", 
    async  (data, {rejectWithValue}) => {
        try{
            const response = await fetch("https://randomuser.me/api/?results=5")
            return response.json()
        }
        catch(error){
            rejectWithValue(error);
        }
    }
)

const userlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        changeUser: (state, action) => {
            state.name = action.name;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false,
            state.data = action.payload,
            state.success = true,
            state.message = "Users datas are fetched"
        }),
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false,
            state.error = true,
            state.message = "Datas aren't fetched"
        })
    }
})
export { fetchUsers }
export default userlice.reducer;