import React from 'react'
import { Drawer } from '../../componets/Drawer'
import { IconButton } from '@mui/material'
import { WhiteTypography } from '../../componets/Typhography'
import { PageContainer } from '../../componets/Boxes'
import { Send } from '@mui/icons-material'
import { StyledCardMedia } from '../../componets/Cards'
import { CommentTextField } from '../../componets/Textfields'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

function HomeT() {
  return (
    <Drawer style={{ backgroundColor: 'blue' }}>
      <PageContainer style={{ backgroundColor: 'black' }}>
        {/* <Box>
          <iframe
            style={{ width: '100%', height: '100%' }}
            bgcolor="black"
            src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
          ></iframe>
        </Box> */}

        <Card sx={{ height: 'max-content', backgroundColor: 'black' }}>
          <StyledCardMedia
            component="iframe"
            src="https://www.youtube.com/embed/G8_6p08DpCk"
            alt="green iguana"
          />
          <CardContent style={{ backgroundColor: 'black', color: 'white' }}>
            <WhiteTypography gutterBottom variant="h5" component="div">
              Treino de Peito
            </WhiteTypography>
            <WhiteTypography variant="body2">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </WhiteTypography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined">
              Download
            </Button>
          </CardActions>
        </Card>

        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <CommentTextField size="small" place={'Digite um comentário'} end />
            <IconButton
              style={{ backgroundColor: '	#404040', margin: '0 0.4rem' }}
            >
              <Send style={{ color: 'white' }} />
            </IconButton>
          </div>
        </div>
      </PageContainer>
    </Drawer>
  )
}

export default HomeT
