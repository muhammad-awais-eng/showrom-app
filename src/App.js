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
  background-color: #f7f8fa;
  position: relative;
`;

const UpperContainer = styled.div`
  display: block;
  padding: 10px;
`;

const ImageSectionContainer = styled.div`
  background-color: brown;
  height: 450px;
  width: 70%;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  position: relative;
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
  background-color: #f7f8fa;
  position: absolute;
  top: 0;
  margin-top: 13px;
  right: 0;
  margin-right: 40px;
  min-height: 600px;
  background-color: white;
  width: 25%;
`;
const BottomSec = styled.div`
  background-color: #f7f8fa;
  height: 200px;
  width: 70%;
`;

const ButtonCancel = styled.button`
  width: 187px;
  height: 60px;
  position: absolute;
  bottom: 0;
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
  width: 187px;
  height: 60px;
  position: absolute;
  bottom: 0;
  right: 0;
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
  margin-left: 400px;
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

const App = () => (
  <Container>
    <UpperContainer>
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
    </UpperContainer>

    <RightContainer>
      <RightContainerion />

      <ButtonCancel onClick={() => console.log("click")}>
        <FontAwesomeIcon icon={faTimes} /> <span>Not Good</span>
      </ButtonCancel>
      <ButtonGood onClick={() => console.log("click")}>
        <FontAwesomeIcon icon={faCheck} /> <span> Good</span>
      </ButtonGood>
    </RightContainer>
  </Container>
);
export default App;
