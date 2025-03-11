import styled from "styled-components"

export const Container = styled.div`
    background-color: #181818;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`

export const ContainerUsers = styled.div`
    margin: 30px 0;
    display: grid;
    grid-template-columns: repeat(2, 400px);
    gap: 20px;

    @media (max-width: 750px){
        grid-template-columns: repeat(1, 400px);
        margin: 20px 0;
    }

    @media (max-width: 400px){
        grid-template-columns: repeat(1, 350px);
        margin: 20px 0;
    }
`

export const UserCard = styled.div`
    background-color: #252D48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 400px;
    color: #fff;

    h3{
        font-size: 24px;
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    p {
        font-weight: 300;
        font-size: 14px;
    }

    @media (max-width: 400px){
        flex-direction: column;
    }
`

export const AvatarUser = styled.img`
    max-height: 80px;
`