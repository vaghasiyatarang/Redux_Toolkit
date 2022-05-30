import { createSlice } from "@reduxjs/toolkit";

const pluseSlice = createSlice({
    name: "plusename",
    initialState: 0,
    reducers: {
        plusecount: (state, action) => {
            return state + action.payload
        }
    }
})

export const { plusecount } = pluseSlice.actions

export default pluseSlice.reducer























// import { createSlice } from "@reduxjs/toolkit";

// const pluseSlice = createSlice({
//     name: "plusename",
//     initialState: 0,
//     reducers: {
//         plusecount: (state, action) => {
//             return state + action.payload
//         }
//     }
// })

// export const { plusecount } = pluseSlice.actions

// export default pluseSlice.reducer