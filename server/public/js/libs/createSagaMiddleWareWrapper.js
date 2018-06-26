const createSagaMiddleware = function() {
  function run(parm) {
    console.log("sagas middleware runned with parms:");
    console.log(parm);
  }
  return { run };
};
