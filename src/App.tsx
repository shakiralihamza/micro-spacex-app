// noinspection GraphQLUnresolvedReference

import React, {useState} from 'react';
import {Container, CssBaseline, Grid} from "@mui/material";
import LaunchesList from './components/LaunchesList';
import LaunchDetail from "./components/LaunchDetail";
import {gql} from "@apollo/client";
import {useLaunchListQuery} from "./generated/graphql";

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
    const { data, error, loading } = useLaunchListQuery();
    const [selected, setSelected] = useState<string | null | undefined>(null);

    return (
        <>
            <CssBaseline/>
            <Container maxWidth={"md"} sx={{height: '100vh'}}>
                <Grid container sx={{width: '100%', height:'100%'}} alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={"auto"} sx={{backgroundColor: 'inherit', margin: '0 20px'}}>
                        <LaunchesList data={data} error={error} loading={loading} selected={selected} setSelected={setSelected}/>
                    </Grid>
                    <Grid item xs={8} sx={{backgroundColor: 'inherit', margin: '0 0 0 80px'}}>
                        <LaunchDetail data={data} selected={selected}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;
