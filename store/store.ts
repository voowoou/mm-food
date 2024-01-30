import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// createStore создает стор, хранящий стейт приложения
// applyMiddleware позволяет подключать миддлвары, нужные для выполнения асинхронных действий
// thunk — миддлвар, нужный для ассинхронных действий
// rootReducer — комбинация редюсеров, управляющих своей частью приложения
// в createStore передается корневой редюсер и применяется миддлвар thunk
