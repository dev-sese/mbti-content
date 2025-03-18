import { useEffect, useState } from "react";
import { TESTS } from "../../data/TESTS";
import { Link, useSearchParams } from "react-router-dom";

const ThumbnailList = () => {
  const [testList, setTestList] = useState(TESTS);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const currentLang = searchParams.get("lang") || "Kor";
    const currentCategory = searchParams.get("cat");

    if (currentCategory) {
      setTestList(
        TESTS.filter(
          (test) =>
            test.info.lang === currentLang &&
            test.info.category === currentCategory
        )
      );
    } else {
      setTestList(TESTS.filter((test) => test.info.lang === currentLang));
    }
  }, [searchParams]);
  return (
    <div>
      {" "}
      {testList?.map((test) => {
        return (
          // <img src={test.info.thumbImage} alt={test.info.mainUrl} key={test.info.mainUrl}/>
          <Link to={`/${test.info.mainUrl}`} key={test.info.mainUrl}>
            <div className="w-full h-80 bg-blue-200">
              <p>{test.info.mainTitle}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ThumbnailList;
