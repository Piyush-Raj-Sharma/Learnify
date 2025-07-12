import { configureStore } from '@reduxjs/toolkit'
import { studentSlice } from './reducers/studentSlice'
import { educatorSlice } from './reducers/educatorSlice'


export default configureStore({
    reducer: {
        studentReducer: studentSlice,
        educatorReducer: educatorSlice
    }
})