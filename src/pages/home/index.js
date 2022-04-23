import * as React from 'react'

import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import { Drawer } from '../../componets/Drawer'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0)

  return (
    <Drawer>
      <BottomNavigation
        style={{ backgroundColor: 'black' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction
          style={{ color: 'yellow' }}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction label="Mentoria" icon={<FitnessCenterIcon />} />
        <BottomNavigationAction label="Perfil" icon={<PersonIcon />} />
      </BottomNavigation>
    </Drawer>
  )
}
