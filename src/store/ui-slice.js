import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name : "ui",
    initialState : {
        notification : null
    },
    reducers : {
        showNotification : (state, actions) => {
            state.notification = {
                msg : actions.payload.msg,
                type : actions.payload.type,
                open : actions.payload.open
            }
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice; 