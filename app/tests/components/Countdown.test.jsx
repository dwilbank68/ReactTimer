var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import Countdown from 'Countdown';

describe('Countdown', ()=>{
    it('should exist', ()=>{
        expect(Countdown).toExist();
    })


    describe('handleSetCountdown', () => {
        it('should set state to started and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe("started");
            setTimeout(()=>{
                expect(countdown.state.count).toBe(9 );
                done();
            }, 1001)
        });

        it('should not let count be less than zero ', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);
            setTimeout(()=>{
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001)
        });

        it('should pause countdown on paused status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');
            setTimeout(()=>{
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            }, 2001)
        });

        it('should reset count on stopped status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');
            setTimeout(()=>{
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            }, 2001)
        });

    });

})

//describe('render',()=>{
//    it('should render clock to output',()=>{
//        var $el = $(ReactDOM.findDOMNode(clock));
//        var actualText = $el.find('.clock-text').text();
//        expect(actualText).toBe('01:02');
//    })
//})
//
//describe('formatSeconds', ()=>{
//    it('should format seconds', ()=>{
//        var clock = TestUtils.renderIntoDocument(<Clock/>);
//        var seconds = 615;
//        var expected = "10:15";
//        expect(Clock).toExist();
//        var actual = clock.formatSeconds(seconds);
//        expect(actual).toBe(expected);
//    })
//
//    it('should format seconds when min/sec are less than 10', ()=>{
//        var clock = TestUtils.renderIntoDocument(<Clock/>);
//        var seconds = 61 ;
//        var expected = "01:01";
//        expect(Clock).toExist();
//        var actual = clock.formatSeconds(seconds);
//        expect(actual).toBe(expected);
//    })
//})
