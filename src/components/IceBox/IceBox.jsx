

// CSS
import styles from './IceBox.module.css'
// ICONS
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';


const IceBox = () => {
  return ( 
    <div className={styles.iceBoxContainer}>
      <div className={styles.iceBoxHeader}>
        <h1>ICE BOX ITEM</h1>
      </div>
      <div className={styles.iceBoxContent}>
        <p>This is where a future ice box feature will go!</p>
        <div className={styles.iceBoxButtonContainer}>
          <button><DeleteForeverIcon /></button>
          <button><DeleteForeverIcon /></button>
          <button><DeleteForeverIcon /></button>
          <button><DeleteForeverIcon /></button>
        </div>
      </div>
    </div>
  );
}

export default IceBox;