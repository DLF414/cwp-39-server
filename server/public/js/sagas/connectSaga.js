const sagaMiddleware = createSagaMiddleware();
const applyMiddleware = Redux.applyMiddleware;
const middlewares = applyMiddleware(sagaMiddleware);
const Store = Redux.createStore(rootReducer);

sagaMiddleware.run(Store);

// next will be using this store in rendering
