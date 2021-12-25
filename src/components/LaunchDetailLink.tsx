import React, {FC} from 'react';
import {Box, IconButton, Theme, Typography, useMediaQuery, useTheme} from "@mui/material";

type LinkProps = {
    icon: JSX.Element
    text: string
}
const LaunchDetailLink: FC<LinkProps> = ({icon, text}) => {
    const theme: Theme = useTheme();
    const isSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            <Box sx={{
                '&: hover': {
                    cursor: 'pointer',
                },
                '&: hover .theIcon': {
                    backgroundColor: 'rgba(236,236,236,0.64)'
                }
            }}
            >
                <IconButton aria-label="play" disableRipple
                            sx={{
                                border: '1px solid',
                                borderColor: '#e1e1e1',
                                color: 'text.primary',
                            }}
                            className={'theIcon'}
                >
                    {icon}
                </IconButton>
                <Typography ml={1} variant={'body2'} fontSize={12} fontWeight={500} component={'span'}
                            sx={{...(isSmallerThanMD && {display: 'none'})}}
                >
                    {text}
                </Typography>
            </Box>
        </>
    );
}

export default LaunchDetailLink;