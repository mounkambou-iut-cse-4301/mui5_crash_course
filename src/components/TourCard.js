import { Box, Grid, Rating, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { AccessTime } from '@mui/icons-material';

const TourCard = () => {
    return <Grid item xs={3}><Paper elevation={3} >
        <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
            alt=''
            className='img' />
        <Box paddingX={1}>
            <Typography variant='subtitle1' component="h2">Breakfast</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTime sx={{ width: 12.5 }} />
                <Typography ml={0.5} variant='body2' component="p">5 hours</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} mt={3}>
                <Rating readOnly size="small" name='read-only' value={4.5} precision={0.5} />
                <Typography ml={0.5} variant='body2' component="p">4.5</Typography>
                <Typography ml={0.5} variant='body2' component="p">(655 reviews)</Typography>
            </Box>
            <Box>
            <Typography mt={0} variant='h6' component="h3">From C $425</Typography>
   
            </Box>
        </Box>
    </Paper>
    </Grid>
}

export default TourCard