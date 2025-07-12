import { configureStore } from '@reduxjs/toolkit'
import { studentSlice } from './reducers/studentReducer'

export default configureStore({
    reducer: {
        studentReducer: studentSlice,
        educatorReducer: educatorSlice
    }
})