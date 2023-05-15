//npm modules
import { Link } from "react-router-dom";

// css
import styles from './DogCard.module.css'
import { login } from "../../services/authService";

const DogCard = ({ dog }) => {
  console.log(dog);
  return (
    <Link to={`/dogs/${dog._id}`}>
    <li key={dog._id}>{dog.name} : {dog.breed} : Age {dog.age} : Size {dog.size} : {dog.color}</li>
  </Link>
  )
}

export default DogCard