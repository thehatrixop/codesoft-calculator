document.addEventListener('DOMContentLoaded', () => {
    const disp = document.getElementById('display');
    const answer = document.getElementById('answer');
    const buttons = document.querySelectorAll('button');
    let cinput = '';
    let currentAnswer = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.classList.contains('numbers')) {
                cinput += value;
                disp.textContent = cinput;
            } else if (button.id === 'delete') {
                cinput = cinput.slice(0, -1);
                disp.textContent = cinput;
            } else if (button.id === 'reset') {
                cinput = '';
                currentAnswer = '';
                disp.textContent = '';
                answer.textContent = '';
            } else if (button.id === 'equals') {
                try {
                    currentAnswer = eval(cinput);
                    answer.textContent = currentAnswer;
                } catch (e) {
                    answer.textContent = 'Error';
                }
            } else {
                cinput += value;
                disp.textContent = cinput;
            }
        });
    });
});
