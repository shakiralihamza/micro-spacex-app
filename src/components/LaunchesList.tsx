import React, {FC} from 'react';
import {Stack} from "@mui/material";
import LaunchItem from "./LaunchItem";
import {LaunchListQuery} from "../generated/graphql";
import {ApolloError} from "@apollo/client";

type LaunchListProps = {
    data: LaunchListQuery | undefined
    error: ApolloError | undefined
    loading: boolean
    selected: string | null | undefined
    setSelected: (selected: string) => void
}
const LaunchesList: FC<LaunchListProps> = ({data, error, loading, selected, setSelected}) => {


    if (loading) {
        return <p>loading...</p>
    }
    if (error) {
        return <p>error</p>
    }
    // @ts-ignore
    const launches_list = data.launches.map(launch => launch.mission_name);
    // const secondLaunchListMissionName = launches_list[0];
    const length = launches_list.length;
    // @ts-ignore
    // setSelected(secondLaunchListMissionName);
    return (
        <div>
            <Stack justifyContent={"flex-end"}>
                {launches_list.map((launch, index) => (
                    <LaunchItem
                        key={launch}
                        mission_name={launch}
                        divider={index < length - 1}
                        selected={launch === selected}
                        setSelected={setSelected}
                    />
                ))}
            </Stack>
        </div>
    );
};

export default LaunchesList;