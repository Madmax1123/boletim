class NegociacoesView {

    constructor(elemento) {
        
        this._elemento = elemento;
    }
    
    _template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>QUESTÕES</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                    <th>Aprovado ou reprovado</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.negociacoes.map(n => {
                    
                    return `
                        <tr>
                            <td class="n_nome">${n.nome}
                            <td class="n_questoes">${n.questoes}</td>
                            <td class="n_valor">${n.valor}</td>
                            <td class="n_volume">${n.volume}</td>
                            <td class="apvOuRpv">Aprovado</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
        
            <tfoot>
            </tfoot>
        </table>
        `;
    }

    update(model) {

        this._elemento.innerHTML = this._template(model);
    }
}
