import { useNavigate } from "react-router-dom";
import { TestData } from "../../data/TESTS";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import AdsenseUnit from "../AdsenseUnit";
import KakaoAdfit from "../KakaoAdfit";

interface LoadingProps {
  mbtiScore: { [key: string]: number };
  currentTest: TestData;
}

const Loading = ({ mbtiScore, currentTest }: LoadingProps) => {
  const navigate = useNavigate();

  const [finalQuery, setFinalQuery] = useState("");

  useEffect(() => {
    const mbtiPairs = [
      ["E", "I"],
      ["N", "S"],
      ["F", "T"],
      ["P", "J"],
    ];
    let resultType = "";

    for (const pair of mbtiPairs) {
      const firstType = pair[0];
      const secondType = pair[1];
      const firstTypeScore = mbtiScore[firstType];
      const secondTypeScore = mbtiScore[secondType];
      resultType += firstTypeScore > secondTypeScore ? firstType : secondType;
    }

    setFinalQuery(
      currentTest.results.find((result) => result.type === resultType)?.query ??
        ""
    );
  }, [mbtiScore, currentTest]);

  const loadingTime = 3700;
  useEffect(() => {
    const timeSet = setTimeout(() => {
      if (finalQuery !== "") {
        navigate(`/${currentTest.info.mainUrl}/result/${finalQuery}`);
      }
    }, loadingTime);
    return () => {
      clearTimeout(timeSet);
    };
  }, [navigate, finalQuery, currentTest.info.mainUrl]);

  return (
    <>
      <AdsenseUnit slot={"5748533585"} />
      <div className="w-full flex justify-center items-center mt-40">
        <Spin
          indicator={<LoadingOutlined spin style={{ fontSize: 60 }} />}
          size="large"
        />
      </div>
      <KakaoAdfit />
    </>
  );
};

export default Loading;
