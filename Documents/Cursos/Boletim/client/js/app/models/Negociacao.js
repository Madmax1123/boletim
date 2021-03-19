class Negociacao {

    constructor(nome, questoes, valor) {

        this._nome = nome;
        this._questoes = questoes;
        this._valor = valor;
    }

   get volume() {

        return this._questoes / this._valor;
    }
    
    get nome() {
        return this._nome;
    }
    
    get questoes() {
        return this._questoes;
    }

    get valor() {
        return this._valor;
    }


    
}
