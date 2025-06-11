function adicionar_tarefa() {

    const lista = document.getElementById('lista-de-tarefas');
    const input = document.getElementById('nova-tarefa');
    const novaTarefaInput = document.getElementById("nova-tarefa").value;
    const novaTarefa = novaTarefaInput.trim();
    const li = document.createElement('li');
    const btn = document.createElement('button');

    li.textContent = novaTarefa;

    btn.textContent = "Remover";
    btn.classList.add('secondary');
    btn.onclick = function() {
        li.remove();
    }

    lista.prepend(li);

    li.appendChild(btn);

    input.value = "";
}
