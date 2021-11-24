const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
    event.preventDefault();

    const gender = getSelectedValue('gender');
    const age = getInputNumberValue('age');
    const height = getInputNumberValue('height');
    const weight = getInputNumberValue('weight');
    const imc = calculaIMC(height, weight).toPrecision(3    );

    const resultIMC = `
    <p>Your Body Mass Index is ${imc}.</p>
`;

    const result = document.getElementById('result-content');
    result.innerHTML = resultIMC;
}



function calculaIMC(height, weight) {
    return (weight / height / height) * 10000;
}

function getSelectedValue(id) {
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}
