import { useState } from "react";
import { TESTS } from "../../data/TESTS";
import { Link } from "react-router-dom";

const ResultThumbnailList = ({ testParam }: { testParam: string }) => {
  const [testList] = useState(TESTS);

  return (
    <div>
      {testList
        ?.filter((test) => test.info.mainUrl !== testParam)
        .map((test) => {
          return (
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

export default ResultThumbnailList;
