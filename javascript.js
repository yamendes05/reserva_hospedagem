// Função para obter os parâmetros da URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        nome: params.get("hotel"),  // Parâmetro correto para o nome do hotel
        local: params.get("local"),
        cama: params.get("camas"),
        banheiro: params.get("banheiros"),
    };
}

// Exibir as informações do hotel na página
document.addEventListener("DOMContentLoaded", function () {
    const hotelInfo = getQueryParams();
    document.getElementById("hotel-nome").textContent = hotelInfo.nome;
    document.getElementById("hotel-local").textContent = hotelInfo.local;
    document.getElementById("hotel-cama").textContent = `Cama(s): ${hotelInfo.cama}`;
    document.getElementById("hotel-banheiro").textContent = `Banheiro(s): ${hotelInfo.banheiro}`;
});

// Redirecionar para a página de confirmação
function confirmarReserva(event) {
    event.preventDefault(); // Impede o envio do formulário
    window.location.href = "confirmacao.html"; // Redireciona para a página de confirmação
}

// Redireciona para a página de reserva com os dados do hotel
function reservarHotel(nomeHotel, local, camas, banheiros) {
    // Redireciona para a página de reserva, passando informações via URL
    window.location.href = `reserva.html?hotel=${nomeHotel}&local=${local}&camas=${camas}&banheiros=${banheiros}`;
}
// Função para confirmar a reserva e redirecionar para a página de confirmação
function confirmarReserva(event) {
    // Impede que o formulário seja enviado
    event.preventDefault();

    // Coletando os dados do formulário
    const data = document.getElementById('data').value;
    const hospedes = document.getElementById('hospedes').value;

    // Validando os dados
    if (!data || !hospedes) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Armazenando os dados da reserva (se necessário)
    localStorage.setItem('reservaData', data);
    localStorage.setItem('reservaHospedes', hospedes);

    // Redirecionando para a página de confirmação
    window.location.href = "confirmacao.html";  // Redireciona para a página confirmacao.html
}
