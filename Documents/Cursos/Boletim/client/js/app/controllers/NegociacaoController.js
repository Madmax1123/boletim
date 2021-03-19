class NegociacaoController {

    constructor() {
        
        let p = document.querySelector.bind(document);  
        this._inputQuestoes = p('#questoes');
        this._inputNome = p('#nome');
        this._inputValor = p('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        
        this._negociacoesView = new NegociacoesView(p('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona(event) {
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._negociacoesView.update(this._listaNegociacoes)
        this._limpaFormulario()
        
    }
       
        _criaNegociacao() {
            
            return new Negociacao(
                this._inputNome.value,
                this._inputQuestoes.value,
                this._inputValor.value);
        }
        
        
        _limpaFormulario() {
            
            this._inputNome.value = '';
            this._inputQuestoes.value = 1            
            this._inputValor.value = 0.0
    }
}
