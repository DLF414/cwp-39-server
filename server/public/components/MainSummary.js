class MainSummary extends React.Component {
  render() {
    let summaryTime = 0;
    let transports = "";
    function addTransport(transport) {
      if (transports.indexOf(transport) < 0) {
        if (transports.length > 0) {
          transports += ", ";
        }
        transports += transport;
      }
    }
    for (let i = 0; i < this.props.routes.length; i++) {
      const currentRoute = this.props.routes[i];
      summaryTime += Number(currentRoute.time);
      addTransport(currentRoute.transport);
    }

    return (
      <div className="summary-info">
        <span className="summary-info__remains">
          Summary time: {summaryTime}
        </span>
        {" || "}
        <span className="summary-info__remains">
          Using transports: {transports}
        </span>
        {" || "}
        <span className="summary-info__remains">
          Routes count: {this.props.routes.length}
        </span>
      </div>
    );
  }
}
