import { Box, Grid, Rating, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { AccessTime } from '@mui/icons-material';
import {createTheme,ThemeProvider} from '@mui/material';
const theme=createTheme({
    components:{
        MuiTypography:{
        variants:[
            {
                props:{
                    variant:"body2",
                },
                style:{
                    fontSize:11,
                }
            },
            {
                props:{
                    variant:"body3",
                },
                style:{
                    fontSize:9,
                }
            }
        ]
    }
}
})
const TourCard = ({tour}) => {
    return <Grid item xs={3}>
        <ThemeProvider theme={theme}>
        <Paper elevation={3} >
        <img src={tour.image}
            alt=''
            className='img' />
        <Box paddingX={1}>
            <Typography variant='subtitle1' component="h2">{tour.name}</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTime sx={{ width: 12.5 }} />
                <Typography ml={0.5} variant='body2' component="p">{tour.duration}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} mt={3}>
                <Rating readOnly size="small" name='read-only' value={tour.rating} precision={0.5} />
                <Typography ml={0.5} variant='body2' component="p">{tour.rating}</Typography>
                <Typography ml={0.5} variant='body2' component="p">({tour.numberOfReviews} reviews)</Typography>
            </Box>
            <Box>
            <Typography mt={0} variant='h6' component="h3">From C {tour.price}</Typography>
   
            </Box>
        </Box>
    </Paper>
    </ThemeProvider>
    </Grid>
}

export default TourCard