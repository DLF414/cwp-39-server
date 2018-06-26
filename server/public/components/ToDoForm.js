class ToDoForm extends React.Component {
  constructor(props) {
    super(props);

    this._save = this._save.bind(this);
  }

  render() {
    return (
      <div className="todo__form">
        <EditRouteComponent
          route={newRoute}
          className="todo__text-input"
          placeholder="I need to do..."
          onSave={this._save}
        />
      </div>
    );
  }

  _save(obj) {
    this.props.addItem(obj);
  }
}
