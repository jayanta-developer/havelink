import { Box, Typography } from '@mui/material';
import "./style.css";


export const AppPrimaryBtn = ({ btnText, width, textColor, bgColor }) => {
  return (
    <Box className="appBtn" sx={{ background: bgColor, width, color: textColor }}>
      <Typography>{btnText}</Typography>
    </Box>
  )
}