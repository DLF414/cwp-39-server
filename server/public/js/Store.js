let initRoutes = apiCastFunctions.getRoutes();
const store = Redux.createStore(reducer, {
  routes: initRoutes,
  links: [
    { title: "All" },
    { title: "Bike" },
    { title: "Foot" },
    { title: "Car" },
    { title: "Bus" }
  ],
  activeLink: { title: "All" }
});

const transportsVariants = ["bike", "foot", "car", "bus"];
const newRoute = {
  name: "",
  time: 0,
  from: "",
  to: "",
  id: -1,
  transport: transportsVariants[0]
};

// const action = type => store.dispatch({type})
