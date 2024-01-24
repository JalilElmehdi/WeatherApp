import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
  blue: "#269af1",
  star:"#ffc106",
};

const Rating = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const publier = () => {
    if (currentValue === 0) {
      toast.error('Please select a rating before posting.');
    } else {
      toast.success('Your review has been successfully published!');
      
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: "white" }}>Rate This Application</h2>
      <div style={styles.stars}>
        {stars.map((_, index) => (
          <FaStar
            key={index}
            size={24}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            color={(hoverValue || currentValue) > index ? colors.star : colors.grey}
            style={{
              marginRight: 10,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
      <textarea
        placeholder="What is your evaluation of our application?"
        className="textarea"
      />

      <button style={styles.button} onClick={publier} type="button">
        Publier
      </button>

      <ToastContainer />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  
  
  button: {
    border: "none",
    borderRadius: 5,
    width: 200, // Ajustez la largeur selon vos besoins
    padding: 10,
    background: colors.blue,
    color: "#fff",
    cursor: "pointer",
  },
};

export default Rating;
