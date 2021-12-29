// noinspection GraphQLUnresolvedReference,JSUnusedGlobalSymbols
// noinspection GraphQLUnresolvedReference

import React, {useEffect, useState} from 'react';
import {
    CssBaseline,
    Typography,
} from "@mui/material";
import {
    ApolloClient,
    ApolloProvider,
    NormalizedCacheObject,
} from '@apollo/client';
import {InMemoryCache} from '@apollo/client/core';
import {CachePersistor, LocalStorageWrapper} from 'apollo3-cache-persist';
import {gql} from "@apollo/client";
import SpaceX from './components/SpaceX';

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
    const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

    useEffect(() => {
        async function init() {
            const cache = new InMemoryCache();
            let newPersistor = new CachePersistor({
                cache,
                storage: new LocalStorageWrapper(window.localStorage),
                debug: true,
                trigger: 'write',
            });
            await newPersistor.restore();
            setClient(
                new ApolloClient({
                    uri: 'https://api.spacex.land/graphql/',
                    cache,
                }),
            );
        }

        init().catch(console.error);
    }, []);

    if (!client) {
        return <Typography variant={'h5'} ml={20} mt={10}>...</Typography>;
    }

    return (
        <ApolloProvider client={client}>
            <CssBaseline/>
            <SpaceX/>
        </ApolloProvider>
    );
}

export default App;
