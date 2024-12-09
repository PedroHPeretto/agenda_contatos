const form = document.getElementById('form')
const nomes = []
const telefones = []

let linhas = ''

form.addEventListener('submit', function(event) {
    event.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    const inputNome = document.getElementById('inputNome')
    const inputTelefone = document.getElementById('inputTelefone')

    if(nomes.includes(inputNome.value) || telefones.includes(inputTelefone.value)) {
        alert(`Contato já existente`)
    } else {
        nomes.push(inputNome.value)
        telefones.push(inputTelefone.value)

        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputTelefone.value}</td>`
        linha += '</tr>'

        linhas += linha
    }

    inputNome.value = ''
    inputTelefone.value = ''


}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}