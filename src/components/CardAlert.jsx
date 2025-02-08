import { Button, Card, CardContent, Typography } from '@mui/material'
import { LogoIcon } from './customIcons';

const CardAlert = () => {
  return (
    <Card variant="outlined" sx={{ m: 1.5, flexShrink: 0, backgroundColor:" #5D5FEF" }} className='m-auto flex justify-center items-center'>
      <CardContent className='m-auto flex flex-col justify-center items-center'>
        <LogoIcon fontSize="small" />
        <Typography gutterBottom sx={{ fontWeight: 600 }}>
          Dabang Pro
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          Get access to all Features on tetumbas
        </Typography>
        <Button sx={{  backgroundColor:" #ffff", fontWeight:'600', color:"#5D5FEF" }} variant="contained" size="small" fullWidth>
          Get pro
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardAlert