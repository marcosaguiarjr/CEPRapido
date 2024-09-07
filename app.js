function buscarCep() {
    const cep = document.getElementById('cep').value;

    // Valida se o CEP contém 8 dígitos
    if (cep.length !== 8 || isNaN(cep)) {
        alert('Por favor, insira um CEP válido com 8 números.');
        return;
    }

    // URL da API
    const url = `https://brasilapi.com.br/api/cep/v2/${cep}`;

    // Faz a requisição à API usando fetch
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar o CEP');
            }
            return response.json();
        })
        .then(data => {
            // Exibe os dados no HTML
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = `
                <h2>Dados do CEP</h2>
                <p><strong>CEP:</strong> ${data.cep}</p>
                <p><strong>Rua:</strong> ${data.street}</p>
                <p><strong>Bairro:</strong> ${data.neighborhood}</p>
                <p><strong>Cidade:</strong> ${data.city}</p>
                <p><strong>Estado:</strong> ${data.state}</p>
            `;
        })
        .catch(error => {
            // Exibe uma mensagem de erro no HTML
            document.getElementById('resultado').innerHTML = '<p style="color:red;">Erro: CEP não encontrado.</p>';
            console.error('Erro:', error);
        });
}
