# 🎓 Portal Alumni - IME Júnior

Sistema centralizado para gestão e networking de egressos da instituição. O projeto permite o cadastro de perfis profissionais, visualização de ex-alunos e busca filtrada por curso e ano de formatura.

---

## 🚀 Stack Tecnológica

- **Frontend:** React.js (Vite)
- **Backend:** Node.js (Express)
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma
- **Estilização:** CSS Puro / CSS Modules (Kebab-case)

---

## 📂 Estrutura do Projeto

```text
portal-alumni/
├── client/              # Frontend (React)
│   ├── src/
│   │   ├── components/  # Componentes reutilizáveis
│   │   ├── pages/       # Telas principais
│   │   └── styles/      # Estilos (kebab-case.module.css)
├── server/              # Backend (Node.js)
│   ├── src/
│   │   ├── controllers/ # Lógica de negócio
│   │   ├── routes/      # Definição de endpoints
│   │   └── database/    # Configuração do Prisma
├── .editorconfig        # Padronização de sistema (LF/CRLF)
├── .prettierrc          # Formatação automática de código
└── README.md
```

---

## 📏 Guia de Padronização Técnica

Para garantir a consistência do código entre os desenvolvedores, adotamos os seguintes padrões:

| Categoria     | Item                | Padrão Adotado | Exemplo                |
| :------------ | :------------------ | :------------- | :--------------------- |
| **Código**    | Variáveis e Funções | camelCase      | const listaAlunos = [] |
| **Interface** | Componentes React   | PascalCase     | CardAlumni.jsx         |
| **Estilos**   | Arquivos CSS        | kebab-case     | main-layout.css        |
| **Banco**     | Colunas do Banco    | snake_case     | data_formatura         |
| **Git**       | Mensagens de Commit | Conventional   | feat: adicionar busca  |

---

## 🛠️ Configuração do Ambiente de Desenvolvimento

### 1. Requisitos Obrigatórios (VS Code)

Para que a padronização automática funcione, todos os desenvolvedores devem instalar:

- **Prettier - Code formatter**
- **EditorConfig for VS Code**

> **Importante:** Ative o **"Format on Save"** nas configurações do seu VS Code (`Ctrl + ,`).

### 2. Instalação e Execução Local

**Passo 1: Clonar e configurar Upstream**

```bash
# Clone o SEU fork
git clone https://github.com/fsmith01539/portal-alumni.git
cd portal-alumni

# Configure o repositório original como fonte de atualizações
git remote add upstream https://github.com/fsmith01539/portal-alumni.git
```

**Passo 2: Configurar o Frontend**

```bash
cd client
npm install
npm run dev
```

**Passo 3: Configurar o Backend**

```bash
cd ../server
npm install
# Crie seu arquivo .env baseado no .env.example antes de iniciar
```

---

## 🔄 Fluxo de Colaboração (Fork Workflow)

Este projeto utiliza o modelo de **Forks**. Ao contribuir, siga estes passos:

1. Faça o **Fork** deste repositório para sua conta GitHub.
2. Antes de iniciar qualquer tarefa, atualize sua branch principal com o código mais recente:
   `git pull upstream main`
3. Crie uma branch específica para a sua tarefa: `git checkout -b feat/nome-da-task`.
4. Após finalizar e testar, envie para o **seu fork** e abra um **Pull Request (PR)** para o repositório original.

---

## 🗓️ Cronograma de Sprints (2025/2026)

- **Sprint 1 (24/12 - 31/12):** UI/UX Base, Listagem de Alumni e Filtros.
- **Sprint 2 & 3 (31/12 - 14/01):** API Node.js e Lógica de Cadastro.
- **Sprint 4 (14/01 - 21/01):** Modelagem PostgreSQL e Integração.
- **Sprint 5 & 6 (21/01 - 04/02):** Refinamento, Deploy e QA Final.
- **Entrega Final:** 11/02/2026.

---

## 👥 Equipe

- **Gerente de Projeto & Dev:** José Arthur Ferreira Cardoso
- **Desenvolvedor:** Thiago Domingos Ferreira da Silva
- **Desenvolvedor:** Francisco do Nascimento Miranda

---

_Desenvolvido pela IME Júnior._
