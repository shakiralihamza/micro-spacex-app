import React, {FC} from 'react';
import {Divider, Grid, Typography} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type LaunchItemProps = {
    mission_name: string | null | undefined
    divider: boolean
    dividerNotVisible: boolean
    selected: boolean
    index: number
    setSelected: (selected: number) => void
}
const LaunchItem: FC<LaunchItemProps> = ({index, mission_name, divider, dividerNotVisible, selected, setSelected}) => {
    const handleClick = () => {
        setSelected(index);
    }
    return (
        <>
            <Grid
                container
                direction={"row"}
                alignItems={'start'}
                justifyContent={'flex-end'}
                sx={{
                    color: selected ? 'text.primary' : '#c2c6cc',
                    '&: hover': {
                        cursor: 'pointer',
                        color: !selected ? '#9a9b9d' : null
                    }
                }}
                onClick={handleClick}
            >
                <Grid item>
                    <Typography variant={"button"} fontWeight={700}>
                        {typeof mission_name === 'string' ? mission_name : null}
                    </Typography>
                </Grid>
                <Grid item sx={{marginLeft: '30px'}}>
                    <ChevronRightIcon fontSize={'small'} sx={{marginTop: '3px'}}/>
                    {
                        divider ?
                            <Divider
                                sx={{
                                    height: selected ? '70px' : '30px',
                                    margin: '10px 0',
                                    width: '50%',
                                    borderColor: dividerNotVisible ? 'transparent' : null
                                }}
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
}

export default LaunchItem;