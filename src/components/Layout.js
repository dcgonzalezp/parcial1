import { Button, Container, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import usa from "../assets/usa.png";
import col from "../assets/col.png";
import { useState } from "react";

const Layout = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("es");
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    if (currentLang === "es") {
      i18n.changeLanguage("en");
      setCurrentLang("en");
    } else {
      i18n.changeLanguage("es");
      setCurrentLang("es");
    }
  };

  return (
    <Container>
      <Button
        style={{
          position: "absolute",
          right: 10,
          top: 10,
        }}
        variant="ghost"
        onClick={changeLanguage}
      >
        <Image
          src={currentLang === "es" ? usa : col}
          style={{
            height: 40,
            width: 60,
          }}
        ></Image>
      </Button>

      {children}
    </Container>
  );
};

export default Layout;
