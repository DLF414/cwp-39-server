class ToDoList extends React.Component {
  render() {
    const items = this.props.routes.map(route => {
      return (
        <RouteLine
          key={route.id}
          route={route}
          toggleItem={this.props.toggleItem}
          removeItem={this.props.removeItem}
          updateItem={this.props.updateItem}
        />
      );
    });

    return <div className="todo__list">{items}</div>;
  }
}
