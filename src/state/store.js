import { configureStore} from '@reduxjs/toolkit'
import { panelSlice } from './slice/panelSlice';

const store = configureStore({
    reducer: {
        panel: panelSlice.reducer
    }
})

export default store;