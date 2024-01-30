import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import outputReducer from './outputReducers';

const rootReducer = combineReducers({
    input: inputReducer,
    output: outputReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

// combineReducer — функция, "сшивающая" разные редюсеры в один
// ReturnType — утилита, использующаяся для извлечения типа ф-ции rootReducer
// export type RootState — создание нового типа, типа состояния, которое управляется в рут редюсере
