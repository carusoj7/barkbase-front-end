// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// pages
// import Loading from "../Loading/Loading"
// import NewComment from '../../components/NewComment/NewComment'
// import Comments from '../../components/Comments/Comments'
// import NewReportCard from '../../components/NewReportCard/NewReportCard'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Reports from '../../components/Reports/Reports'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import DogList from '../DogList/DogList';
import KeyIcon from '@mui/icons-material/Key';

//services
import * as profileService from '../../services/profileService'
import styles from './ProfileDetail.module.css'
import NewDog from '../NewDog/NewDog';



const ProfileDetails = ( props ) => {
  const { profileId } = useParams()
  const [profile, setProfile] = useState({})
  

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show( profileId )
      setProfile(profileData)
    }
    fetchProfile()
  }, [profileId])
  
  return ( 
    <main className={styles.container}>
      <header className={styles.profileDetailContainer}>
        <div className={styles.profileDetailImg}>
          <img src={profile.photo? profile.photo:'/BWdog_icon.png'} alt="Default profile Photo" />
          <div className={styles.profilePhotoButtonContainer}>
          <button><AddAPhotoIcon /></button>
          <button><NoPhotographyIcon /></button>
        </div>
        </div>
        <div className={styles.profileDetailContent}>
          <h1> {profile.name} </h1>
          <h2> {profile.isAdmin ? "Admin" : "Dog Owner"}</h2>
          <h3> Email: {profile.email} </h3>
          <h3> Phone: {profile.phoneNumber} </h3>
          <div className={styles.buttonContainer}>
          <button><Link to={`/profiles/${profileId}/`} state={profile}><EditIcon /></Link></button>
          <button><Link to="/auth/change-password" className={styles.navItem}>< KeyIcon /></Link></button>
          </div>
        </div>
      </header>
      <h2>My Dogs</h2>
      <div className={styles.profileBody}>

        {profile.dogs && <DogList className={styles.dogList} dogs={profile.dogs}/>}
        <NewDog className={styles.profileNewDog} handleAddDog={props.handleAddDog}/>
      </div>
    </main>
  );
}

export default ProfileDetails