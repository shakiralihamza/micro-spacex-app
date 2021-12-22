import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import ReactPlayer from 'react-player/youtube';
import {FC} from "react";

type VideoPros = {
    open: boolean
    setOpen: (open: boolean)=> void
    url: string
}
const LaunchVideo: FC<VideoPros> = ({open, setOpen, url}) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={open}
                onClick={handleClose}
            >
                <ReactPlayer url={url} controls stopOnUnmount playing={open}/>
            </Backdrop>
        </div>
    );
};

export default LaunchVideo;