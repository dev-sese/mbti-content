import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryButtons = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [lang, setLang] = useState("Kor");

  useEffect(() => {
    setLang(searchParams.get("lang") || "Kor");
  }, [searchParams]);

  const categoryClickHandler = (category: string, language: string) => {
    if (category === "all") {
      navigate(`/?lang=${language}`);
    } else if (category === "love" || category === "characteristic") {
      navigate(`/?lang=${language}&cat=${category}`);
    } else {
      window.alert("잘못된 카테고리 입니다");
      navigate("/");
    }
  };

  return (
    <div className="my-5 flex justify-between items-center gap-5">
      <button
        onClick={() => categoryClickHandler("all", lang)}
        className="flex-1 p-2 border-2 border-gray-500 text-gray-500 rounded-md hover:bg-gray-500 cursor-pointer hover:text-white"
      >
        <span>전체</span>
      </button>
      <button
        onClick={() => categoryClickHandler("love", lang)}
        className="flex-1 p-2 border-2 border-gray-500 text-gray-500 rounded-md hover:bg-gray-500 cursor-pointer hover:text-white"
      >
        <span>연애</span>
      </button>
      <button
        onClick={() => categoryClickHandler("characteristic", lang)}
        className="flex-1 p-2 border-2 border-gray-500 text-gray-500 rounded-md hover:bg-gray-500 cursor-pointer hover:text-white"
      >
        <span>성격</span>
      </button>
    </div>
  );
};

export default CategoryButtons;
