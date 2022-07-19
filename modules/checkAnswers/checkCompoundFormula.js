const checkCompoundFormula = (answer, answerSelector, userAnswerSelector) => {
    // Display the answer to the user
    answerSelector.innerHTML = "";
    answerSelector.append(answer);

    // Get the user's formula from the input
    let userAnswer = userAnswerSelector.innerHTML;

    //Check the user's answer and change styles based on correctness
    if (userAnswer == answer.innerHTML) {
        userAnswerSelector.style.backgroundColor = 'lightgreen';
        userAnswerSelector.style.color = 'green';
    } else {
        userAnswerSelector.style.backgroundColor = 'yellow';
        userAnswerSelector.style.color = 'red';
    }
}

export default checkCompoundFormula;