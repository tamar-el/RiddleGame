// The Player class. Export it as the default export.
//
// Properties:
// - name
// - times (an array that holds the time it took to solve each riddle)
//
// Methods:
// - recordTime(start, end)
//   - calculate the duration (end - start) and add it to the times array
// - showStats()
//   - show the total time and the average time per riddle
class Player {
    constructor(name) {
        this.name = name;
        this.times = [];
    }
    recordTime(start, end) {
        this.times.push(end - start);
    }
    showStats() {
        let totalTime = 0;
        this.times.forEach(x => totalTime += x);
        let avgTime = this.times.length > 0
            ? totalTime / this.times.length
            : 0;

        console.log("Total time:", totalTime);
        console.log("Average time:", avgTime);
    }

}
export default Player;

