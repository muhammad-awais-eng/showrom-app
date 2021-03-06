import React, { useState } from "react";

import img from "../assets/img1.jpg";
import pdf from "../assets/pdf.png";

import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEllipsisH,
  faStore,
  faImage,
  faPencilAlt,
  faTrash,
  faDownload,
  faTimes,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const STabs = styled(Tabs)`
  font-family: "Segoe UI", sans-serif;
  font-size: 12px;
  width: 100%;
`;

const STabList = styled(TabList)`
  list-style-type: none;
  padding: 1px;
  display: flex;
  margin: 0;
`;
STabList.tabsRole = "TabList";

const STab = styled(Tab)`
  margin-right: 4px;
  color: #ffff;
  width: 33.3%;
  height: 30px;
  text-align: center;
  font-weight: bolder;
  font-size: 0.6rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-top: 10px;
  background: #b71234;

  margin-top: 0px;
  user-select: none;
  cursor: pointer;
  text-transform: uppercase;

  &.is-selected {
    color: #b71234;
    background: #ffff;
    border-bottom: 1px solid white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.5);
  }
`;
STab.tabsRole = "Tab";

const STabPanel = styled(TabPanel)`
  display: none;
  background-color: #ffffff;
  border-radius: 3px;
  min-height: 40vh;
  padding: 4px;
  margin-top: -3.5px;

  &.is-selected {
    display: block;
  }
`;
const Container = styled.div`
  width: "100%";
  background-color: #ffff;
  height: 100px;
  margin-bottom: 10px;
`;

const ButtonRapper = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 40px;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: "row";
  justify-content: space-between;
`;
const Icon = styled.div`
  width: 80%;
  text-align: left;
  padding-left: 5px;
`;
const Selector = styled.div`
  width: auto;
  padding-right: 2px;
`;
const IconHeader = styled.div`
  width: 100%;

  span {
    font-size: 13px;
    font-weight: 500;
    margin-left: 10px;
  }
`;
const Text = styled.div`
  margin-top: 15px;
  padding-left: 12px;
`;

const Textarea = styled.textarea`
  width: 94%;
  background-color: #f6f6f6;
  border: none;
  color: #97846c;
  font-family: sans-serif;
  border-radius: 5px;
  height: 200px;
  margin: 10px;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;
const Box = styled.div`
  width: 105px;
  margin-top: 6px;
  height: 70px;
  border-radius: 5px;
  border: 1px solid #efefef;
  border-style: dotted;
`;

const ImgContainter = styled.div`
  width: 130px;
  height: 75px;
  position: relative;
  margin: 10px 0;

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
  button {
    position: absolute;
    height: 30px;
    margin: 10px;
    width: auto;
    padding: 5px 15px;
    bottom: -26px;
    border: none;
    border-radius: 15px;
  }
`;

const StoreLocation = styled.div`
  margin: 12px;
  background-color: #f6f6f6;
  height: 60px;
  border-radius: 5px;
`;

const EvidenceSection = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  /* grid-template-columns: auto auto; */
`;

const SideShow = styled.div`
  position: absolute;
  width: 20px;
  top: 0;
  text-align: center;
  border-radius: 5px;
  height: 20px;
  right: 0;
  margin-top: 1px;
  margin-right: 2px;
`;

const ButtonTag = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-evenly;
  color: white;

  button {
    display: none;
    width: 20%;
    margin: 45px 2px;
    height: 40px;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      box-shadow: #655a4c 3px 3px 8px 0px;
      height: 40px;
      width: 20%;
      transition: 0.2s;
    }
  }
`;

const ImgDiv = styled.div`
  text-align: center;
  flex: 0 40%;
  box-shadow: 0 0 0 1px black;
  margin-bottom: 10px;
  border: 1px solid #000;
  background: url(${img}) no-repeat center center;
  background-size: cover;
  width: 100%;
  border-radius: 10px;
  height: 120px;

  &:hover .my {
    display: block;
  }
`;

STabPanel.tabsRole = "TabPanel";

