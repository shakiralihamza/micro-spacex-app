import React, {FC} from 'react';
import {Box, Chip, Stack, Typography} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LinkIcon from '@mui/icons-material/Link';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LaunchDetailLink from "./LaunchDetailLink";
import LaunchVideo from "./LaunchVideo";
import LaunchImages from "./LaunchImages";
import {LaunchListQuery} from "../generated/graphql";
import {useNavigatorOnline} from "@oieduardorabelo/use-navigator-online";
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

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

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LaunchDetail: FC<LaunchDetailProps> = ({data, selected}) => {
    let {isOnline} = useNavigatorOnline();
    const [videoOpen, setVideoOpen] = React.useState(false);
    const [imagesOpen, setImagesOpen] = React.useState(false);
    const [alertOpen, setAlertOpen] = React.useState(false);

    const handleAlertOpen = () => {
        setAlertOpen(true);
    };

    const handleAlertClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertOpen(false);
    };

    if (selected === -1) {
        return null
    }

    // @ts-ignore
    const launchDetail: any = data.launches[selected];
    const handleVideo = () => {
        if (isOnline) {
            setVideoOpen(true);
        } else {
            handleAlertOpen();
        }
    }

    const handleImages = () => {
        if (!isOnline){
            setAlertOpen(true);
        }
        setImagesOpen(true)
    };

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
                <Box title={'site_name_long'} component={'span'}>
                    {launchDetail.launch_site.site_name_long}
                </Box>
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
            {/*// @ts-ignore*/}
            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity="warning" sx={{ width: '100%' }}>
                    You are offline!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default LaunchDetail;
