import { createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name: "counter1",
    initialState: 0,
    reducers: {
        incriment: (state) => {
            return state + 1
        },
        decriment: (state, action) => {

            return state - action.payload
        }
    },

})

export const { incriment, decriment } = counterSlice.actions

export default counterSlice.reducer;



















// import { createSlice } from '@reduxjs/toolkit'


// const counterSlice = createSlice({
//     name: "counter1",
//     initialState: 0,
//     reducers: {
//         incriment: (state) => {
//             return state + 1
//         },
//         decriment: (state, action) => {

//             return state - action.payload
//         }
//     },

// })

// export const { incriment, decriment } = counterSlice.actions

// export default counterSlice.reducer;