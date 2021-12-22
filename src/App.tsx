import React from 'react';
import {Container, CssBaseline, Grid} from "@mui/material";
import LaunchesList from './components/LaunchesList';
import LaunchDetail from "./components/LaunchDetail";

function App() {
    return (
        <>
            <CssBaseline/>
            <Container maxWidth={"md"} sx={{height: '100vh'}}>
                <Grid container sx={{width: '100%', height:'100%'}} alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={"auto"} sx={{backgroundColor: 'inherit', margin: '0 20px'}}>
                        <LaunchesList/>
                    </Grid>
                    <Grid item xs={8} sx={{backgroundColor: 'inherit', margin: '0 0 0 80px'}}>
                        <LaunchDetail/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;
