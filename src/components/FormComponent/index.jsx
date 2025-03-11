import { FormContainer, Title, ContainerInput, InputLabel, Input } from "./styles"
import DefaultButton from "../DefaultButton"
import api from "../../services/api"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

function FormComponent(){

    const navigate = useNavigate()

    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()
    const inputTel = useRef()
  
    async function registerUser(){

        await api.post('/users', {
        email: inputEmail.current.value,
        age: parseInt(inputAge.current.value),
        name: inputName.current.value,
        phone: inputTel.current.value
      },
    
      navigate('/users'))
    }
  
    return(
        <FormContainer>
            <Title>Cadastrar Usuário</Title>

            <ContainerInput>
                <div>
                <InputLabel>Telefone<span>*</span></InputLabel>
                <Input type="text" placeholder="Digite seu telefone" ref={inputTel}/>
                </div>

                <div>
                <InputLabel>Idade<span>*</span></InputLabel>
                <Input type="number" placeholder="Digite sua idade" ref={inputAge}/>
                </div>
            </ContainerInput>

            <div style={{width: "100%"}}>
                <InputLabel>Nome<span>*</span></InputLabel>
                <Input type="text" placeholder="Digite seu nome" ref={inputName}/>
                </div>

            <div style={{width: "100%"}}>
                <InputLabel>E-mail<span>*</span></InputLabel>
                <Input type="email" placeholder="Digite seu e-mail" ref={inputEmail}/>
            </div>

            <DefaultButton type='button' onClick={registerUser} theme='primary'>Registrar Usuário</DefaultButton>
      </FormContainer>
    );
}

export default FormComponent