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

 