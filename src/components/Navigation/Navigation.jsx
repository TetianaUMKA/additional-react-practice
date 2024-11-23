import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import css from "./Navigation.module.css";
import { useState } from "react";

import Home from "../../tabs/Home/Home";
import Phonebook from "../../tabs/Phonebook/Phonebook";
import Gallery from "../../tabs/Gallery/Gallery";
import MovieSearch from "../../tabs/MovieSearch/MovieSearch";

const Navigation = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const homeTabDecor = [css.tab];
  const phoneTabDecor = [css.tab];
  const galleryTabDecor = [css.tab];
  const movieTabDecor = [css.tab];

  switch (tabIndex) {
    case 0:
      homeTabDecor.push(css.active);
      break;
    case 1:
      phoneTabDecor.push(css.active);
      break;
    case 2:
      galleryTabDecor.push(css.active);
      break;
    case 3:
      movieTabDecor.push(css.active);
      break;
  }

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className={css.tab_list}>
        <Tab className={homeTabDecor.join(" ")}>Home</Tab>
        <Tab className={phoneTabDecor.join(" ")}>Phonebook</Tab>
        <Tab className={galleryTabDecor.join(" ")}>Gallery</Tab>
        <Tab className={movieTabDecor.join(" ")}>Movie search</Tab>
      </TabList>

      <TabPanel>
        <Home />
      </TabPanel>
      <TabPanel>
        <Phonebook />
      </TabPanel>
      <TabPanel>
        <Gallery />
      </TabPanel>
      <TabPanel>
        <MovieSearch />
      </TabPanel>
    </Tabs>
  );
};

export default Navigation;
