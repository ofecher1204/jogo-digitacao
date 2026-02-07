# Typing Game: Jogo e Aprendizado de segunda Linguagem ⌨️🧠

Um jogo de digitação focado na aquisição de linguagem e memória muscular, construído com **React**, **TypeScript** e **TailwindCSS**.

## 📖 Sobre o Projeto
Este projeto é uma ferramenta de aprendizado projetada na interseção entre o **Desenvolvimento de Habilidade Motora** (Touch Typing) e a **Aquisição de Segunda Língua**. 

Diferente de digitadores comuns que usam palavras aleatórias, este jogo utiliza **Input Compreensível** (frases com contexto visual) e **Repetição Deliberada** (mecânica estilo Kumon) para treinar a memória implícita do usuário.

## 🧠 Fundamentação Teórica
O design do jogo baseia-se em três pilares científicos:

1. **Memória Implícita & Automatização** (Bryce P. Towne):
   - Focamos no "loop interno" motor. A mecânica de **Bloqueio de Erro** (o cursor não avança se você errar) impede a fossilização de movimentos incorretos, forçando o cérebro a recalibrar a memória muscular instantaneamente.
2. **Hipótese do Input** (Stephen Krashen):
   - Utilizamos o conceito de *Comprehensible Input*. Cada frase é acompanhada de uma imagem contextual para garantir que o usuário associe a digitação ao significado (*meaning*), e não apenas à forma mecânica. O ambiente é desenhado para manter o "Filtro Afetivo" baixo (baixa ansiedade).
3. **Gamificação & Engajamento** (Figueroa):
   - Feedback imediato (visual e sonoro), barras de progresso e contadores de streak são usados para manter o estado de *flow* e motivar a repetição necessária para a maestria.

---

## ✨ Funcionalidades (MVP)
- **Mecânica "Kumon-Style"**: O jogo bloqueia o avanço em caso de erro, forçando a correção imediata e prevenindo vícios de digitação.
- **Sistema de Overlay Visual**: Texto digitado sobreposto perfeitamente ao texto alvo para reduzir a carga cognitiva visual.
- **Feedback Instantâneo**:
  - **Visual**: Cursor reativo, animações de "tremida" ao errar e mudança de cores.
  - **Auditivo**: Sons de máquina de escrever (acerto) e buzz sutil (erro).
- **Smart Review**: Algoritmo que gera dinamicamente fases contendo apenas palavras com as letras que o usuário mais errou.
- **Métricas em Tempo Real**: Cálculo de WPM (Palavras por Minuto), Precisão e Streak (Combo).

---

## 🛠️ Tecnologias Utilizadas
- **Core**: [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Gerenciamento de Estado**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Áudio**: [Howler.js](https://howlerjs.com/)

---

## 🚀 Como Rodar o Projeto
### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado.

### Passo a Passo
1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/typing-game.git](https://github.com/seu-usuario/typing-game.git)
   cd typing-game
2. Instale as dependências: npm install
3. Execute o servidor de desenvolvimento: npm run dev
4. Acesse: Abra http://localhost:5173 no seu navegador.

   
## 📂 Estrutura do Projeto

```text
src/
├── components/      # Componentes UI (ProgressBar, ResultsScreen, etc.)
├── data/            # Lições estáticas e dicionários
├── store/           # Lógica de estado global com Zustand
├── App.tsx          # Componente principal
├── index.css        # Tailwind v4 e variáveis de tema
└── main.tsx         # Ponto de entrada do React
```
## 🔮 Roadmap & Próximos Passos

- [ ] **Integração Backend (Supabase)**: Salvar progresso do usuário e histórico de erros.
- [ ] **Sistema de Níveis**: Progressão de dificuldade baseada na teoria $i + 1$ (input ligeiramente acima do nível atual).
- [ ] **Modo Infinito**: Geração procedural de frases baseada no vocabulário adquirido.
- [ ] **Configurações de Acessibilidade**: Ajuste de fontes e contraste para dislexia.

