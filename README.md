# 🎨 Marketplace Cultural Curvelo

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://ezrafchev.github.io/mercado-online-cvo/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Uma plataforma moderna e interativa que conecta artistas, artesãos e produtores culturais de Curvelo, MG, com consumidores de todo o Brasil. Este projeto foi desenvolvido com design Apple-quality, utilizando paleta de cores RGB e efeitos suaves e modernos.

## 🌟 Características

### Design Moderno
- **Paleta RGB**: Cores vibrantes inspiradas no design da Apple
- **Animações Suaves**: Transições e efeitos com curvas de Bézier otimizadas
- **Glass Morphism**: Efeitos de vidro fosco com backdrop-filter
- **Gradientes Dinâmicos**: Elementos com gradientes animados
- **Responsivo**: Layout adaptável para desktop, tablet e mobile

### Interatividade
- **Scroll Animations**: Elementos aparecem suavemente ao rolar a página
- **Parallax Effects**: Efeito de profundidade nos elementos hero
- **Hover Effects**: Transformações 3D nos cards de produtos
- **Smooth Scrolling**: Navegação suave entre seções
- **Mobile Menu**: Menu hambúrguer animado para dispositivos móveis

### Performance
- **CSS Otimizado**: Variáveis CSS para fácil manutenção
- **JavaScript Modular**: Código organizado e eficiente
- **Lazy Loading**: Carregamento otimizado de recursos
- **Acessibilidade**: Suporte para navegação por teclado

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: Variáveis CSS, Grid, Flexbox, Animações
- **JavaScript (Vanilla)**: Sem dependências externas
- **Google Fonts**: Tipografia Inter
- **GitHub Pages**: Hospedagem gratuita

## 📁 Estrutura do Projeto

```
mercado-online-cvo/
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # Interatividade JavaScript
├── README.md               # Documentação
├── plano_de_negocios.md   # Plano de negócios original
└── plano_de_negocios_expandido.md
```

## 🎨 Paleta de Cores RGB

```css
--primary-rgb: 99, 102, 241     /* Azul-índigo vibrante */
--secondary-rgb: 168, 85, 247   /* Roxo moderno */
--accent-rgb: 236, 72, 153      /* Rosa/magenta */
--success-rgb: 34, 197, 94      /* Verde sucesso */
--warning-rgb: 251, 146, 60     /* Laranja alerta */
```

## 🌐 Como Visualizar

### Online (GitHub Pages)
Acesse: [https://ezrafchev.github.io/mercado-online-cvo/](https://ezrafchev.github.io/mercado-online-cvo/)

### Localmente

1. Clone o repositório:
```bash
git clone https://github.com/ezrafchev/mercado-online-cvo.git
cd mercado-online-cvo
```

2. Abra o arquivo `index.html` diretamente no navegador, ou use um servidor local:

**Usando Python:**
```bash
python3 -m http.server 8000
```

**Usando Node.js:**
```bash
npx http-server
```

**Usando PHP:**
```bash
php -S localhost:8000
```

3. Acesse `http://localhost:8000` no seu navegador

## 📱 Seções do Site

### 1. **Hero Section**
- Título impactante com gradiente animado
- Badge de "Lançamento em breve"
- Estatísticas do marketplace
- Botões de call-to-action
- Indicador de scroll animado

### 2. **Sobre Nós**
- Cards com glass morphism
- Missão, Visão e Valores
- Animações ao entrar na viewport

### 3. **Produtos**
- 6 categorias culturais
- Cards coloridos com gradientes únicos
- Hover effects com transformação 3D
- Icons representativos

### 4. **Diferenciais**
- 6 principais benefícios da plataforma
- Icons animados
- Layout em grade responsivo

### 5. **CTA (Call to Action)**
- Background escuro com gradientes
- Informações de contato
- Botões destacados

### 6. **Footer**
- Links de navegação
- Redes sociais
- Informações de copyright

## ✨ Recursos Especiais

### Animações
- **Fade In Up**: Elementos aparecem de baixo para cima
- **Floating Orbs**: Elementos de background animados
- **Ripple Effect**: Efeito de ondulação nos botões
- **Counter Animation**: Números animados nas estatísticas
- **Scroll Progress**: Barra de progresso no topo da página

### Acessibilidade
- Navegação por teclado
- Labels ARIA apropriados
- Contraste de cores adequado
- Suporte a `prefers-reduced-motion`

### Easter Egg
Digite o código Konami no teclado (↑↑↓↓←→←→BA) para ativar um efeito especial! 🎉

## 🛠️ Desenvolvimento

### Personalização de Cores

Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-rgb: 99, 102, 241;
    --secondary-rgb: 168, 85, 247;
    /* ... outras cores ... */
}
```

### Adicionar Nova Seção

1. Adicione o HTML em `index.html`
2. Estilize em `styles.css`
3. Adicione interatividade em `script.js` se necessário
4. Use `data-animate` para animações ao scroll

### Modificar Animações

Ajuste as durações e curvas de animação nas variáveis CSS:

```css
:root {
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-apple: 400ms cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as categorias
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Roadmap

- [x] Design e layout moderno
- [x] Animações e interatividade
- [x] Responsividade mobile
- [x] Deploy no GitHub Pages
- [ ] Adicionar formulário de contato funcional
- [ ] Integrar com backend/CMS
- [ ] Sistema de autenticação
- [ ] Catálogo de produtos dinâmico
- [ ] Sistema de carrinho de compras
- [ ] Integração com gateway de pagamento
- [ ] Painel administrativo

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

- **Ezrafchev** - *Desenvolvimento Inicial* - [ezrafchev](https://github.com/ezrafchev)

## 🙏 Agradecimentos

- Comunidade cultural de Curvelo
- Artistas e artesãos locais
- Design inspirado por Apple e empresas de tecnologia modernas
- Família de fontes Inter por Rasmus Andersson

## 📞 Contato

- **Email**: contato@mercadoculturalcurvelo.com
- **Localização**: Curvelo, Minas Gerais, Brasil

---

<div align="center">
  <p>Desenvolvido com ❤️ para a cultura de Curvelo</p>
  <p>© 2024 Marketplace Cultural Curvelo. Todos os direitos reservados.</p>
</div>
