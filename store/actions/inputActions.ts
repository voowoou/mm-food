// Типы экшенов, определенные с помощью перечисления (enum)
export enum ActionTypes {
    SET_CUISINES = 'SET_CUISINES',
    SET_DIETS = 'SET_DIETS',
    SET_INTOLERANCES = 'SET_INTOLERANCES',
    SET_TYPES = 'SET_TYPES',
    SET_CALORIES = 'SET_CALORIES',
    SET_NUTRIENTS = 'SET_NUTRIENTS',
}

// Интерфейсы для экшенов
export interface SetCuisinesAction {
    type: ActionTypes.SET_CUISINES;
    payload: string[];
}

export interface SetDietsAction {
    type: ActionTypes.SET_DIETS;
    payload: string[];
}

export interface SetIntolerancesAction {
    type: ActionTypes.SET_INTOLERANCES;
    payload: string[];
}

export interface SetTypesAction {
    type: ActionTypes.SET_TYPES;
    payload: string[];
}

export interface SetCaloriesAction {
    type: ActionTypes.SET_CALORIES;
    payload: (string | number)[];
}

export interface SetNutrientsAction {
    type: ActionTypes.SET_NUTRIENTS;
    payload: (string | number)[];
}

// Создатели экшенов
export function setCuisines(cuisines: string[]): SetCuisinesAction {
    return {
        type: ActionTypes.SET_CUISINES,
        payload: cuisines,
    };
}

export function setDiets(diets: string[]): SetDietsAction {
    return {
        type: ActionTypes.SET_DIETS,
        payload: diets,
    };
}

export function setIntolerances(intolerances: string[]): SetIntolerancesAction {
    return {
        type: ActionTypes.SET_INTOLERANCES,
        payload: intolerances,
    };
}

export function setType(type: string[]): SetTypesAction {
    return {
        type: ActionTypes.SET_TYPE,
        payload: type,
    };
}

export function setCalories(calories: (string | number)[]): SetCaloriesAction {
    return {
        type: ActionTypes.SET_CALORIES,
        payload: calories,
    };
}

export function setNutrients(nutrients: (string | number)[]): SetNutrientsAction {
    return {
        type: ActionTypes.SET_NUTRIENTS,
        payload: nutrients,
    };
}
