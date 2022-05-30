import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counterSlice'
import pluseReducer from './pluseslice'

const store = configureStore({
    reducer: {
        counterstate: counterReducer,
        pluse: pluseReducer
    }
})

export default store;
































// import { configureStore } from '@reduxjs/toolkit'

// import counterReducer from './counterSlice'
// import pluseReducer from './pluseslice'

// const store = configureStore({
//     reducer: {
//         counterstate: counterReducer,
//         pluse: pluseReducer
//     }
// })

// export default store;