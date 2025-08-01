// Função para extrair parâmetros da URL
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        employeeId: params.get('employeeId')
    };
}

// Função para carregar informações do funcionário
async function loadEmployeeInfo() {
    const { employeeId } = getUrlParams();
    const employeeInfoDiv = document.getElementById('employee-info');
    
    if (!employeeId) {
        employeeInfoDiv.innerHTML = '<p class="error-message">ID do funcionário não encontrado.</p>';
        return;
    }
    
    try {
        const response = await fetch(`/api/employees/${employeeId}/details`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        employeeInfoDiv.innerHTML = `
            <div class="employee-display">
                <h3>Funcionário Selecionado</h3>
                <p><strong>ID:</strong> ${data.employee.id}</p>
                <p><strong>Nome:</strong> ${data.employee.name}</p>
                <p><strong>Email:</strong> ${data.employee.email}</p>
                <p><strong>Cargo:</strong> ${data.employee.role}</p>
                <p><strong>Empresa:</strong> ${data.employee.company}</p>
                <p><strong>Projeto Atual:</strong> ${data.project.name}</p>
                <p><strong>Tipo do Projeto:</strong> ${data.project.type}</p>
                <p><strong>SOW:</strong> ${data.project.sow}</p>
            </div>
        `;
    } catch (error) {
        console.error('Erro ao carregar informações do funcionário:', error);
        employeeInfoDiv.innerHTML = `
            <div class="employee-display">
                <h3>Erro ao carregar informações</h3>
                <p class="error-message">Não foi possível carregar as informações do funcionário. Tente novamente.</p>
            </div>
        `;
    }
}

// Função para lidar com o envio do formulário
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Obter dados do formulário
    const exitDate = document.getElementById('exit-date').value;
    const exitReason = document.getElementById('exit-reason').value;
    const { employeeId } = getUrlParams();
    
    // Validar se todos os campos estão preenchidos
    if (!exitDate || !exitReason || !employeeId) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Construir URL para a página de summary com os parâmetros
    const summaryUrl = `/summary?employeeId=${encodeURIComponent(employeeId)}&exitDate=${encodeURIComponent(exitDate)}&reason=${encodeURIComponent(exitReason)}`;
    
    // Redirecionar para a página de summary
    window.location.href = summaryUrl;
}

// Função para lidar com o botão voltar
function handleBackButton() {
    window.location.href = '/select-employee';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Carregar informações do funcionário quando a página carrega
    loadEmployeeInfo();
    
    // Event listener para o formulário
    const form = document.getElementById('exit-form');
    form.addEventListener('submit', handleFormSubmit);
    
    // Event listener para o botão voltar
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', handleBackButton);
});
