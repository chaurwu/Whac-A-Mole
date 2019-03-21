import { types } from 'mobx-state-tree';

// const Mole = types
//     .model({
//         out: types.boolean
//     })

export const Game = types
    .model({
        score: 0,
        playing: false,
        timeLeft: 0,
        // lastActiveMole: 0,
        activeMole: 0,
        timingHandle: 0,
        moleActionHandle: 0,
        moles: types.optional(types.array(types.boolean), [false, false, false, false, false])
        // moles: types.optional(types.array(Mole), [])
    })
    .actions(self => ({
        popMole() {
            let moleToPop = self.activeMole;
            while (moleToPop === self.activeMole) {
                moleToPop = Math.ceil(Math.random() * 5);
            }
            // self.lastActiveMole = self.activeMole;
            self.moles[self.activeMole - 1] = false;
            self.moles[moleToPop - 1] = true; 
            self.activeMole = moleToPop;
            console.log(moleToPop);
        },
        decrementTime() {
            if (self.timeLeft <= 1) {
                self.stopGame();
            } else {
                self.timeLeft = self.timeLeft - 1;
            }
        },
        startNewGame() {
            self.score = 0;
            self.timeLeft = 30;
            self.playing = true;
            self.moles = [false, false, false, false, false];
            self.timingHandle = setInterval(() => { self.decrementTime(); }, 1000); 
            self.moleActionHandle = setInterval(() => { self.popMole(); }, 2000); 
        },
        stopGame() {
            self.playing = false;
            self.timeLeft = 0;
            clearInterval(self.timingHandle);
            clearInterval(self.moleActionHandle);
        }
    }))