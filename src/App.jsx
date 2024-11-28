import './App.css'
import { PostsContext } from './context/PostsContext'
import PostsPage from './components/PostsPage'


const postsList = [
  {
    id: 1,
    title: 'HTML',
    content: 'loco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web',
  },
  {
    id: 2,
    title: 'CSS',
    content: 'linguagem Cascading Style Sheet',
  },
  {
    id: 3,
    title: 'JavaScript',
    content: 'linguagem de programação que permite a você implementar itens complexos em páginas web',
  },
  {
    id: 4,
    title: 'NodeJS',
    content: 'ferramenta que vai nos entregar a capacidade de interpretar código JavaScript, de maneira bem similar ao navegador',
  },
  {
    id: 5,
    title: 'React',
    content: 'biblioteca de JavaScript utilizado para a criação de user interfaces (UI), ou interfaces do usuário em português',
  },

]

function App() {

  return (
    <PostsContext.Provider value={{ postsList }}>
      <PostsPage />
    </PostsContext.Provider>
  )
}

export default App
