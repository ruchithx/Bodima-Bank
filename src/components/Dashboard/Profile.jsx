import { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import PropTypes from "prop-types"; // Import PropTypes

import styles from "../Dashboard/dashboard.module.scss";

const Profile = ({ image, onImageChange }) => {
  const [editor, setEditor] = useState(null);
  const [scale, setScale] = useState(1);

  const handleScaleChange = (e) => {
    const newScale = parseFloat(e.target.value);
    setScale(newScale);
  };

  const handleCrop = () => {
    if (editor) {
      const canvas = editor.getImageScaledToCanvas();
      canvas.toBlob((blob) => {
        onImageChange(blob); // Pass the cropped image to the parent component
      });
    }
  };

  return (
    <div>
      <AvatarEditor
        ref={(editorRef) => setEditor(editorRef)}
        image={image}
        width={200}
        height={200}
        border={10}
        borderRadius={100}
        color={[255, 255, 255, 0.6]} // Background color
        scale={scale}
      />
      <input
        type="range"
        value={scale}
        min="1"
        max="2"
        step="0.01"
        onChange={handleScaleChange}
      />
      <button className={styles.button15} onClick={handleCrop}>Crop</button>
    </div>
  );
};

// Define PropTypes
Profile.propTypes = {
  image: PropTypes.string.isRequired,
  onImageChange: PropTypes.func.isRequired,
};

export default Profile;
