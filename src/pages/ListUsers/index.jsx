import { useNavigate } from "react-router-dom";
import { Button } from "../../components/DefaultButton/styles"
import { Title } from "../../components/FormComponent/styles"
import api from "../../services/api"
import { useEffect, useState } from "react";
import TopComponent from "../../components/TopComponent"
import { AvatarUser, Container, ContainerUsers, UserCard } from "./styles"
import styles from "./style.module.css"

function ListUsers() {

const navigate = useNavigate();

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
          const { data } = await api.get('/users')
          setUsers(data)
        }

        getUsers()
    },[users])

    async function deleteUser(id){
        await api.delete(`/users/${id}`)
    }

    return(
        <Container>
            <TopComponent/>
            <Title>Lista de Usuários</Title>
            
            <ContainerUsers>
                {users.map((user) => (
                    <UserCard key={user.id}>
                        <AvatarUser src={`http://avatar.iran.liara.run/public?username=${user.id}`}/>

                        <div>
                            <h3>{user.name}</h3>
                            <p>Email: {user.email}</p>
                            <span>Idade: {user.age}</span>
                            <span>Telefone: {user.phone}</span>
                        </div>

                        <ion-icon className={styles.ionIcon} name="close-outline" onClick={() => deleteUser(user.id)}></ion-icon>
                    </UserCard>
                    )
                )}
            </ContainerUsers>
            <Button type="button" onClick={() => navigate('/')}>Cadastrar Usuário</Button>
        </Container>
    );
}

export default ListUsers