/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var time = 60;
var output;

while(time >= 0) {
    if(time === 50) {
        output = 'Orbiter transfers from ground to internal power';
    }else if(time === 31) {
        output = 'Ground launch sequencer is go for auto sequence start';
    }else if(time === 16) {
        output = 'Activate launch pad sound suppression system';
    }else if(time === 10) {
        output = 'Activate main engine hydrogen burnoff system';
    }else if(time === 6) {
        output = 'Main engine start'; 
    }else if(time === 0) {
        output = 'Solid rocket booster ignition and liftoff!';
    } else {
        output = `T-${time} seconds`;
    }
    time--;
    console.log(output);
}