import Testimonia from "./testimonia"
import Notify from "./notify";
import { Container } from "@material-ui/core";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



const Welcome = () => (
    <Container>
        <Testimonia />
        <Notify /> 
    </Container>
);


export default Welcome;