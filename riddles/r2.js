// Riddle number 2.
// Export a riddle object as the default export, with these properties:
// - id (number)
// - name (string)
// - taskDescription (string, the riddle text shown to the player)
// - correctAnswer (string)
export default {
  id: 2,
  name: "Easy Math",
  taskDescription: "What is 6 * 7?",
  correctAnswer: "42",
  choices:[
    "2",
    "42",
    "9",
    "2"
  ],
  level:"Medium",
  timeLimit: 6,
  hint:"the number is biger then 15"

};