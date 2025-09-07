class AbrigoAnimais {
  constructor() {
    this.animais = [
      {
      nome: 'Rex',
      especie: 'cão',
      brinquedos: ['RATO', 'BOLA']
      }
      {
      nome: 'Mimi',
      especie: 'gato',
      brinquedos: ['BOLA','LASER']
      }
      {
      nome: 'Fofo',
      especie: 'gato',
      brinquedos: ['BOLA','RATO','LASER']
      }
      {
      nome: 'Zero',
      especie: 'gato',
      brinquedos: ['RATO','BOLA']
      }
      {
      nome: 'Bola',
      especie: 'cão',
      brinquedos: ['CAIXA','NOVELO']
      }
      {
      nome: 'Bebe',
      especie: 'cão',
      brinquedos: ['LASER','RATO','BOLA']
      }
      {
      nome: 'Loco',
      especie: 'jabuti',
      brinquedos: ['SKATE','RATO']
      }
    ]
  }


  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const listaBrinquedoP1 = brinquedosPessoa1.split(',');
    const listaBrinquedoP2 = brinquedosPessoa2.split(',');    
    const listaAnimaisConsiderados = ordemAnimais.split(',');
  
  }
}

export { AbrigoAnimais as AbrigoAnimais };
