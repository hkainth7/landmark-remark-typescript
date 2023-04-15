import React from 'react';
import MapBox from './MapBox';
import MapIcon from '@mui/icons-material/Map';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

interface Props {
    lat: number,
    long: number,
    setLat: any,
    setLong: any,
    
  }

const NavTabs = ({lat, long, setLat, setLong}:Props) => {
  return (
    <Tabs isFitted align='center' variant='line'>
        <TabList>
            <Tab>
              <MapIcon fontSize='large'/>
            </Tab>
            <Tab>
              <TextSnippetIcon fontSize='large'/>
            </Tab>
            <Tab>
              <PersonPinIcon fontSize='large'/>
            </Tab>
        </TabList>

        <TabPanels>

            <TabPanel padding='0'>
                  <MapBox long={long} lat={lat} setLat={setLat} setLong={setLong}/>
            </TabPanel>
            
            <TabPanel>
            <p>two!</p>
            </TabPanel>
            <TabPanel>
            <p>three!</p>
            </TabPanel>
        </TabPanels>
    </Tabs>
  )
}

export default NavTabs