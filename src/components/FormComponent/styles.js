import styled from "styled-components"

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
`

export const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 46px;
    font-weight: 600;
   font-style: normal;
`

export const ContainerInput = styled.div`
    display: flex;
    gap: 20px;
`

export const Input = styled.input`
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #d2dae2;
    padding: 12px 20px;
    outline: none;
    width: 100%;
`

export const InputLabel = styled.label`
    color: #fff;
    font-size: 12px;
    font-weight: 500;

    span{
        color: #ef4f45;
        font-weight: 500;
    }
`