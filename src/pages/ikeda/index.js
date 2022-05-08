import React from 'react'
import { styled } from '@mui/material/styles'
import { Drawer } from '../../componets/Drawer'
import { IconButton } from '@mui/material'
import { WhiteTypography } from '../../componets/Typhography'
import Box from '@mui/material/Box'
import { Send } from '@mui/icons-material'
import { CommentTextField } from '../../componets/Textfields'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import AlignItemsList from '../../componets/coments/coments'
import AccountMenu from '../../componets/menu/menu'

function HomeT() {
  const PageContainer = styled(Box)(() => ({
    height: '100%',
    width: '100%',
    padding: '0.2rem'
  }))

  const StyledCardMedia = styled(CardMedia)(() => ({
    border: '1px solid white',
    borderRadius: '1rem',
    backgroundColor: 'black',
    minHeight: '256px'
  }))
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
          <CardActions></CardActions>
        </Card>
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <CommentTextField size="small" place={'Digite um comentário'} end />
            <IconButton style={{ backgroundColor: '	#000000' }}>
              <Send style={{ color: 'white' }} />
            </IconButton>
          </div>
        </div>
        <div>
          <AlignItemsList />
        </div>
        <div style={{ backgroundColor: 'black', position: 'relative' }}>
          <AccountMenu />
        </div>
      </PageContainer>
    </Drawer>
  )
}

export default HomeT
