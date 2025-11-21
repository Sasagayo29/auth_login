# 🔐 Auth Login

![Status](https://img.shields.io/badge/status-active-success?style=flat-square)
![Angular](https://img.shields.io/badge/Angular-v17+-red?style=flat-square&logo=angular)
![SCSS](https://img.shields.io/badge/SCSS-Sass-pink?style=flat-square&logo=sass)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

Uma interface de autenticação moderna, responsiva e animada construída com **Angular** e **SCSS**.

---

## 📖 Sobre o Projeto

Este projeto é uma implementação de uma tela de **Login** e **Cadastro (Sign In / Sign Up)** focada em **experiência do usuário** e **design de interface**.

Seu principal destaque é a **animação de transição suave (Sliding Panel)** entre os formulários, além do **Tema Escuro (Dark Mode)** com cores vibrantes roxas/neon.

---

## ✨ Funcionalidades Principais

- 🔄 **Animação de Deslize (Sliding Panel)**  
  Troca suave entre Login e Cadastro usando `CSS Transforms`.

- 🌓 **Tema Claro/Escuro**  
  Alternância dinâmica com ícone animado.

- 👁️ **Visibilidade da Senha**  
  Botão individual para mostrar/ocultar senha.

- 📱 **Totalmente Responsivo**  
  Design adaptado para telas pequenas e grandes.

- ✅ **Formulários Reativos (Reactive Forms)**  
  Validações robustas (email, campos obrigatórios, confirmação de senha).

- 🎨 **Design Moderno**  
  Gradientes, neumorphism suave, ícones FontAwesome e detalhes em neon.

---

## 🚀 Tecnologias Utilizadas

- **Angular v17+** (Standalone Components)
- **TypeScript**
- **SCSS / Sass**
- **FontAwesome**

---

## 📦 Como Rodar o Projeto

### **Pré-requisitos**
- Node.js  
- Angular CLI instalado globalmente

### **Passo a passo**

```bash
# 1. Clone o repositório
git clone https://github.com/Sasagayo29/auth_login.git

# 2. Entre na pasta do projeto
cd auth_login

# 3. Instale as dependências
npm install

# 4. Instale o FontAwesome (se necessário)
npm install @fortawesome/fontawesome-free

# 5. Execute o servidor de desenvolvimento
ng serve

```
---

## 📂 Estrutura do Projeto
```
├── .angular
├── public
│   └── favicon.ico
├── src
│   ├── app
│   │   ├── auth
│   │   │   └── login
│   │   │       ├── login.html
│   │   │       ├── login.scss
│   │   │       ├── login.spec.ts
│   │   │       └── login.ts
│   │   ├── app.config.ts
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   ├── app.scss
│   │   ├── app.spec.ts
│   │   └── app.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── .editorconfig
├── .gitignore
├── README.md
├── angular.json
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```
---

## 🔧 Deploy (Vercel)

Para evitar erros de budget por fontes inline, o angular.json contém:
```
"optimization": {
  "fonts": {
    "inline": false
  }
}
```
--- 

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Riquelmy Miyasawa Borges

🔗 [LinkedIn](https://www.linkedin.com/in/riquelmy-miyasawa-borges)

📧 riquelmymiyasawaborges@gmail.com

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
