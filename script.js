let alunos = JSON.parse(localStorage.getItem("alunos")) || [];

const form = document.getElementById("form-aluno");
const lista = document.getElementById("lista-alunos");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const curso = document.getElementById("curso").value;
    const idade = document.getElementById("idade").value;

    const aluno = {
        nome,
        curso,
        idade
    };

    alunos.push(aluno);
    salvarAlunos();
    renderizarAlunos();
    form.reset();
});

function salvarAlunos() {
    localStorage.setItem("alunos", JSON.stringify(alunos));
}

function renderizarAlunos() {
    lista.innerHTML = "";

    alunos.forEach((aluno, index) => {
        lista.innerHTML += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.curso}</td>
                <td>${aluno.idade}</td>
                <td>
                    <button onclick="removerAluno(${index})">Excluir</button>
                </td>
            </tr>
        `;
    });
}

function removerAluno(index) {
    alunos.splice(index, 1);
    salvarAlunos();
    renderizarAlunos();
}

renderizarAlunos();
