//npm modules
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddCommentIcon from '@mui/icons-material/AddComment';
// css
import styles from './DogCard.module.css'
import { Switch } from "@mui/material";
// import { login } from "../../services/authService";

const DogCard = ({ dog }) => {
  console.log(dog);
  return (
      <Box 
        className={styles.dogCard}
        backgroundColor="white"
        display="flex" 
        justifyContent="spread-evenly" 
        alignItems="center"
        flexDirection="row"
        borderRadius="12px"
        padding="6px"
        marginTop="6px"
        >
          <Box className={styles.dogCardImg}><img src={dog.photo? dog.photo:'/BWdog_icon.png'} alt="" className={styles.dogCardImg}/></Box>
          <Box className={styles.dogCardContent} flexGrow="3">{dog.name} - {dog.breed}</Box>
        <Button variant="outlined" size="small" href={`/dogs/${dog._id}`}>DETAILS</Button>
        <Button variant="outlined" size="small" href={`/dogs/${dog._id}/reports/newreport`}><AddCommentIcon /></Button>
        <Switch />
      </Box>
  )
}
export default DogCard
