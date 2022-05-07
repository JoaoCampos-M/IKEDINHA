import * as React from 'react'

import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import { Drawer } from '../../componets/Drawer'
import { HomeBox } from '../../componets/Boxes'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0)

  return (
    <Drawer>
      <HomeBox>
        {}
        <React.Fragment>
          <CssBaseline />
          <Container
            style={{
              backgroundColor: 'black',
              marginTop: '100',
              maxWidth: 'max'
            }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          >
            <Box
              sx={{
                bgcolor: '#FFFFFF',
                height: 'max',
                marginTop: '100',
                width: 'max'
              }}
            >
              <iframe
                bgcolor="black"
                width="max"
                height="max"
                src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
              ></iframe>
              <h1 color="#FFFFFF">Team Ikeda</h1>
            </Box>
          </Container>
        </React.Fragment>
        <BottomNavigation
          style={{ backgroundColor: 'black', marginTop: '100' }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction
            style={{ color: 'white' }}
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            style={{ color: 'white' }}
            icon={<FitnessCenterIcon />}
          />
          <BottomNavigationAction
            style={{ color: 'white' }}
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      </HomeBox>
    </Drawer>
  )
}
