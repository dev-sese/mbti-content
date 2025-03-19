import { useEffect, useRef } from "react";

const KakaoAdfit = () => {
  const scriptElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://t1.daumcdn.net/kas/static/ba.min.js");
    script.setAttribute("charset", "utf-8");

    script.setAttribute("async", "true");
    scriptElement.current?.appendChild(script);
  }, []);

  return (
    <div ref={scriptElement}>
      <ins
        className="kakao_ad_area"
        style={{ display: "none" }}
        data-ad-unit={"DAN-LLoNTTvhcCH5Q5F7"}
        data-ad-width={"320"}
        data-ad-height={"100"}
      ></ins>
    </div>
  );
};

export default KakaoAdfit;
