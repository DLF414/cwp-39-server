class RouteLine extends React.Component {
  constructor(props) {
    super(props);

    this._edit = this._edit.bind(this);
    this._save = this._save.bind(this);
    this._removeItem = this._removeItem.bind(this);

    this.state = { isEditing: false };
  }

  render() {
    const src = "icons/" + this.props.route.transport + ".png";
    const text = this.state.isEditing ? (
      <EditRouteComponent route={this.props.route} onSave={this._save} />
    ) : (
      <span className={"todo__text"} onDoubleClick={this._edit}>
        Name: {this.props.route.name}, time: {this.props.route.time}, From:{" "}
        {this.props.route.from}, To: {this.props.route.to}
      </span>
    );

    return (
      <div className="todo__item">
        <span className="todo__destroy" onClick={this._removeItem}>
          -
        </span>
        <img className="icon-image" src={src} /> {text}
      </div>
    );
  }

  _edit() {
    this.setState({ isEditing: true });
  }

  _save(obj) {
    this.setState({ isEditing: false });
    this.props.updateItem(this.props.route.id, obj);
  }

  _removeItem() {
    this.props.removeItem(this.props.route.id);
  }
}
