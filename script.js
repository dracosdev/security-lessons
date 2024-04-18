var textoOriginal = [
    "A criptografia de dados é fundamental para garantir a segurança e a privacidade em sistemas de informação. Ela funciona como uma barreira sólida que protege as informações sensíveis de acessos não autorizados, garantindo que apenas indivíduos com as chaves corretas possam acessar ou modificar os dados. Em um mundo onde a quantidade de dados gerados e compartilhados cresce exponencialmente, a criptografia não é apenas uma opção, mas uma necessidade crítica para empresas de todos os tamanhos, especialmente aquelas que lidam com informações confidenciais de clientes, como dados financeiros e pessoais.",
    "Além de proteger contra violações externas, a criptografia também ajuda a estabelecer a confiança entre as partes envolvidas na troca de informações. Isso se torna cada vez mais importante à medida que as regulamentações de proteção de dados, como o GDPR na Europa e a LGPD no Brasil, exigem que as organizações adotem medidas proativas para proteger os dados de seus clientes. A criptografia permite que as organizações cumpram esses requisitos legais e evitem multas significativas, ao mesmo tempo em que fortalecem sua reputação como guardiãs confiáveis das informações de seus usuários."
];

window.onload = function() {
    var caixaTexto = document.getElementById('caixaTexto');
    textoOriginal.forEach(function(paragrafo) {
        var p = document.createElement('p');
        p.className = 'textoCriptografia';
        p.innerText = paragrafo;
        caixaTexto.appendChild(p);
    });
};

function substituirLetras() {
    var input = document.getElementById('inputLetras').value;
    var paragrafos = document.getElementsByClassName('textoCriptografia');

    Array.from(paragrafos).forEach(function(p, index) {
        var texto = textoOriginal[index];
        texto = realizarSubstituicao(texto, input);
        p.innerText = texto;
    });
}

function descriptografarTexto() {
    var input = document.getElementById('inputDescriptografia').value;
    var paragrafos = document.getElementsByClassName('textoCriptografia');

    Array.from(paragrafos).forEach(function(p, index) {
        var texto = p.innerText;
        texto = realizarSubstituicao(texto, input, true);
        p.innerText = texto;
    });
}

function realizarSubstituicao(texto, chave, descriptografar = false) {
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < 5 && i < chave.length; i++) {
        var regexVogais = new RegExp(descriptografar ? chave[i] : vogais[i], 'gi');
        texto = texto.replace(regexVogais, descriptografar ? vogais[i] : chave[i]);
    }
    return texto;
}

function resetarTexto() {
    var paragrafos = document.getElementsByClassName('textoCriptografia');
    Array.from(paragrafos).forEach(function(p, index) {
        p.innerText = textoOriginal[index];
    });
}
