import React from 'react'

import { Drawer } from '../../componets/Drawer'
import { Comentar } from '../../componets/Buttons'
import { LoginBox } from '../../componets/Boxes'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function HomeT() {
  return (
    <Drawer>
      <LoginBox>
        <Box>
          <p style={{ color: 'white', textAlign: 'center', margin: '0.5rem' }}>
            Abacate
          </p>
          <iframe
            bgcolor="black"
            width="500"
            height="500"
            src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
          ></iframe>
        </Box>

        <LoginBox>
          <div
            style={{
              // backgroundColor: 'blue',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly'
            }}
          >
            <TextField />
          </div>
          <Comentar sx={{ margin: '0.3rem auto' }}>Comentar</Comentar>
        </LoginBox>
        <p style={{ color: 'white', textAlign: 'center', margin: '0.5rem' }}>
          Abacate
        </p>
      </LoginBox>
    </Drawer>
  )
}

export default HomeT
