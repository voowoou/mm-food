// Импорт enum с типами экшенов и интерфейсов экшенов
import {
    ActionTypes,
    SetCuisinesAction,
    SetDietsAction,
    SetIntolerancesAction,
    SetTypeAction,
    SetCaloriesAction,
    SetNutrientsAction,
    SetInstructionsAction,
} from '../actions/inputActions';

// Типизация стейта инпута
interface inputState {
    cuisines: string[];
    diets: string[];
    intolerances: string[];
    type: string[];
    calories: (string | number)[];
    nutrients: (string | number)[];
    instructions: boolean;
}

// Стейт с данными из инпута
const initialState: inputState = {
    cuisines: [],
    diets: [],
    intolerances: [],
    type: [],
    calories: [],
    nutrients: [],
    instructions: true,
};

// Типизация для экшена в виде объеденения всех интерфейсов экшенов
type Action =
    | SetCuisinesAction
    | SetDietsAction
    | SetIntolerancesAction
    | SetTypeAction
    | SetCaloriesAction
    | SetNutrientsAction
    | SetInstructionsAction;

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
        case ActionTypes.SET_TYPE:
            return {
                ...state,
                type: action.payload,
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
        case ActionTypes.SET_INSTRUCTIONS:
            return {
                ...state,
                instructions: action.payload,
            };
        default:
            return state;
    }
};

export default inputReducer;
