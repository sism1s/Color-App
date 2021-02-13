import sizes from "./sizes";

const styles = {
  picker: {
    width: "300px !important",
    marginTop: "2rem",
    cursor: "pointer",
    [sizes.down("xs")]: {},
  },

  addColor: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "2rem",
  },
  colorNameInput: {
    width: "100%",
  },
};

export default styles;
