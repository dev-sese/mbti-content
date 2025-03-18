import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-8">
      <h5>
        광고 및 후원 문의
        <br />
        Advertising and Sponsorship Contact
      </h5>
      <p>dev.shhong@gmail.com</p>
      <p>
        SESE
        <br />
        Seoul
        <br />
        호스팅 서비스: AWS
      </p>
      <p>
        Disclaimer:
        <br />
        All content is provided for fun and entertainment purpose only
      </p>
      <p>SESE All rights reserved. 2025</p>
      <div>
        <Link to={"/privacy"}>개인정보 처리 방침</Link>
      </div>
    </div>
  );
};

export default Footer;
