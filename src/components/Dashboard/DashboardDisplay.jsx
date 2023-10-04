import { useState } from "react";
import styles from "../Dashboard/dashboard.module.scss";
import ProfileModule from "./profile";
import Imgg from "./man.png";

const Dashboard = () => {
  const [image, setImage] = useState(Imgg);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const[isSaved,setIsSaved]=useState(false);
  const [editedName, setEditedName] = useState("Manusha Dananjaya");

  const handleImageChange = (croppedImage) => {
    setImage(URL.createObjectURL(croppedImage));
    setIsEditorOpen(false);
  };

  const handleChooseImage = () => {
    const fileInput = document.getElementById("file-input");
    fileInput.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
      setIsEditorOpen(true);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setIsSaved(false);
  };

  const handleSaveClick = () => {
    // Handle saving the edited name and profile picture here
    // For now, we'll just update the state
    setIsSaved(true);

    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.item1}>
          <div className={styles.item11}>
            <img src={image} className={styles.imgman} alt="profile-image" />
          </div>
          <div className={styles.item12}>
          <h1>My Profile</h1>
                <h2>{editedName}</h2>
            
            <h3>manushadananjaya999@Gmail.com</h3>
            <h3>FUCKYOU69</h3>
          </div>
        </div>
      </div>

      <div className={styles.section2}>
        <div className={styles.item2}>
          <h1>Account Settings</h1>
          {isSaved ?(
            <h3>Saved Successfully!</h3>


          ):(<></>)}

          {isEditing ? (
              
              <h2>Name :<span><input
                type="text"
                placeholder="Enter your name"
                className={styles.name}
                
                onChange={(e) => setEditedName(e.target.value)}
              />
              </span></h2>
            ) : (
              <>
                
              </>
            )}
          {isEditing ? (
            <h2>
              Change Pic : <button className={styles.button15} onClick={handleChooseImage}>Choose Image</button>
              <input
                type="file"
                id="file-input"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
            </h2>
          ) : (
            <button className={styles.button71} onClick={handleEditClick}>Edit</button>
          )}

          {isEditing ? (
            <button className={styles.button71} onClick={handleSaveClick}>Save</button>
          ) : null}

          
        </div>
      </div>

      {isEditorOpen && (
        <ProfileModule image={image} onImageChange={handleImageChange} />
      )}
    </div>
  );
};

export default Dashboard;
