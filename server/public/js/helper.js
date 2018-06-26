function getVisibleroutes(routes, link) {
    if (link.title === 'All') {
      return routes;
    } else {
      return routes.filter(x => x.transport.toLowerCase() == link.title.toLowerCase());
    }
  }
  
  function getRemainsCount(routes) {
    return routes.filter(x => !x.completed).length;
  }
  
  const mapStateToProps = (state) => {
    return {
      routes: getVisibleroutes(state.routes, state.activeLink),
      activeLink: state.activeLink,
      links: state.links
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      removeItem: (id) => {
        dispatch(
          MainActions.remove(id)
        );
      },
  
      addItem: (obj) => {
        dispatch(
          MainActions.add(obj)
        );
      },
  
      updateItem: (id, obj) => {
        dispatch(
          MainActions.update(id, obj)
        );
      },
  
      restore: () => {
        dispatch(
          MainActions.undo()
        );
      },
  
      removeCompleted: () => {
        dispatch(
          MainActions.clear()
        );
      },
  
      navigate: (link) => {
        dispatch(
          NavActions.activate(link)
        );
      }
    };
  };
  