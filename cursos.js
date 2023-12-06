var cursos = []; 
document.addEventListener('DOMContentLoaded', function () {
    abrirCursos();
});

function inserirCurso() {
    var nomeCurso = document.getElementById('nomeCurso').value;
    var precoCurso = document.getElementById('precoCurso').value;
    var duracaoCurso = document.getElementById('duracaoCurso').value;
    var professorCurso = document.getElementById('professorCurso').value;
    var descricaoCurso = document.getElementById('descricaoCurso').value;

    var curso = {
        nome: nomeCurso,
        preco: precoCurso,
        duracao: duracaoCurso,
        professor: professorCurso,
        descricao: descricaoCurso
    };

    cursos.push(curso);

    limparCampos();

    listarCursos();
}

function listarCursos() {
    var tabelaCursos = document.getElementById('tabelaCursos');
    tabelaCursos.innerHTML = '';

    var cabecalho = tabelaCursos.insertRow();
    cabecalho.insertCell(0).textContent = 'Nome do Curso';
    cabecalho.insertCell(1).textContent = 'Preço';
    cabecalho.insertCell(2).textContent = 'Tempo de Duração';
    cabecalho.insertCell(3).textContent = 'Nome do Professor';
    cabecalho.insertCell(4).textContent = 'Descrição';
    cabecalho.insertCell(5).textContent = 'Ação'; 

    for (var i = 0; i < cursos.length; i++) {
        var linha = tabelaCursos.insertRow();
        linha.insertCell(0).textContent = cursos[i].nome;
        linha.insertCell(1).textContent = cursos[i].preco;
        linha.insertCell(2).textContent = cursos[i].duracao;
        linha.insertCell(3).textContent = cursos[i].professor;
        linha.insertCell(4).textContent = cursos[i].descricao;

        var cellAcao = linha.insertCell(5);
        var btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.addEventListener('click', criarFuncaoExcluir(i));
        cellAcao.appendChild(btnExcluir);
    }
}

function criarFuncaoExcluir(indice) {
    return function () {
        excluirCurso(indice);
    };
}

function excluirCurso(indice) {
    cursos.splice(indice, 1);
    listarCursos();
}

function limparCampos() {
    document.getElementById('nomeCurso').value = '';
    document.getElementById('precoCurso').value = '';
    document.getElementById('duracaoCurso').value = '';
    document.getElementById('professorCurso').value = '';
    document.getElementById('descricaoCurso').value = '';
}

function salvarCursos() {
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

function abrirCursos() {
    var cursosSalvos = localStorage.getItem('cursos');
    if (cursosSalvos) {
        cursos = JSON.parse(cursosSalvos);
        listarCursos();
    }
}

