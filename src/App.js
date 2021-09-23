import BottomSection from "./components/BottomSection";
import styled from "styled-components";
import RightContainerion from "./components/RighSection";

import background from "./assets/img.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faEye,
  faRecordVinyl,
  faSignOutAlt,
  faCropAlt,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  margin-top: 3px;
  background-color: #f7f8fa;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
`;

const ImageSectionContainer = styled.div`
  height: 68vh;
  width: 100%;
  background: url(${background}) no-repeat center center;
  position: relative;
  top: 0;
`;
const ExitButton = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 130px;
  height: 20px;
  border-radius: 10px;
  background-color: #222222;
  color: #fff;
  font-size: 14px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    height: 21px;
    box-shadow: #655a4c 3px 3px 3px 3px;
    transition: 0.3s;
  }
  span {
    padding-left: 8px;
  }
`;
const CaptureButton = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 130px;
  height: 20px;
  border-radius: 10px;
  background-color: #b51231;
  color: #fff;
  font-size: 14px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    height: 21px;
    box-shadow: #655a4c 3px 3px 8px 0px;
    transition: 0.3s;
  }
  span {
    padding-left: 8px;
  }
`;

const RightContainer = styled.div`
  height: 70vh;
  background-color: white;
  width: 30%;
  position: relative;
`;
const BottomSec = styled.div`
  background-color: #f7f8fa;
  height: 38vh;
  width: 100%;
`;

const ButtonRapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 60px;
  background-color: aliceblue;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ButtonCancel = styled.button`
  width: 40%;
  height: 60px;

  background-color: #444444;
  border: none;
  color: #fff;
  border-bottom-left-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: #655a4c 3px 3px 8px 0px;
    transition: 0.3s;
  }
  span {
    padding-left: 8px;
  }
`;
const ButtonGood = styled.button`
  width: 45%;
  height: 60px;
  background-color: #00a652;
  border: none;
  color: #fff;
  border-bottom-right-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: #655a4c 3px 3px 8px 0px;
    transition: 0.3s;
  }
  span {
    padding-left: 8px;
  }
`;

const StartButton = styled.button`
  width: 120px;
  height: 40px;
  color: red;
  position: absolute;
  margin-left: 40%;
  border: none;
  border-radius: 20px;
  top: 10px;
  background-color: #4f4b48;
  cursor: pointer;

  &:hover {
    box-shadow: #655a4c 3px 3px 8px 0px;
    transition: 0.3s;
  }

  span {
    padding-left: 10px;
    color: #fff;
  }
`;

const LeftSection = styled.div`
  width: 65%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* overflow: hidden; */
`;

const App = () => (
  <Container>
    <LeftSection>
      <ImageSectionContainer>
        <StartButton onClick={() => console.log("click")}>
          <FontAwesomeIcon icon={faRecordVinyl} />
          <span>00 03 45</span>
        </StartButton>

        <ExitButton onClick={() => console.log("click")}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Exit Session</span>
        </ExitButton>
        <CaptureButton onClick={() => console.log("click")}>
          <FontAwesomeIcon icon={faCropAlt} />
          <span>Capture Screen</span>
        </CaptureButton>
      </ImageSectionContainer>

      <BottomSec>
        <BottomSection />
      </BottomSec>
    </LeftSection>
    <RightContainer>
      <RightContainerion />

      <ButtonRapper>
        <ButtonCancel onClick={() => console.log("click")}>
          <FontAwesomeIcon icon={faTimes} /> <span>Not Good</span>
        </ButtonCancel>
        <ButtonGood onClick={() => console.log("click")}>
          <FontAwesomeIcon icon={faCheck} /> <span> Good</span>
        </ButtonGood>
      </ButtonRapper>
    </RightContainer>
  </Container>
);
export default App;
