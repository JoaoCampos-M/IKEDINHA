import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { StyledCardMedia } from '../../componets/Cards'
import { WhiteTypography } from '../../componets/Typhography'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import AccountMenu from '../../componets/menu/menu'

function Item(props) {
  const { sx, ...other } = props
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: theme =>
          theme.palette.mode === '#000000' ? '#000000' : '#000000',
        color: theme =>
          theme.palette.mode === '#000000' ? '#000000' : '#000000',
        border: '1px solid',
        borderColor: theme =>
          theme.palette.mode === '#000000' ? '#000000' : '#000000',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx
      }}
      {...other}
    />
  )
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
}

export default function FlexWrap() {
  return (
    <div style={{ width: '100%', bgcolor: 'black' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          p: 1,
          m: 1,
          bgcolor: 'black',
          maxWidth: 300,
          borderRadius: 1
        }}
      >
        <Item></Item>
        <Item>
          <iframe
            bgcolor="black"
            width="500"
            height="500"
            src="https://vimeo.com/704268420"
          ></iframe>
          <p bgcolor="black">sidjkssjdksdj</p>
        </Item>
        <Item>
          <Card
            sx={{
              height: 'max-content',
              backgroundColor: 'black',
              minWidth: '50vw'
            }}
          >
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
        </Item>
        <Item>
          <iframe></iframe>
        </Item>
        <Item>
          <iframe></iframe>
        </Item>
        <Item>
          <iframe></iframe>
        </Item>
      </Box>
      <footer>
        <AccountMenu />
      </footer>
    </div>
  )
}
