import React from 'react';

const Controls = React.createClass({

    onStatusChange(newStatus){
        return ()=>{
            this.props.onStatusChange(newStatus) // see parent fn in Countdown
        }
    },

    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },

    render() {
        return (
            <div className="controls">
                {this.renderStartStopButton()}
                <button className="button alert hollow"
                        onClick={this.onStatusChange('stopped')}>
                    Clear
                </button>
            </div>
        );
    },

    renderStartStopButton () {
        var {countdownStatus} = this.props;

        if (countdownStatus === 'started'){
            return (
                <button className="button secondary"
                        onClick={this.onStatusChange('paused')}>
                    Pause
                </button>
            )
        //} else if (countdownStatus === 'paused') {
        } else  {
            return (
                <button className="button primary"
                        onClick={this.onStatusChange('started')}>
                    Start
                </button>
            )
        }
    }


});

module.exports = Controls;

