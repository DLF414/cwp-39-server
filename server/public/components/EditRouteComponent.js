class EditRouteComponent extends React.Component {
  constructor(props) {
    super(props);
    this._save = this._save.bind(this);
    this._onChangeName = this._onChangeName.bind(this);
    this._onChangeFrom = this._onChangeFrom.bind(this);
    this._onChangeTo = this._onChangeTo.bind(this);
    this._onChangeTime = this._onChangeTime.bind(this);
    this._onChangeTransport = this._onChangeTransport.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this.state = props.route;
  }
  render() {
    const transports = transportsVariants;
    const transportsHtml = transports.map(transport => {
      return <option value={transport}>{transport}</option>;
    });
    return (
      <div>
        Name:{" "}
        <input
          className="todo__text todo__text_editing"
          value={this.state.name}
          onChange={this._onChangeName}
          onKeyDown={this._onKeyDown}
        />
        Time:{" "}
        <input
          type="number"
          className="todo__text todo__text_editing"
          value={this.state.time}
          onChange={this._onChangeTime}
          onKeyDown={this._onKeyDown}
        />
        Transport:{" "}
        <select value={this.state.transport} onChange={this._onChangeTransport}>
          {transportsHtml}
        </select>
        From:{" "}
        <input
          className="todo__text todo__text_editing"
          value={this.state.from}
          onChange={this._onChangeFrom}
          onKeyDown={this._onKeyDown}
        />
        To:{" "}
        <input
          className="todo__text todo__text_editing"
          value={this.state.to}
          onChange={this._onChangeTo}
          onKeyDown={this._onKeyDown}
        />
        <div> Press enter to do updates </div>
      </div>
    );
  }

  _save() {
    this.props.onSave(this.state);
    this.setState(newRoute);
  }

  _onChangeName(event) {
    const newObject = this.state;
    newObject.name = event.target.value;
    this.setState(newObject);
  }

  _onChangeFrom(event) {
    const newObject = this.state;
    newObject.from = event.target.value;
    this.setState(newObject);
  }

  _onChangeTo(event) {
    const newObject = this.state;
    newObject.to = event.target.value;
    this.setState(newObject);
  }

  _onChangeTime(event) {
    const newObject = this.state;
    newObject.time = event.target.value;
    this.setState(newObject);
  }

  _onChangeTransport(event) {
    const newObject = this.state;
    newObject.transport = event.target.value;
    this.setState(newObject);
  }

  _onKeyDown(event) {
    if (event.keyCode !== 13) return;
    this._save();
  }
}
