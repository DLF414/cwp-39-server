const RoutesManagerConstants = {
  ROUTESMANAGER_ADD: "ROUTESMANAGER_ADD",
  ROUTESMANAGER_REMOVE: "ROUTESMANAGER_REMOVE",
  ROUTESMANAGER_UPDATE: "ROUTESMANAGER_UPDATE",
  ROUTESMANAGER_UNDO: "ROUTESMANAGER_UNDO"
};

const NavConstants = {
  NAV_ACTIVATE: "NAV_ACTIVATE"
};

const MainActions = {
  add: function(obj) {
    if (obj.id > 0) {
      return {
        type: RoutesManagerConstants.ROUTESMANAGER_UPDATE,
        data: obj
      };
    } else {
      return {
        type: RoutesManagerConstants.ROUTESMANAGER_ADD,
        data: obj
      };
    }
  },

  remove: function(id) {
    return {
      type: RoutesManagerConstants.ROUTESMANAGER_REMOVE,
      data: id
    };
  },

  update: function(id, obj) {
    return {
      type: RoutesManagerConstants.ROUTESMANAGER_UPDATE,
      data: obj
    };
  },

  undo: function() {
    return {
      type: RoutesManagerConstants.ROUTESMANAGER_UNDO
    };
  }
};

const NavActions = {
  activate: function(link) {
    return {
      type: NavConstants.NAV_ACTIVATE,
      link: link
    };
  }
};

// reducer for active link
function activeLink(state = {}, action) {
  switch (action.type) {
    case NavConstants.NAV_ACTIVATE:
      return action.link;

    default:
      return state;
  }
}

// reducer for links
function links(state = []) {
  return state;
}

// reducer for routes
function routes(state = [], action) {
  switch (action.type) {
    case RoutesManagerConstants.ROUTESMANAGER_ADD:
      const obj = action.data;
      apiCastFunctions.addRoute(obj);
      return apiCastFunctions.getRoutes();

    case RoutesManagerConstants.ROUTESMANAGER_REMOVE:
      const id = action.data;
      apiCastFunctions.removeRoute(id);
      return apiCastFunctions.getRoutes();

    case RoutesManagerConstants.ROUTESMANAGER_UPDATE:
      const toUpdate = action.data;
      apiCastFunctions.updateRoute(toUpdate);
      return apiCastFunctions.getRoutes();

    case RoutesManagerConstants.ROUTESMANAGER_UNDO:
      return apiCastFunctions.getRoutes();

    default:
      return state;
  }
}

const reducer = Redux.combineReducers({
  routes,
  activeLink,
  links
});
