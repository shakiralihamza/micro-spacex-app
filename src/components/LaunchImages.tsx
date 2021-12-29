import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Backdrop} from '@mui/material';
import {FC} from "react";
import {useNavigatorOnline} from "@oieduardorabelo/use-navigator-online";

type LaunchImagesProps = {
    open: boolean
    setOpen: (open: boolean) => void
    images: string[]
}
const LaunchImages: FC<LaunchImagesProps> = ({open, setOpen, images}) => {
    let {isOnline} = useNavigatorOnline();

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={open}
                onClick={handleClose}
            >
                <ImageList sx={{width: '80%', height: '80%'}} variant="woven" cols={3} gap={8}>
                    {
                        images.map((item: string) => (
                            <ImageListItem key={item}>
                                <img
                                    src={item}
                                    alt={isOnline?'loading...':'...'}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Backdrop>
        </>
    );
}


export default LaunchImages;
