import { createSlice } from '@reduxjs/toolkit'

const panelState = {
    bg: "#471b44"
}

export const panelSlice = createSlice({
    name: 'panel',
    initialState: panelState,
    reducers: {
        changePanel: (state, action) => {
            return {
                ...state,
                bg: action.payload
            }
        }
    }
})

export const {changePanel} = panelSlice.actions

