// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt('Qual a altura do retângulo?')
  const largura = prompt('Qual a largura do retângulo')
  const area = altura * largura

  console.log(area)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Qual é o ano atual?')
  const anoDeNascimento = prompt('Qual é o ano do seu nascimento')
  const idade = anoAtual - anoDeNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

return peso / (altura * altura)  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Qual é o seu nome?')
  const idade = prompt('Qual é a sua idade')
  const email = prompt('Qual é o seu email')
  const mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`

  console.log(mensagem)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corUm = prompt('Qual é a sua cor favorita?')
  const corDois = prompt('Qual é a sua segunda cor favorita?')
  const corTres = prompt('Qual é a sua terceira cor favorita')
  const coresFavoritas = [corUm, corDois, corTres]

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  return string.toUpperCase()  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroItem = array[0]
  const ultimoItem = array[array.length-1]
  array[0] = ultimoItem
  array[array.length-1] = primeiroItem
  
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Qual é o ano atual?')
  const anoDoNascimento = prompt('Qual é o seu ano de nascimento?')
  const anoEmissaoCarteiraDeIdentidade = prompt('Qual é o ano da emissão da sua carteira de identidade')
  const precisaRenovarMenorIgualVinteAnos = (anoAtual - anoDoNascimento <= 20) && (anoAtual - anoEmissaoCarteiraDeIdentidade >= 5)
  const precisaRenovarCarteiraMaiorQueVinteAnosEMenorIgualCinquentaAnos = (anoAtual - anoDoNascimento > 20 && anoAtual - anoDoNascimento <= 50) && (anoAtual - anoEmissaoCarteiraDeIdentidade >= 10)
  const precisaRenovarCarteiraMaiorQueCinquentaAnos = (anoAtual - anoDoNascimento > 50) && (anoAtual - anoEmissaoCarteiraDeIdentidade >= 15)
  
  console.log(precisaRenovarMenorIgualVinteAnos || precisaRenovarCarteiraMaiorQueVinteAnosEMenorIgualCinquentaAnos || precisaRenovarCarteiraMaiorQueCinquentaAnos)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoBissexto = (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0)

  return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maisDeDezoitoAnos = prompt('Você tem mais de 18 anos de idade?')
  const temEnsinoMedioCompleto = prompt('Você possui ensino médio completo?')
  const temDiponibilidadeDuranteHorariosDoCurso = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  const incricaoValida = (maisDeDezoitoAnos === 'sim' && temEnsinoMedioCompleto === 'sim' && temDiponibilidadeDuranteHorariosDoCurso === 'sim')

  console.log(incricaoValida)
}