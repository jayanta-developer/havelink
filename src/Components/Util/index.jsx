import { Box, Typography } from '@mui/material';

import benefitCard from "../../Assets/Images/benefitsCard.png";



export const BenefitCard = ({ icon, title, summery, img }) => {
  return (
    <Box className="benefitCard">
      <img src={img} className='bnfBg' />
      <Typography>{title}</Typography>
      <span>{summery}</span>
    </Box>
  )
}
