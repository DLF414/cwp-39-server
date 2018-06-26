class MainComponent extends React.Component {
  render() {
    return (
      <div className="todo">
        <div className="todo__title">CWP39</div>
        <Nav
          links={this.props.links}
          activeLink={this.props.activeLink}
          navigate={this.props.navigate}
        />
        <MainSummary routes={this.props.routes} />
        <ToDoList
          routes={this.props.routes}
          toggleItem={this.props.toggleItem}
          toggleAll={this._toggleAll}
          removeItem={this.props.removeItem}
          updateItem={this.props.updateItem}
        />
        <button onClick={this.props.restore}> Restore </button>
        <ToDoForm addItem={this.props.addItem} />
      </div>
    );
  }
}
