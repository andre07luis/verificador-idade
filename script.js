function verificar() {
    var anonasc = document.getElementById('inpnum')
    var msg = document.getElementById('mensagem')
    var data = new Date()
    var ano = data.getFullYear()
    if (anonasc.value.length == 0 || Number(anonasc.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('inpsex')
        var idade = ano - Number(anonasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.getAttribute('id','foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src','Imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src','Imagens/foto-jovem-m.png')
            } else if (idade < 55) {
                img.setAttribute('src','Imagens/foto-adulto-m.png')
            } else {
                img.setAttribute('src','Imagens/foto-idoso-m.png')
            }
        } else if (sexo[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src','Imagens/foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src','Imagens/foto-jovem-f.png')
            } else if (idade < 55) {
                img.setAttribute('src','Imagens/foto-adulto-f.png')
            } else {
                img.setAttribute('src','Imagens/foto-idoso-f.png')
            }
        }
        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        msg.appendChild(img)
    }
}