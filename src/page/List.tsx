import { useEffect } from "react";
import CategoryButtons from "../components/list/CategoryButtons";
import LanguageIcons from "../components/list/LanguageIcons";
import MainBanner from "../components/list/MainBanner";
import ThumbnailList from "../components/list/ThumbnailList";

const List = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <LanguageIcons></LanguageIcons>
      <MainBanner></MainBanner>
      <CategoryButtons></CategoryButtons>
      <ThumbnailList></ThumbnailList>
    </div>
  );
};

export default List;
