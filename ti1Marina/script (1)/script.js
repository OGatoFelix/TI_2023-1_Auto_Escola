function salvarHorarios() {
    var tabela = document.getElementsByTagName('table')[0];
    var linhas = tabela.rows;
    var horarios = [];

    for (var i = 1; i < linhas.length; i++) {
        var linha = linhas[i];
        var horario = {};

        horario.hora = linha.cells[0].textContent;
        horario.segunda = linha.cells[1].textContent;
        horario.terca = linha.cells[2].textContent;
        horario.quarta = linha.cells[3].textContent;
        horario.quinta = linha.cells[4].textContent;
        horario.sexta = linha.cells[5].textContent;
        horario.sabado = linha.cells[6].textContent;

        horarios.push(horario);
    }

    var jsonHorarios = JSON.stringify(horarios);
    localStorage.setItem('horarios', jsonHorarios);
    alert('Horários salvos com sucesso!');
}

function carregarHorarios() {
    var jsonHorarios = localStorage.getItem('horarios');
    var horarios = JSON.parse(jsonHorarios);

    if (horarios) {
        var tabela = document.getElementsByTagName('table')[0];
        var linhas = tabela.rows;

        for (var i = 1; i < linhas.length; i++) {
            var linha = linhas[i];
            var horario = horarios[i - 1];

            linha.cells[0].textContent = horario.hora;
            linha.cells[1].textContent = horario.segunda;
            linha.cells[2].textContent = horario.terca;
            linha.cells[3].textContent = horario.quarta;
            linha.cells[4].textContent = horario.quinta;
            linha.cells[5].textContent = horario.sexta;
            linha.cells[6].textContent = horario.sabado;
        }

        alert('Horários carregados com sucesso!');
    } else {
        alert('Nenhum horário salvo.');
    }
}
