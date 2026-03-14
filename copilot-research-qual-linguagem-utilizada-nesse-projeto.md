# Research: qual linguagem utilizada nesse projeto

*Generated: 3/14/2026, 4:12:57 AM*

---

# Qual linguagem é utilizada nesse projeto?

## Executive Summary

O projeto `skills-create-applications-with-the-copilot-cli` é um exercício educacional da GitHub Skills voltado para o uso do **GitHub Copilot CLI**. A linguagem principal definida para o desenvolvimento da aplicação é **JavaScript (Node.js)**. Isso é evidenciado pela imagem do devcontainer, pelo `package-lock.json` presente na raiz e pelas instruções de instalação do projeto. O arquivo-alvo do exercício é `calculator.js`, um script Node.js.

---

## Linguagem Principal

| Aspecto | Valor |
|---------|-------|
| **Linguagem** | JavaScript |
| **Runtime** | Node.js v22 |
| **Arquivo-alvo** | `calculator.js` |
| **Gerenciador de pacotes** | npm |

---

## Evidências

### 1. Devcontainer usa imagem JavaScript/Node.js

O arquivo `.devcontainer/devcontainer.json` define explicitamente a imagem base:[^1]

```json
"image": "mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm"
```

Isso confirma que o ambiente de desenvolvimento é configurado para **Node.js 22** no Debian Bookworm.

### 2. `package-lock.json` na raiz

A presença de `package-lock.json` na raiz do repositório é característica de projetos Node.js que utilizam **npm** como gerenciador de pacotes.[^2]

### 3. Instrução de instalação via npm

O `postCreateCommand` do devcontainer instrui:[^1]

```bash
npm install -g @github/copilot
```

E executa `npm install` ao criar o container, reforçando o ecossistema Node.js/npm.

### 4. Arquivo-alvo: `calculator.js`

O template de feature request (`.github/ISSUE_TEMPLATE/feature_request.md`) e as instruções do exercício referenciam `calculator.js` como o arquivo onde a aplicação deve ser implementada — extensão `.js` é JavaScript.[^3]

### 5. `.gitignore` com seção Node.js

O `.gitignore` contém uma seção explícita `# Node.js #` com entradas como `node_modules/`, `npm-debug.log*`, confirmando a linguagem do projeto.[^4]

---

## Confidence Assessment

| Afirmação | Confiança | Fonte |
|-----------|-----------|-------|
| Linguagem é JavaScript | ✅ Alta | devcontainer.json, package-lock.json, .gitignore |
| Runtime é Node.js v22 | ✅ Alta | devcontainer.json (imagem `javascript-node:1-22`) |
| Arquivo principal é `calculator.js` | ✅ Alta | feature_request.md, instruções do exercício |
| Nenhum outro arquivo `.js` existe ainda | ✅ Alta | `calculator.js` ainda não foi criado (exercício em andamento) |

---

## Footnotes

[^1]: `.devcontainer/devcontainer.json` — imagem base e postCreateCommand definem o ambiente Node.js 22.
[^2]: `package-lock.json` na raiz do repositório — indica projeto npm/Node.js.
[^3]: `.github/ISSUE_TEMPLATE/feature_request.md` — referência explícita ao arquivo `calculator.js`.
[^4]: `.gitignore` — seção `# Node.js #` com `node_modules/`, `npm-debug.log*`, etc.
