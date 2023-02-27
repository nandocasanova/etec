class criaAvaliacao  {
    static dom(obj) {
        const { nomeobj, descricaoobj, imagem } = obj

        const avaliacao = document.querySelector('.avaliacao')
        const card = document.createElement('div')
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        const nome = document.createElement('span')
        const descricao = document.createElement('span')

        avaliacao.appendChild(card)
        card.appendChild(figure)
        figure.appendChild(img)
        card.appendChild(nome)
        card.appendChild(descricao)

        nome.innerText = nomeobj
        descricao.innerText = descricaoobj

        img.setAttribute('src', imagem)

    }
}