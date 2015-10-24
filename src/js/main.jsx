var Vehicle = React.createClass({
    getVehicleType: function() {
        return this.props.getVehicleType ? this.props.getVehicleType() : "Vehicle";
    },

    handleClick: function(e) {
        console.log("Engine started");
        if(this.props.handleClick) {
            this.props.handleClick()
        }
    },

    render: function() {
        return (
            <div>
                <h1>I'm a {this.getVehicleType()}</h1>
                <button onClick={this.handleClick}>Start</button>
            </div>
        );
    }
});

var Airplane = React.createClass({
    getVehicleType: function() {
        return this.props.getVehicleType ? this.props.getVehicleType() : "Airplane";
    },

    handleClick: function(e) {
        console.log("Flying!");
    },

    render: function() {
        return (
            <Vehicle
                getVehicleType = {this.getVehicleType}
                handleClick = {this.handleClick} />
        );
    }

});

ReactDOM.render(<Airplane  />, document.getElementById('airplane'));
ReactDOM.render(<Vehicle  />, document.getElementById('vehicle'));

