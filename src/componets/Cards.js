import CardMedia from '@mui/material/CardMedia'
import { styled } from '@mui/material/styles'

const StyledCardMedia = styled(CardMedia)(() => ({
  border: '1px solid white',
  borderRadius: '1rem',
  backgroundColor: 'black',
  minHeight: '256px'
}))

export { StyledCardMedia }
