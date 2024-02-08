// Импорт enum с типами экшенов и интерфейсов экшенов
import {
    ActionTypes,
    SetCuisinesAction,
    SetDietsAction,
    SetIntolerancesAction,
    SetTypesAction,
    SetCaloriesAction,
    SetNutrientsAction,
} from '../actions/inputActions';

// Типизация стейта инпута
interface inputState {
    cuisines: string[];
    diets: string[];
    intolerances: string[];
    types: string[];
    calories: (string | number)[];
    nutrients: (string | number)[];
}

// Стейт с данными из инпута
const initialState: inputState = {
    cuisines: [],
    diets: [],
    intolerances: [],
    types: [],
    calories: [],
    nutrients: [],
};

// Типизация для экшена в виде объеденения всех интерфейсов экшенов
type Action =
    | SetCuisinesAction
    | SetDietsAction
    | SetIntolerancesAction
    | SetTypesAction
    | SetCaloriesAction
    | SetNutrientsAction;

// Редюсер для инпута
const inputReducer = (state = initialState, action: Action): inputState => {
    switch (action.type) {
        case ActionTypes.SET_CUISINES:
            return {
                ...state,
                cuisines: action.payload,
            };
        case ActionTypes.SET_DIETS:
            return {
                ...state,
                diets: action.payload,
            };
        case ActionTypes.SET_INTOLERANCES:
            return {
                ...state,
                intolerances: action.payload,
            };
        case ActionTypes.SET_TYPES:
            return {
                ...state,
                types: action.payload,
            };
        case ActionTypes.SET_CALORIES:
            return {
                ...state,
                calories: action.payload,
            };
        case ActionTypes.SET_NUTRIENTS:
            return {
                ...state,
                nutrients: action.payload,
            };
        default:
            return state;
    }
};

export default inputReducer;
