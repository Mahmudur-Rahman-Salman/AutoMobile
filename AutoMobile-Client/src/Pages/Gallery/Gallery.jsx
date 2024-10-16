import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";
import coverPic from "../../assets/Images/cars/porshe_cover.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useLoadCars from "../../hooks/useLoadCars";
import CarTabs from "../../components/CarTabs/CarTabs";

const Gallery = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { loadCars } = useLoadCars();

  const Audi = loadCars.filter((item) => item.brand === "Audi");
  const BMW = loadCars.filter((item) => item.brand === "BMW");
  const Lambroghini = loadCars.filter((item) => item.brand === "Lambroghini");
  const LandRover = loadCars.filter((item) => item.brand === "Land Rover");
  const RollsRoyce = loadCars.filter((item) => item.brand === "Rolls Royce");
  const Toyota = loadCars.filter((item) => item.brand === "Toyota");
  const Volvo = loadCars.filter((item) => item.brand === "Volvo");
  const Mahindra = loadCars.filter((item) => item.brand === "Mahindra");
  const MarutiSuzuki = loadCars.filter(
    (item) => item.brand === "Maruti Suzuki"
  );
  const Mercedes = loadCars.filter((item) => item.brand === "Mercedes");
  const Porsche = loadCars.filter((item) => item.brand === "Porsche");
  const Hyundai = loadCars.filter((item) => item.brand === "Hyundai");

  return (
    <>
      <Helmet>
        <title>AutoMobile | Gallery</title>
      </Helmet>
      <Cover img={coverPic}></Cover>
      <div className="my-5 text-center">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Audi</Tab>
            <Tab>BMW</Tab>
            <Tab>Lamborghini</Tab>
            <Tab>Land Rover</Tab>
            <Tab>Rolls Royce</Tab>
            <Tab>Mercedes</Tab>
            <Tab>Porshe</Tab>
            <Tab>Toyota</Tab>
            <Tab>Volvo</Tab>
            <Tab>Hyundai</Tab>
            <Tab>Mahindra</Tab>
            <Tab>Maruti Suzuki</Tab>
          </TabList>

          <TabPanel>
            <CarTabs items={Audi}></CarTabs>
          </TabPanel>
          <TabPanel>
            <CarTabs items={BMW}></CarTabs>
          </TabPanel>
          <TabPanel>
            <CarTabs items={Lambroghini}></CarTabs>
          </TabPanel>
          <TabPanel>
            <CarTabs items={LandRover}></CarTabs>
          </TabPanel>
          <TabPanel>
            <CarTabs items={RollsRoyce}></CarTabs>
          </TabPanel>
          <TabPanel>
            <CarTabs items={Mercedes}></CarTabs>
          </TabPanel>
          <TabPanel>
            <CarTabs items={Porsche}></CarTabs>
          </TabPanel>
          <TabPanel>
            <CarTabs items={Toyota}></CarTabs>
          </TabPanel>
          <TabPanel>
            <CarTabs items={Volvo}></CarTabs>
          </TabPanel>
          <TabPanel>
            <CarTabs items={Hyundai}></CarTabs>
          </TabPanel>
          <TabPanel>
            <CarTabs items={Mahindra}></CarTabs>
          </TabPanel>
          <TabPanel>
            <CarTabs items={MarutiSuzuki}></CarTabs>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Gallery;
