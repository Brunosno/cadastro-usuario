import { Button } from "./styles.js"


function DefaultButton(props){
    return(
        <Button theme={props.theme} {...props}>{props.children}</Button>
    );
}

export default DefaultButton