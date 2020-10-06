function criarTarefa() {

    
    const tarefa = document.getElementById("tarefa");
    const diasSemana = document.getElementById("dias-semana");        
    
    if(tarefa.value !== "" ){

        const listaSemanal = document.getElementById(diasSemana.value);
        
        listaSemanal.innerHTML += `<li>${tarefa.value}</li>`
        tarefa.value = ""

    } else{
        alert('Digite uma tarefa!');
    }

}