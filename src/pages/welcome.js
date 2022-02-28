import Notifications from "./notifications"
import { Container } from "@material-ui/core";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



const Welcome = () => (
    <Container>
        <Notifications>
            <KeyboardArrowLeftIcon />
        </Notifications>
    </Container>
);


export default Welcome;