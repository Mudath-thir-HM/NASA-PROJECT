import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return (
    <ArwesFooter animate>
      <Centered>
        <Paragraph style={{ fontSize: 14, margin: "10px 0" }}>
          Visit the codebase at{" "}
          <a
            href="https://github.com/Mudath-thir-HM/NASA-PROJECT"
            target="_self"
          >
            Front-End
          </a>{" "}
          <a
            href="https://github.com/Mudath-thir-HM/NASA-BACKEND"
            target="_self"
          >
            Back-End
          </a>
        </Paragraph>
      </Centered>
    </ArwesFooter>
  );
};

export default Footer;
