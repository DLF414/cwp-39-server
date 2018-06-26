const call = ReduxSaga.effects.call;
const put = ReduxSaga.effects.put;
const take = ReduxSaga.effects.take;
const fork = ReduxSaga.effects.fork;
const takeEvery = ReduxSaga.effects.takeEvery;
const actionChannel = ReduxSaga.effects.actionChannel;
const select = ReduxSaga.effects.select;
const spawn = ReduxSaga.effects.spawn;

const sagas = (function() {
  function* getRoutesSaga() {
    const routes = yield takeEvery(apiCastFunctions.getRoutes);
    return routes;
  }
  function* addRouteSaga(obj) {
    const routes = yield put(apiCastFunctions.addRoute, obj);
    return routes;
  }

  function* deleteRouteSaga(id) {
    const routes = yield put(apiCastFunctions.removeRoute, id);
    return routes;
  }

  function* updateRouteSaga(obj) {
    const routes = yield put(apiCastFunctions.updateRoute, ob.id, obj);
    return routes;
  }

  return { getRoutesSaga, addRouteSaga, deleteRouteSaga, updateRouteSaga };
})();

const rootReducer = reducer;