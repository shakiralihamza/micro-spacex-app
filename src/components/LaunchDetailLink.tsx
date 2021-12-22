import React, {FC} from 'react';
import {Box, IconButton, Typography} from "@mui/material";

type LinkProps = {
    icon: JSX.Element
    text: string
}
const LaunchDetailLink: FC<LinkProps> = ({icon, text}) => {
    return (
        <>
            <Box sx={{'&: hover': {cursor: 'pointer'}}}>
                <IconButton aria-label="play" disableRipple
                            sx={{
                                border: '1px solid',
                                borderColor: '#e1e1e1',
                                color: 'text.primary'
                            }}
                >
                    {icon}
                </IconButton>
                <Typography ml={1} variant={'body2'} fontSize={12} fontWeight={500} component={'span'}>
                    {text}
                </Typography>
            </Box>
        </>
    );
}

export default LaunchDetailLink;