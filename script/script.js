let currentQuestion = getFirstQuestion();

console.log(currentQuestion);
// {
//     "id": "E1",
//     "question": "Jakie jest stolicą Polski?",
//     "options": {
//         "A": "Kraków",
//         "B": "Warszawa",
//         "C": "Gdańsk",
//         "D": "Wrocław"
//     },
//     "correctAnswer": "B"
// }

function getFirstQuestion() {
	const size = easyQuestions.length;
	const randomNumber = Math.floor(Math.random() * size);

	return easyQuestions[randomNumber];
}
