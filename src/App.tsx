// noinspection GraphQLUnresolvedReference,JSUnusedGlobalSymbols

import React, {useState} from 'react';
import {
    Box,
    Container,
    CssBaseline,
    Drawer,
    Grid,
    IconButton,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {Theme} from "@mui/material";
import LaunchesList from './components/LaunchesList';
import LaunchDetail from "./components/LaunchDetail";
import {gql} from "@apollo/client";
import {useLaunchListQuery} from "./generated/graphql";
import MenuIcon from '@mui/icons-material/Menu';

export const QUERY_LAUNCH_LIST = gql`
    query LaunchList {
        launches(limit: 5) {
            mission_name
            launch_date_local
            launch_site {
                site_name_long
            }
            links {
                video_link
                wikipedia
                flickr_images
            }
            rocket {
                rocket_name
            }
            details
            launch_success
            id
        }
    }
`;

function App() {
    const {data, error, loading} = useLaunchListQuery();
    const [selected, setSelected] = useState<string | null | undefined>(null);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const theme: Theme = useTheme();
    const isSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'));

    console.log(isSmallerThanMD)

    const handleMenuOpen = () => {
        setMenuOpen(true);
    };
    const handleMenuClose = () => {
        setMenuOpen(false);
    };
    return (
        <>
            <CssBaseline/>
            <Container maxWidth={"md"} sx={{height: '100vh'}}>
                <Grid container sx={{width: '100%', height: '100%'}} alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={12} sm={8} md={'auto'} sx={{backgroundColor: 'inherit', margin: '0 20px'}}>
                        {
                            loading ?
                                <p>loading...</p>
                                : null
                        }
                        {
                            error ?
                                <p>error</p>
                                : null
                        }
                        {
                            data ?
                                <>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={handleMenuOpen}
                                        edge="start"
                                        sx={{mr: 2, ...(!isSmallerThanMD && {display: 'none'})}}
                                    >
                                        <MenuIcon/>
                                    </IconButton>
                                    {
                                        isSmallerThanMD ?
                                            (<Drawer
                                                anchor={"left"}
                                                open={menuOpen}
                                                onClose={handleMenuClose}
                                                ModalProps={{
                                                    keepMounted: true,
                                                }}
                                            >
                                                <Box sx={{padding: '40px 40px 0'}}>
                                                    <LaunchesList data={data} selected={selected}
                                                                  setSelected={setSelected}/>
                                                </Box>
                                            </Drawer>)
                                            :
                                            (<LaunchesList data={data} selected={selected}
                                                           setSelected={setSelected}/>)
                                    }

                                </>
                                : null
                        }
                    </Grid>
                    <Grid item xs={11} sm={8} sx={{
                        backgroundColor: 'inherit',
                        margin: {
                            xs: '0',
                            md: '0 0 0 80px'
                        }
                    }}>
                        <LaunchDetail data={data} selected={selected}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;
