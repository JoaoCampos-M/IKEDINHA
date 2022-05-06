import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'

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
            src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
          ></iframe>
          <p bgcolor="black">sidjkssjdksdj</p>
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
        <Item>
          <iframe></iframe>
        </Item>
      </Box>
    </div>
  )
}
