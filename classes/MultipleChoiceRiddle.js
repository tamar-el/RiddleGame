import Riddle from "./Riddle.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();
class MultipleChoiceRiddle extends Riddle {
    constructor(details) {
        super(
            details.id,
            details.name,
            details.taskDescription,
            details.correctAnswer
        );
        this.choices = details.choices;
    }
    ask() {
        let answer;
        do {
            console.log(this.name);
            console.log(this.taskDescription);
            console.log("choose the correct answer:");
            this.choices.forEach((choice, index) => console.log(index + 1, ") ", choice));
            answer = prompt("Your answer:");
        } while (this.choices[Number(answer) - 1] !== this.correctAnswer)
        return true;
    }

}
export default MultipleChoiceRiddle;