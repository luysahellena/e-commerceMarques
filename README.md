# **E-commerce Louys Beer’s & Cheers 🍺**

Este é um projeto de **E-commerce de bebidas** desenvolvido em **React**. Ele permite visualizar uma vitrine de produtos, acessar detalhes de itens específicos e adicionar produtos ao carrinho.

---

## **📋 Funcionalidades**

- Exibição de um catálogo de produtos.
- Detalhes individuais de cada produto.
- Carrinho de compras para gerenciar produtos adicionados.
- Navegação com React Router (usando `HashRouter`).
- Layout responsivo com **Bootstrap**.
- Simulação de tempo de carregamento com `Promise` e `setTimeout`.

---

## **📂 Estrutura do Projeto**

```bash
e-commerce-marques/
├── node_modules/          # Dependências do projeto
├── public/                # Arquivos estáticos
│   └── index.html         # Template HTML principal
├── src/                   # Código-fonte do projeto
│   ├── components/        # Componentes reutilizáveis
│   │   ├── About.js       # Componente "Sobre nós"
│   │   ├── Banner.js      # Banner de apresentação
│   │   ├── NavBar.js      # Barra de navegação com carrinho
│   │   ├── ItemList.js    # Lista de produtos
│   │   ├── ItemDetail.js  # Detalhes dos produtos
│   │   ├── Footer.js      # Rodapé
│   │   └── ...            # Outros componentes
│   ├── styles/            # Estilos CSS
│   │   └── styles.css     # Estilo geral da aplicação
│   ├── App.js             # Componente principal do React
│   ├── index.js           # Ponto de entrada da aplicação
│   └── ...                # Outros arquivos auxiliares
├── .gitignore             # Arquivos a serem ignorados pelo Git
├── package.json           # Dependências e scripts do projeto
└── README.md              # Documentação do projeto
```
## **🚀 Como Rodar o Projeto**

### **Pré-requisitos**

- **Node.js** instalado ([https://nodejs.org](https://nodejs.org))
- **npm** (Node Package Manager) incluído com o Node.js

### **Passo-a-passo**

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/e-commerce-marques.git

   ```
   2. Acesse a pasta do projeto:
  
   ```bash
   cd e-commerce-marques
   ```
   3. Instale as dependências:
  
   ```bash
   npm install
   ```

   4. Inicie o servidor de desenvolvimento:
  
   ```bash
   npm start
   ```

   5. Acesse no navegador:

   ```arduino
   http://localhost:3000
   ```

   ## **📦 Dependências**
   As principais bibliotecas e frameworks utilizados no projeto:

* React: Biblioteca principal para a criação da interface.
* React Router DOM: Gerenciamento de rotas.
* Bootstrap: Estilo e layout responsivo.
* React Icons: Ícones para a interface.
* React-Bootstrap: Integração do Bootstrap com React.

🛠️ Funcionalidades Técnicas
* Carrinho Dinâmico: Adição e remoção de produtos.
* Simulação de Delay: Promises e setTimeout para simular tempo de carregamento.
* Navegação entre páginas: Rotas dinâmicas com React Router 6.
* Design Responsivo: Utilização do Bootstrap para responsividade em dispositivos móveis.


## **📄 Licença**
Este projeto é licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

## **👥 Contato**
Autor: Luysa Marques
Email: luysahgm@gmail.com

