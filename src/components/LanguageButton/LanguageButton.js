import { useContext } from "react";
import { LanguageContext } from "../../providers/multilingualContext";
import { Button } from "reactstrap";

const LanguageButton = () => {
  const { language, handleChangeLanguage } = useContext(LanguageContext);

  return (
    <>
      <Button color="primary" outline onClick={handleChangeLanguage}> {language} </Button>
    </>
  );
};

export default LanguageButton;