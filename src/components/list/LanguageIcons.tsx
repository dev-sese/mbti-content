import { CircleFlag } from "react-circle-flags";
import { useNavigate } from "react-router-dom";

const LanguageIcons = () => {
  const navigate = useNavigate();

  const flagClickHandler = (lang: string) => {
    navigate(`/?lang=${lang}`);
  };
  return (
    <div className="my-6 flex justify-center gap-6">
      <CircleFlag
        onClick={() => flagClickHandler("Kor")}
        countryCode="kr"
        width={"40"}
        className="cursor-pointer"
      />
      <CircleFlag
        onClick={() => flagClickHandler("Eng")}
        countryCode="us"
        width={"40"}
        className="cursor-pointer"
      />
      <CircleFlag
        onClick={() => flagClickHandler("JP")}
        countryCode="jp"
        width={"40"}
        className="cursor-pointer"
      />
    </div>
  );
};

export default LanguageIcons;
