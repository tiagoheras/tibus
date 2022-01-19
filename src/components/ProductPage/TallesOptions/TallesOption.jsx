import React from 'react';

class TallesOption extends React.Component {
    render() {
        return (
                <option name="talles" value={this.props.talle}>{this.props.talle} ({this.props.cantidad} disponible)</option>
        )
    }

}

export default TallesOption;