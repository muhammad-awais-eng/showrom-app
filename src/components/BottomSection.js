import React, { useState } from "react";

import Checkbox from "./CheckBox";

import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faEye } from "@fortawesome/free-solid-svg-icons";

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
  color: #67686a;
  width: 200px;
  height: 30px;
  text-align: center;
  font-weight: bold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 5px;
  user-select: none;
  cursor: pointer;

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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Icon = styled.div`
  width: 5%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  width: 80%;
`;
const ViewButton = styled.div`
  width: 12%;
  height: 20px;
  border-radius: 10px;
  background-color: #00a652;
  color: #fff;
  font-size: 14px;
  padding: 10px;
`;
const RunningButton = styled.div`
  width: 12%;
  height: 20px;
  border-radius: 10px;
  background-color: #f36525;
  color: #fff;
  font-size: 14px;
  padding: 10px;
`;
const StartButton = styled.div`
  width: 12%;
  height: 20px;
  border-radius: 10px;
  background-color: #b71234;
  color: #fff;
  font-size: 14px;
  padding: 10px; ;
`;

STabPanel.tabsRole = "TabPanel";

function BottomSection() {
  const [checked, setchecked] = useState(false);
  const [radioCheck, setradioCheck] = useState(false);
  const [checkradio, setcheckradio] = useState(false);

  const handleCheckboxChange = (e) => {
    setchecked(e.target.checked);
  };
  const handleSecondRadio = (e) => {
    setradioCheck(e.target.checked);
  };
  const handleThirdRadio = (e) => {
    setchecked(e.target.checked);
  };

  return (
    <div>
      <STabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
      >
        <STabList>
          <STab>Section 1</STab>
          <STab>Section 2</STab>
          <STab>Section 3</STab>
          <STab>Section 4</STab>
        </STabList>

        <STabPanel>
          <Wrapper>
            <Icon>
              <div style={{ fontFamily: "system-ui" }}>
                <label>
                  <Checkbox
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
            </Icon>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <ViewButton>
              <FontAwesomeIcon icon={faEye} className="sub-space" /> View Item
            </ViewButton>
          </Wrapper>
          <Wrapper>
            <Icon>
              <div style={{ fontFamily: "system-ui" }}>
                <label>
                  <Checkbox
                    type="radio"
                    checked={radioCheck}
                    onChange={handleSecondRadio}
                  />
                </label>
              </div>
            </Icon>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </Text>
            <RunningButton>
              <FontAwesomeIcon icon={faEye} className="sub-space" /> Running
            </RunningButton>
          </Wrapper>
          <Wrapper>
            <Icon>
              <div style={{ fontFamily: "system-ui" }}>
                <label>
                  <Checkbox
                    type="radio"
                    checked={checkradio}
                    onChange={handleThirdRadio}
                  />
                </label>
              </div>
            </Icon>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              lobortis venenatis nulla, a condimentum massa facilisis quis.
            </Text>
            <StartButton>
              <FontAwesomeIcon icon={faPlay} className="sub-space" /> Start Item
            </StartButton>
          </Wrapper>
        </STabPanel>
        <STabPanel>
          <Wrapper>
            <Icon>
              <div style={{ fontFamily: "system-ui" }}>
                <label>
                  <Checkbox
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
            </Icon>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </Text>
            <ViewButton>
              <FontAwesomeIcon icon={faEye} className="sub-space" /> View Item
            </ViewButton>
          </Wrapper>
          <Wrapper>
            <Icon>
              <div style={{ fontFamily: "system-ui" }}>
                <label>
                  <Checkbox
                    type="radio"
                    checked={radioCheck}
                    onChange={handleSecondRadio}
                  />
                </label>
              </div>
            </Icon>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </Text>
            <RunningButton>
              <FontAwesomeIcon icon={faEye} className="sub-space" /> Running
            </RunningButton>
          </Wrapper>
          <Wrapper>
            <Icon>
              <div style={{ fontFamily: "system-ui" }}>
                <label>
                  <Checkbox
                    type="radio"
                    checked={checkradio}
                    onChange={handleThirdRadio}
                  />
                </label>
              </div>
            </Icon>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <StartButton>
              <FontAwesomeIcon icon={faPlay} className="sub-space" /> Start Item
            </StartButton>
          </Wrapper>
        </STabPanel>
        <STabPanel>
          <Wrapper>
            <Icon>
              <div style={{ fontFamily: "system-ui" }}>
                <label>
                  <Checkbox
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
            </Icon>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
            <ViewButton>
              <FontAwesomeIcon icon={faEye} className="sub-space" /> View Item
            </ViewButton>
          </Wrapper>
          <Wrapper>
            <Icon>
              <div style={{ fontFamily: "system-ui" }}>
                <label>
                  <Checkbox
                    type="radio"
                    checked={radioCheck}
                    onChange={handleSecondRadio}
                  />
                </label>
              </div>
            </Icon>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
            </Text>
            <RunningButton>
              <FontAwesomeIcon icon={faEye} className="sub-space" /> Running
            </RunningButton>
          </Wrapper>
          <Wrapper>
            <Icon>
              <div style={{ fontFamily: "system-ui" }}>
                <label>
                  <Checkbox
                    type="radio"
                    checked={checkradio}
                    onChange={handleThirdRadio}
                  />
                </label>
              </div>
            </Icon>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <StartButton>
              <FontAwesomeIcon icon={faPlay} className="sub-space" /> Start Item
            </StartButton>
          </Wrapper>
        </STabPanel>
        <STabPanel>
          <Wrapper>
            <Icon>
              <div style={{ fontFamily: "system-ui" }}>
                <label>
                  <Checkbox
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
            </Icon>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <ViewButton>
              <FontAwesomeIcon icon={faEye} className="sub-space" /> View Item
            </ViewButton>
          </Wrapper>
          <Wrapper>
            <Icon>
              <div style={{ fontFamily: "system-ui" }}>
                <label>
                  <Checkbox
                    type="radio"
                    checked={radioCheck}
                    onChange={handleSecondRadio}
                  />
                </label>
              </div>
            </Icon>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </Text>
            <RunningButton>
              <FontAwesomeIcon icon={faEye} className="sub-space" /> Running
            </RunningButton>
          </Wrapper>
          <Wrapper>
            <Icon>
              <div style={{ fontFamily: "system-ui" }}>
                <label>
                  <Checkbox
                    type="radio"
                    checked={checkradio}
                    onChange={handleThirdRadio}
                  />
                </label>
              </div>
            </Icon>
            <Text>
              lobortis venenatis nulla, a condimentum massa facilisis quis.
            </Text>
            <StartButton>
              <FontAwesomeIcon icon={faPlay} className="sub-space" /> Start Item
            </StartButton>
          </Wrapper>
        </STabPanel>
      </STabs>
    </div>
  );
}

export default BottomSection;
