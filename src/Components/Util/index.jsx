import { Box, Typography } from '@mui/material';

import benefitCard from "../../Assets/Images/benefitsCard.png";

export const BenefitCard = ({ icon, title, summery }) => {
  return (
    <Box className="benefitCard">
      <img src={benefitCard} className='bnfBg' />
      <Box className="bnfCardLogoBox">
        <img src={icon} />
      </Box>
      <Typography>{title}</Typography>
      <span>{summery}</span>
    </Box>
  )
}
