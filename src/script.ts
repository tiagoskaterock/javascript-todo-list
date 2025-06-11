function adicionar_tarefa(): void {

    const lista = document.getElementById('lista-de-tarefas') as HTMLUListElement;
    const input = document.getElementById('nova-tarefa') as HTMLInputElement;
    
    const novaTarefa = input.value.trim();

    if (novaTarefa === "") {
        alert("Digite uma tarefa.");
        return;
    }

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
    input.focus();
}
