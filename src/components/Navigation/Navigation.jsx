import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import Home from "../Home/Home";
import Phonebook from "../Phonebook/Phonebook";
import style from "./Navigation.module.css";
import { useState } from "react";

const Navigation = () => {
  const [tabIndex, setTabIndex] = useState(0);
  console.log(tabIndex);

  const homeTabDecor = [style.tab];
  const phoneTabDecor = [style.tab];

  if (tabIndex === 1) {
    phoneTabDecor.push(style.active);
  } else {
    homeTabDecor.push(style.active);
  }

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className={style.tab_list}>
        <Tab className={homeTabDecor.join(" ")}>
          <Home />
        </Tab>
        <Tab className={phoneTabDecor.join(" ")}>
          <Phonebook />
        </Tab>
      </TabList>

      <TabPanel>
        <Home />
      </TabPanel>
      <TabPanel>
        <Phonebook />
      </TabPanel>
    </Tabs>
  );
};

export default Navigation;
