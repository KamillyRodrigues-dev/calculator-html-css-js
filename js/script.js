function insertToDisplay(data){
    document.getElementById('display').value += data
}

function clean(){
    document.getElementById('display').value = ''
}

function back(){
    const display =  document.getElementById('display')
    display.value = display.value.slice(0, -1); // slice corta uma parte de uma string, um caracter
}

function calculate(){
    const display = document.getElementById('display')
    try{
        let expression = display.value.replace(/%/g, '/100'); // g -> global, substitui todas as ocorrencias inves de só a primeira
        display.value = eval(expression);
    } catch{
        display.value = "Error"
    }
}

