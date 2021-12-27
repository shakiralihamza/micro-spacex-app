import React, {FC} from 'react';
import {Box, Chip, Stack, Typography} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LinkIcon from '@mui/icons-material/Link';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LaunchDetailLink from "./LaunchDetailLink";
import LaunchVideo from "./LaunchVideo";
import LaunchImages from "./LaunchImages";
import {LaunchListQuery} from "../generated/graphql";

type LaunchDetailProps = {
    data: LaunchListQuery | undefined
    selected: number
}

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function formatDate(date: string) {
    let d = new Date(date),
        month = (monthNames[d.getMonth()]),
        day = d.getDate(),
        year = d.getFullYear();

    return `${month} ${day}, ${year}`;
}

function formatTime(date: string) {
    let d = new Date(date);
    let hours = d.getHours();
    let minutes: string | number = d.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    return hours + ':' + minutes + ' ' + ampm;
}

const LaunchDetail: FC<LaunchDetailProps> = ({data, selected}) => {

    const [videoOpen, setVideoOpen] = React.useState(false);
    const [imagesOpen, setImagesOpen] = React.useState(false);

    if (selected === -1) {
        return null
    }

    // @ts-ignore
    const launchDetail: any = data.launches[selected];
    const handleVideo = () => setVideoOpen(true);

    const handleImages = () => setImagesOpen(true);

    return (
        <div>
            <Typography variant={"overline"} fontWeight={500}>
                {formatDate(launchDetail.launch_date_local)}
            </Typography>

            <Typography variant={'h4'} gutterBottom>
                <Box component={'span'} sx={{fontWeight: 500}}>{launchDetail.rocket.rocket_name} . </Box>
                <Box component={'span'} sx={{fontWeight: 100}}>{launchDetail.mission_name}</Box>
            </Typography>

            {
                launchDetail.launch_success ?
                    <Stack direction="row" spacing={1} mb={2}>
                        <Chip label="Success"/>
                    </Stack>
                    : null
            }

            <Typography variant={'body2'} gutterBottom fontSize={14}>
                <Box component={'span'} sx={{fontWeight: 700}}>Launch Time: </Box>
                {formatTime(launchDetail.launch_date_local)}
            </Typography>

            <Typography variant={'body2'} gutterBottom fontSize={14}>
                <Box component={'span'} sx={{fontWeight: 700}}>Launch Site: </Box>
                {launchDetail.launch_site.site_name_long}
            </Typography>

            <Typography variant={'body2'} mt={2}>
                {launchDetail.details}
            </Typography>

            <Stack direction={'row'} spacing={5} mt={3}>
                <Box onClick={handleVideo}>
                    <LaunchDetailLink icon={<PlayArrowIcon fontSize={"small"}/>} text={'Watch Video'}/>
                </Box>
                <Box onClick={handleImages}>
                    <LaunchDetailLink icon={<ImageOutlinedIcon fontSize={"small"}/>} text={'View Images'}/>
                </Box>
                <Box onClick={() => window.open(launchDetail.links.wikipedia, '_blank')}>
                    <LaunchDetailLink icon={<LinkIcon fontSize={"small"}/>} text={'Wikipedia'}/>
                </Box>
            </Stack>


            <LaunchVideo open={videoOpen} setOpen={setVideoOpen} url={launchDetail.links.video_link}/>
            <LaunchImages open={imagesOpen} setOpen={setImagesOpen} images={launchDetail.links.flickr_images}/>
        </div>
    );
};

export default LaunchDetail;