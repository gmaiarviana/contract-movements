# Roadmap - Employee Exit Process

## ✅ **Fase 1: POC - CONCLUÍDA**
**Objetivo**: Validar fluxo básico de saída de funcionários

**Resultado**: POC funcional com 4 páginas, dados JSON e Docker

---

## 🎯 **Fase 2: MVP (Minimum Viable Product)**
**Objetivo**: Banco de dados real e persistência

**Capacidades:**
- Migração dos 3 JSONs para tabelas PostgreSQL
- Mesmas APIs, nova fonte de dados
- Persistência real das movimentações
- Validações de integridade no backend
- Docker Compose (app + database)
- Estrutura de dados escalável

---

## 🎯 **Fase 3: Autenticação**
**Objetivo**: Login real e controle de acesso

**Capacidades:**
- Sistema de login simples (email/senha)
- Sessão de usuário (JWT ou sessions)
- Middleware de autenticação nas rotas
- Página de login antes do fluxo principal
- Identificação real do líder logado
- Logout funcional

---

## 🎯 **Fase 4: Formulário de Entrada**
**Objetivo**: Processo completo de movimentação

**Capacidades:**
- Nova opção na home: "Entrada de Funcionário"
- Fluxo de entrada: selecionar funcionário disponível → adicionar ao projeto
- Dados específicos do processo de entrada
- Validação de funcionários disponíveis/ocupados
- Interface para ambos os processos (entrada/saída)

---

## 🔮 **Fase 5: Dashboard Administrativo**
**Objetivo**: Visibilidade e controle gerencial

**Capacidades:**
- Perfil de administrador
- Relatório de movimentações mensais
- Histórico completo de entradas/saídas
- Filtros por período, projeto, funcionário
- Exportação de dados (CSV/PDF)
- Métricas básicas (turnover, etc)

---

## 🔮 **Fase 6: Otimização e UX**
**Objetivo**: Interface moderna e performance

**Capacidades:**
- Migration para React.js ou Vue.js
- Design system consistente
- Validações em tempo real
- Interface responsiva
- Otimizações de performance
- Testes automatizadoss