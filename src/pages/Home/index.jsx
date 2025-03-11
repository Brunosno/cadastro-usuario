import { Container } from "./styles"
import FormComponent from "../../components/FormComponent"
import TopComponent from "../../components/TopComponent"
import { useNavigate } from "react-router-dom"
import DefaultButton from "../../components/DefaultButton"

function Home() {

  const navigate = useNavigate();

  return (
    <Container>
      <TopComponent />

      <FormComponent />
      <DefaultButton type='button' onClick={() => navigate('/users')}>Ver Usuários</DefaultButton>
    </Container>
  )
}

export default Home
