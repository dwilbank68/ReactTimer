import React from 'react';
import Clock from 'Clock';
//import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

const Timer = React.createClass({

    componentDidUpdate(prevProps, prevState, prevContext) {
        if (this.state.timerStatus !== prevState.timerStatus){
            switch(this.state.timerStatus){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({ count:0 });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    },


    getInitialState() {
        return {
            count: 0,
            timerStatus: 'stopped'
        };
    },

    handleSetCountdown(seconds){
        this.setState({
            //count: seconds,
            timerStatus: 'started'
        });
    },

    handleStatusChange(newStatus){
        this.setState({
            timerStatus:newStatus
        });
    },

    render() {
        var {count, timerStatus} = this.state;

        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Controls   countdownStatus={timerStatus}
                            onStatusChange={this.handleStatusChange}/>
            </div>
        );
    },

    startTimer(){
        this.timer = setInterval(()=>{
            var newCount = this.state.count + 1;
            this.setState({
                count:newCount >= 0 ? newCount : 0
            });
        },1000);
    }
});

export default Timer;
