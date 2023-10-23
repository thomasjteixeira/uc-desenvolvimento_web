# Lista de Exercícios

### 1. Lista de Tarefas Estática

**Objetivo:** Compreender a propriedade `props` e a renderização de listas.

**Instruções:**
- Crie um componente chamado `TaskList`.
- Esse componente deve aceitar uma propriedade chamada `tasks` que é uma lista de strings.
- O componente deve renderizar cada tarefa como um item de uma lista `<ul>`.

### 2. Avatar de Usuário

**Objetivo:** Compreender a composição de componentes e propriedades padrão.

**Instruções:**
- Crie um componente chamado `UserAvatar`.
- O componente deve aceitar duas propriedades: `imageUrl` e `username`.
- Renderize uma imagem (`<img>`) com a URL passada e, abaixo dela, o nome do usuário.
- Se nenhuma URL for fornecida, utilize uma imagem padrão de sua escolha.

### 3. Renderização Condicional do Modo Noturno com Estilo

**Objetivo:** Praticar a renderização condicional em React usando propriedades (`props`) e estilos condicionais.

**Descrição:**
- Crie um componente chamado `ThemeChange`. Este componente deve mostrar diferentes mensagens e ajustar o fundo com base em uma prop chamada `isDarkMode`.

**Instruções:**
- O componente `ThemeChange` aceitará uma prop chamada `isDarkMode` que será do tipo booleano.
- Se `isDarkMode` for `true`, o componente deve renderizar "Modo Noturno Ativado" e o fundo deve ser cinza escuro.
- Se `isDarkMode` for `false`, o componente deve renderizar "Modo Claro Ativado" e o fundo deve ser padrão ou branco.

### Exercício 4: Contador de Cliques com Hooks

**Objetivo:**  
Familiarizar-se com a utilização do `useState` em React através da implementação de um contador de cliques.

**Descrição**

Desenvolva um componente chamado `ClickCounterHooks`. Esse componente deve renderizar um botão e, ao lado dele, exibir a quantidade de vezes que o botão foi pressionado.

**Instruções**

1. O componente `ClickCounterHooks` deve inicialmente mostrar o número `0` ao lado do botão.
2. Cada vez que o botão for pressionado, o número exibido deve aumentar em uma unidade.
3. Para este exercício, utilize o hook `useState`.


### 5. Lista de Tarefas com Horário e Checkbox

**Objetivo:** Expandir o conhecimento sobre renderização de listas e manipulação de propriedades, introduzindo elementos de formulário e a exibição de dados adicionais.

**Descrição:**
- Desenvolva um componente `TaskListWithTime` que liste tarefas com horários e permita marcar cada tarefa como concluída ou não concluída usando um checkbox.

**Instruções:**
- Cada tarefa deve ser representada por um objeto com os seguintes campos:
  - `description`: Descrição da tarefa (string).
  - `time`: Horário no formato 'HH:mm' (string).
  - `done`: Indicador se a tarefa foi concluída ou não (boolean).
- O componente `TaskListWithTime` deve aceitar uma propriedade chamada `tasks` que é uma lista desses objetos.
- Cada tarefa deve ser exibida em um elemento de lista (`<li>`) com sua descrição, horário e um checkbox. O estado do checkbox deve refletir o valor do campo `done` do objeto da tarefa.
