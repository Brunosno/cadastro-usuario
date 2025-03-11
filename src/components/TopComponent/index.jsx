
import Users from "../../assets/users.png"
import { TopContainer } from "./styles";

function TopComponent(){
    return(
        <TopContainer>
            <img src={Users} alt="Usuários" />
        </TopContainer>
    );
}

export default TopComponent