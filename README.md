# Painel de Tarefas

- [Painel de Tarefas](#painel-de-tarefas)
  - [Apresentação](#apresentação)
  - [Primeiros passos](#primeiros-passos)
  - [Páginas](#páginas)
    - [SignUp](#signup)
    - [SignIn](#signin)
    - [Home](#home)
  - [Componentes](#componentes)
    - [Button](#button)
    - [ButtonText](#buttontext)
    - [Header](#header)
    - [Input](#input)
    - [Task](#task)


## Apresentação

Fronted para aplicação WEB para salvar notas e links úteis

- Desenvolvido em ReactJS v18.2.0;
- Ambiente de desenvolvimento construído com Vite v4.0.0;
- Préprocessador de CSS StyledComponents v5.3.6;
- Requisições HTTP com Axios v1.2.6;

## Primeiros passos

- [Diretorio do Gihub](https://github.com/pedromsra/Painel de Tarefas_frontend);
- Seguir os passos do link [Clonar um repositório](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository) para realizar o **git clone** da aplicação;
- Para os fins desse projeto será considerado que o [servidor local](http://localhost:5173) (padrão do vite);
- Abrir o terminal e digitar:
  - `$ cd /local_da_pasta_onde_a_aplicação_foi_salva`
  - `$ npm install`
  - `$ npm run dev`

## Páginas

Segue a imagens das páginas utilizadas nessa aplicação.

> Os componentes podem ser identificados nas imagens.

### SignUp

![](src/assets/readme/SignUp.png)

### SignIn

![](src/assets/readme/SignIn.png)

### Home

![](src/assets/readme/Home.png)

## Componentes

> A documentação dos componentes irá cubrir a utilização dos componentes, qualquer personalização deverá ser realizada no arquivo "/src/assets/"componente"/styles.js" para cores, tipos e dimensões personalizadas. 

> No geral, os componentes recebem props como onClick = {...}, etc. 

### Button

- Descrição: Botão simples em caixa;
- Aplicação:

```html
    <Button title="Meu botão" isActive = "false" />
```

- Comentário:
  - Se o título não for informado, o botão irá aparecer em branco;
  - Em caso de ```isActive = "true"``` irá aparecer, no lugar do título, a palavra "loading...";

### ButtonText

- Descrição: Texto clicável, com função de input ```type = button```;
- Aplicação:

```html
    <ButtonText title="Meu botão" />
```

- Comentário:
  - Se o título não for informado, o botão irá aparecer em branco;

### Header

- Descrição: Navbar com imagem do usuário e botão para logout;
- Aplicação:

```html
    <Header />
```

- Comentário: não é necessário props;

### Input

- Descrição: input html usado para type = text, permite adicionar icone;
- Aplicação:

```html
    <Input icon = {myIcon} placeholder="My input" type = "text" />
```

- Comentários: é essencialmente um ```<input />```;

### Task

- Descrição: renderiza uma tarefa a ser exibida na página Home;
- Aplicação:

```html
    <Task key={String(note.id)} task={task} 
    handleUpdateTasks={handleUpdateTasks} handleDeleteTasks={handleDeleteTasks} />
```

- Comentários:
  - Task está implementado de forma a ser exibido na página Home;
  - task é um objeto, que contém chave:tipo {task:string, priority:number, done:boolean};
  - task é a tarefa propriamente dita, priority é a prioridade da tarefa e done é o estado de conclusão da tarefa;