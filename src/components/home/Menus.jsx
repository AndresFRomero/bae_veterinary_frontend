import React from 'react'
import { styled } from '@mui/material/styles';
import {Box, Paper, Grid, ButtonBase, Typography} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    height: 100, 
    width: 140
  }));

const Menus = () => {
    return (
        <Box sx = {{ flexGrow: 1, p: "1vh"}}>
            <Grid container spacing = {2} direction="row">
                <Grid item xs={2}>
                    <ButtonBase>
                        <Item>
                            <Typography variant="button" sx={{ fontWeight: 'bold', fontSize: 17 }} > 
                                Inventario
                            </Typography>
                        </Item>
                    </ButtonBase>
                </Grid>
                <Grid item xs={4}>
                    <ButtonBase>
                        <Item>
                            <Typography variant="button" sx={{ fontWeight: 'bold', fontSize: 17 }} > 
                                Inventario
                            </Typography>
                        </Item>
                    </ButtonBase>
                </Grid>
            </Grid >
        </Box>
    )
}

export default Menus
