import {configureStore} from '@reduxjs/toolkit';
import loginReducer from '../../features/login/loginSlice';
import registerReducer from '../../features/register/registerSlice';
import scheduleReducer from '../../features/schedule/scheduleSlice';


export const store = configureStore({
    reducer:{
        login: loginReducer,
        register: registerReducer,
        schedule: scheduleReducer,
    }
})