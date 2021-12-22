import React from 'react';
import {Box, Chip, Stack, Typography} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LinkIcon from '@mui/icons-material/Link';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LaunchDetailLink from "./LaunchDetailLink";
// noinspection ES6PreferShortImport
import {LinkType} from "../react-app-env.d";

function LaunchDetail() {
    return (
        <div>
            <Typography variant={"overline"} fontWeight={500}>
                May 22, 2019
            </Typography>
            <Typography variant={'h4'} gutterBottom>
                <Box component={'span'} sx={{fontWeight: 500}}>Falcon 9 . </Box>
                <Box component={'span'} sx={{fontWeight: 100}}>SpX CRS 18</Box>
            </Typography>
            <Stack direction="row" spacing={1} mb={2}>
                <Chip label="Success" />
            </Stack>
            <Typography variant={'body2'} gutterBottom fontSize={14}>
                <Box component={'span'} sx={{fontWeight: 700}}>Launch Time: </Box>
                2335 GMT (7:30 PM)
            </Typography>
            <Typography variant={'body2'} gutterBottom fontSize={14}>
                <Box component={'span'} sx={{fontWeight: 700}}>Launch Site: </Box>
                there there there
            </Typography>
            <Typography variant={'body2'} paragraph mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat mattis ante, et ultrices
                nisi accumsan id. Phasellus ac convallis mauris. Vestibulum eget sapien non nisi euismod scelerisque.
                Nulla est odio, blandit at rhoncus posuere, porta mattis tellus. Donec viverra lacus a facilisis luctus.
                Curabitur aliquam erat non justo pharetra vestibulum. Suspendisse lobortis eleifend ante sed sodales.
                Nullam bibendum aliquam efficitur. Vestibulum feugiat tincidunt orci, a vehicula nunc malesuada nec. In
                hac habitasse platea dictumst.
            </Typography>
            <Stack direction={'row'} spacing={5}>
                <LaunchDetailLink icon={<PlayArrowIcon fontSize={"small"}/>} text={'Watch Video'} type={LinkType.video}/>
                <LaunchDetailLink icon={<ImageOutlinedIcon fontSize={"small"}/>} text={'View Images'} type={LinkType.images}/>
                <LaunchDetailLink icon={<LinkIcon fontSize={"small"}/>} text={'Wikipedia'} type={LinkType.wikipedia}/>

            </Stack>

        </div>
    );
}

export default LaunchDetail;