function RightSection() {
  const [value, setValue] = useState(
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don???t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn???t anything embarrassing hidden in the middle of text."
  );
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <STabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
      >
        <STabList>
          <STab>Information</STab>
          <STab>comments</STab>
          <STab>evidence</STab>
        </STabList>

        <STabPanel>
          <Container>
            <Wrapper>
              <Icon>
                <IconHeader>
                  <FontAwesomeIcon icon={faEye} /> <span>Say</span>
                </IconHeader>
              </Icon>

              <Selector>
                <FontAwesomeIcon icon={faEllipsisH} className="sub-space" />
              </Selector>
            </Wrapper>
            <Text>
              This task will require to show me how to undo the extronet and
              replace the wtsapablue with the size ?
            </Text>
          </Container>
          <Container>
            <Wrapper>
              <Icon>
                <IconHeader>
                  <FontAwesomeIcon icon={faStore} />
                  <span>Store Location</span>
                </IconHeader>
              </Icon>

              <Selector>
                <FontAwesomeIcon icon={faEllipsisH} className="sub-space" />
              </Selector>
            </Wrapper>
            <StoreLocation></StoreLocation>
          </Container>

          <Container>
            <Wrapper>
              <Icon>
                <IconHeader>
                  <FontAwesomeIcon icon={faEye} />
                  <span>Capture Workshop Action</span>
                </IconHeader>
              </Icon>

              <Selector>
                <FontAwesomeIcon icon={faEllipsisH} className="sub-space" />
              </Selector>
            </Wrapper>
            <BoxWrapper>
              <Box />
              <Box />
              <Box />
            </BoxWrapper>
          </Container>

          <Container>
            <Wrapper>
              <Icon>
                <IconHeader>
                  <FontAwesomeIcon icon={faEye} /> <span>Share Files</span>
                </IconHeader>
              </Icon>

              <Selector>
                <FontAwesomeIcon icon={faEllipsisH} className="sub-space" />
              </Selector>
            </Wrapper>
            <BoxWrapper>
              <ImgContainter>
                <img src={img} alt="" />
                <button>share now</button>
              </ImgContainter>

              <ImgContainter>
                <img src={pdf} alt="" />
                <button>share now</button>
              </ImgContainter>
            </BoxWrapper>
          </Container>
          <ButtonRapper>
            <ButtonCancel onClick={() => console.log("click")}>
              <FontAwesomeIcon icon={faTimes} /> <span>Not Good</span>
            </ButtonCancel>
            <ButtonGood onClick={() => console.log("click")}>
              <FontAwesomeIcon icon={faCheck} /> <span> Good</span>
            </ButtonGood>
          </ButtonRapper>
        </STabPanel>
        <STabPanel>
          <Textarea value={value} onChange={handleChange} />
          <ButtonRapper>
            <ButtonCancel onClick={() => console.log("click")}>
              <FontAwesomeIcon icon={faTimes} /> <span>Not Good</span>
            </ButtonCancel>
            <ButtonGood onClick={() => console.log("click")}>
              <FontAwesomeIcon icon={faCheck} /> <span> Good</span>
            </ButtonGood>
          </ButtonRapper>
        </STabPanel>
        <STabPanel>
          <EvidenceSection>
            <ImgDiv>
              <ButtonTag>
                <SideShow>
                  <FontAwesomeIcon icon={faImage} />
                </SideShow>{" "}
                <button
                  onClick={() => console.log("click")}
                  style={{ backgroundColor: "#00a652" }}
                  className="my"
                >
                  <FontAwesomeIcon icon={faDownload} />
                </button>
                <button
                  onClick={() => console.log("click")}
                  style={{ backgroundColor: "#f36523" }}
                  className="my"
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
                <button
                  onClick={() => console.log("click")}
                  style={{ backgroundColor: "#b71234" }}
                  className="my"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </ButtonTag>
            </ImgDiv>
            <ImgDiv>
              <ButtonTag>
                <SideShow>
                  <FontAwesomeIcon icon={faImage} />
                </SideShow>{" "}
                <button
                  onClick={() => console.log("click")}
                  style={{ backgroundColor: "#00a652" }}
                  className="my"
                >
                  <FontAwesomeIcon icon={faDownload} />
                </button>
                <button
                  onClick={() => console.log("click")}
                  style={{ backgroundColor: "#f36523" }}
                  className="my"
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
                <button
                  onClick={() => console.log("click")}
                  style={{ backgroundColor: "#b71234" }}
                  className="my"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </ButtonTag>
            </ImgDiv>
            <ImgDiv>
              <ButtonTag>
                <SideShow>
                  <FontAwesomeIcon icon={faImage} />
                </SideShow>{" "}
                <button
                  onClick={() => console.log("click")}
                  style={{ backgroundColor: "#00a652" }}
                  className="my"
                >
                  <FontAwesomeIcon icon={faDownload} />
                </button>
                <button
                  onClick={() => console.log("click")}
                  style={{ backgroundColor: "#f36523" }}
                  className="my"
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
                <button
                  onClick={() => console.log("click")}
                  style={{ backgroundColor: "#b71234" }}
                  className="my"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </ButtonTag>
            </ImgDiv>

            <ImgDiv>
              <ButtonTag>
                <SideShow>
                  <FontAwesomeIcon icon={faImage} />
                </SideShow>{" "}
                <button
                  onClick={() => console.log("click")}
                  style={{ backgroundColor: "#00a652" }}
                  className="my"
                >
                  <FontAwesomeIcon icon={faDownload} />
                </button>
                <button
                  onClick={() => console.log("click")}
                  style={{ backgroundColor: "#f36523" }}
                  className="my"
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
                <button
                  onClick={() => console.log("click")}
                  style={{ backgroundColor: "#b71234" }}
                  className="my"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </ButtonTag>
            </ImgDiv>
            <ButtonRapper>
              <ButtonCancel onClick={() => console.log("click")}>
                <FontAwesomeIcon icon={faTimes} /> <span>Not Good</span>
              </ButtonCancel>
              <ButtonGood onClick={() => console.log("click")}>
                <FontAwesomeIcon icon={faCheck} /> <span> Good</span>
              </ButtonGood>
            </ButtonRapper>
          </EvidenceSection>
        </STabPanel>
      </STabs>
    </div>
  );
}

export default RightSection;
