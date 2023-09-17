// function duplicate(input: string | number) {
//     if(typeof input === "string") {
//         return input.concat(input);
//     }
//     const text = input.toString();
//     return text.concat();
// }

interface Logeable {
    log: () => void;
}

class Column implements Logeable {
    rebarWeight: number;
    log() {
        console.log(this.rebarWeight);
    }
}

class GlassWindow implements Logeable {
    frameCount: number;
    log() {
        console.log(this.frameCount);
    }
}

function logItems(items: Logeable[]) {
    for(const item of items) {
        item.log();
    }
}

// TELL, DON'T ASK

const column = new Column();
const glassWindow = new GlassWindow();
const allItems = [column, glassWindow];
logItems(allItems);