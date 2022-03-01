import image from "./images/img.png"
import "./notifications.css"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StarIcon from '@mui/icons-material/Star';


const Testimonia= () => (
    <div className="images">
        < KeyboardArrowLeftIcon fontSize="large"/>
        
        <div ClassNames="image-div"> 
        
            <center><img src={image} alt="images" /> <br /> <br />
            <StarIcon fontSize="0.5" color="primary"/>
            <StarIcon fontSize="0.5" color="primary"/>
            <StarIcon fontSize="0.5" color="primary"/>
            <StarIcon fontSize="0.5" color="primary"/>
            <StarIcon fontSize="0.5" color="primary"/>

            <p className="text"> It is a long established fact that a <br />
                reader will be distracted by the <br />
                readable content of a page
            </p>
            <h6 className="text2"> Rahim Khan</h6>
            </center>
        </div>
        
        
        <div ClassNames="image-div"> 
            <center><img src={image} alt="images" /> <br /> <br />
            <StarIcon fontSize="0.5" color="primary"/>
            <StarIcon fontSize="0.5" color="primary"/>
            <StarIcon fontSize="0.5" color="primary"/>
            <StarIcon fontSize="0.5" color="primary"/>
            <StarIcon fontSize="0.5" color="primary"/>

            <p className="text"> It is a long established fact that a <br />
                reader will be distracted by the <br />
                readable content of a page
            </p>
            <h6 className="text2"> Rahim Khan</h6>
            </center>
            
        </div>
        <KeyboardArrowRightIcon fontSize="large"/>
    
     
    </div>

    
);


export default Testimonia;