import React from 'react';
import MapBox from './MapBox';
import MapIcon from '@mui/icons-material/Map';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import NotesList from './NotesList';

interface Props {
    lat: number,
    long: number,
    setLat: React.Dispatch<React.SetStateAction<number>>,
    setLong: React.Dispatch<React.SetStateAction<number>>,
    notes: any[],
    getNotes: Promise<void>,
    setNotes: React.Dispatch<React.SetStateAction<any[]>>
    
  }

const NavTabs = ({lat, long, setLat, setLong, getNotes, notes, setNotes}:Props) => {
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
            <Tab>
              <SettingsApplicationsIcon fontSize='large'/>
            </Tab>
        </TabList>

        <TabPanels>

            <TabPanel padding='0'>
                  <MapBox long={long} lat={lat} setLat={setLat} setLong={setLong}/>
            </TabPanel>
            
            <TabPanel>
              <NotesList getNotes={getNotes} notes={notes} setNotes={setNotes}/>
            </TabPanel>
            <TabPanel>
              <p>who's online!</p>
            </TabPanel>
            <TabPanel>
              <p>profile!</p>
            </TabPanel>
        </TabPanels>
    </Tabs>
  )
}

export default NavTabs