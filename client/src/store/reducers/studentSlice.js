import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentData : null,
}

export const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers:{

    }
})


export default studentSlice.reducer