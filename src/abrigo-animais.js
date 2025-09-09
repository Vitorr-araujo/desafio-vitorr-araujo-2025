class AbrigoAnimais {
  constructor() {
    this.animais = [
      { nome: 'Rex', especie: 'cão', brinquedos: ['RATO', 'BOLA']},
      { nome: 'Mimi', especie: 'gato', brinquedos: ['BOLA','LASER']},
      { nome: 'Fofo', especie: 'gato', brinquedos: ['BOLA','RATO','LASER']},
      { nome: 'Zero', especie: 'gato', brinquedos: ['RATO','BOLA']},
      { nome: 'Bola', especie: 'cão', brinquedos: ['CAIXA','NOVELO']},
      { nome: 'Bebe', especie: 'cão', brinquedos: ['LASER','RATO','BOLA']},
      { nome: 'Loco', especie: 'jabuti', brinquedos: ['SKATE','RATO']}
    ];
  }

  _verificasequencia (brinquedosAnimal, brinquedosPessoa) {
    let marcador = 0;
    
    for (const brinquedoDaPessoa of brinquedosPessoa){
      if (brinquedoDaPessoa === brinquedosAnimal[marcador]){
        marcador++;
      }
    }
    return marcador === brinquedosAnimal.length;
  }


  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const listaBrinquedoP1 = brinquedosPessoa1.split(',');
    const listaBrinquedoP2 = brinquedosPessoa2.split(',');    
    const listaAnimaisConsiderados = ordemAnimais.split(',');
    
    for (const nomeAnimal of listaAnimaisConsiderados){
      const animalExiste = this.animais.find(a => a.nome === nomeAnimal);
      if (animalExiste === undefined){
        return { erro : 'Animal inválido' };
      }
    }    
    
    let descisoesIniciais = [];
    for (const nomeAnimal of listaAnimaisConsiderados) {
      const animail = this.animais.find(a => a.nome === nomeAnimal);
      let pessoa1Apta = false;
      let pessoa2Apta = false;
      
      if (animal.nome === 'Loco'){
        pessoa1Apta = animal.brinquedos.every(b => listaBrinquedoP1.includes(b));
        pessoa2Apta = animal.brinquedos.every(b => listaBrinquedoP2.includes(b));
      } else {
      pessoa1Apta = this._verificasequencia(animal.brinquedos, listaBrinquedoP1);
      pessoa2Apta = this._verificasequencia(animal.brinquedos, listaBrinquedoP2);  
      }

      let destino;
      if (pessoa1Apta && !pessoa2Apta){
        destino = 'pessoa 1';
      } else if (pessoa2Apta && !pessoa1Apta) {
        destino = 'pessoa 2';
      } else {
        destino = 'abrigo';
      }
      descisoesIniciais.push({nome: nomeAnimal, destino: destino});
    }

    let animaisPessoa1 = 0, gatosPessoa1 = 0;
    let animaisPessoa2 = 0, gatosPessoa2 = 0;

    for (const decisao of descisoesIniciais){
      if (decisao.destino === 'pessoa 1'){
        animaisPessoa1++;
        if (decisao.destino === 'gato'){
          gatosPessoa1++;
        } else if (decisao.destino === 'pessoa 2') {
          animaisPessoa2++;
          if (decisao.especie === 'gato'){
            gatosPessoa2++;
          }
        }        
      }
    }

    for (const decisao of descisoesIniciais) {
      if (decisao.nome === 'Loco'){
        if (decisao.destino === 'pessoa 1' && animaisPessoa1 < 2){
          decisao.destino = 'abrigo';
        }
        if (decisao.destino === 'pessoa 2' && animaisPessoa2 < 2){
          decisao.destino = 'abrigo';
        }
      }
      if (decisao.especie === 'gato'){
        if (decisao.destino === 'pessoa 1' && gatosPessoa1 > 1){
          decisao.destino = 'abrigo'
        }
        if (decisao.destino === 'pessoa 2' && gatosPessoa2 > 1){
          decisao.destino = 'abrigo'
        }
      }
    }

    const listaFinal = descisoesIniciais
      .sort ((a, b) => a.nome.localCompare(b.nome))
      .map (d => '${d.nome} - ${d.destino}');
    return { lista: listaFinal };
  }
}

export { AbrigoAnimais as AbrigoAnimais };
