import React, {FC} from 'react';
import {Divider, Grid, Typography} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type LaunchItemProps = {
    launch_id: string
    divider: boolean
    selected: boolean
}
const LaunchItem: FC<LaunchItemProps> = ({launch_id, divider, selected}) => (
    <>
        <Grid
            container
            direction={"row"}
            alignItems={'start'}
            justifyContent={'center'}
            sx={{color: selected?'text.primary':'#c2c6cc'}}
        >
            <Grid item>
                <Typography variant={"button"} fontWeight={700}>
                    Mission Info {launch_id}
                </Typography>
            </Grid>
            <Grid item sx={{marginLeft: '30px'}}>

                {/*<Stack direction={"column"}>*/}
                    <ChevronRightIcon fontSize={'small'} sx={{marginTop: '3px'}}/>
                {
                    divider?
                        <Divider
                            sx={{height: '30px', margin:'10px 0', width: '50%', borderColor: selected?'transparent': null}}
                            orientation={"vertical"}
                            flexItem
                            textAlign={'center'}
                            light
                        />
                        :
                        null
                }

            </Grid>
        </Grid>

    </>
);

export default LaunchItem;