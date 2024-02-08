import { Dispatch } from 'react';
import { ActionTypes } from './inputActions'; // нужно создать аутпут экшены

const fetchRecipesFromApi = filters => {};

// Определение асинхронного экшена
// Благодаря Thunk этот экшен возвращает функцию (асинхронную)
export const fetchRecipes = filters => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetchRecipesFromApi(filters);
            dispatch({
                type: ActionTypes.SET_RECIPES,
                payload: response.data,
            });
        } catch (error) {}
    };
};
