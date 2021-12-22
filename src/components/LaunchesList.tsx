/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useEffect} from 'react';
import {Stack} from "@mui/material";
import LaunchItem from "./LaunchItem";
import {LaunchListQuery} from "../generated/graphql";

type LaunchListProps = {
    data: LaunchListQuery | undefined
    selected: string | null | undefined
    setSelected: (selected: string) => void
}
const LaunchesList: FC<LaunchListProps> = ({data, selected, setSelected}) => {
    // @ts-ignore
    const launches_list = data.launches.map(launch => launch.mission_name);

    useEffect(() => {
        const secondLaunchListMissionName: any = launches_list[0];
        setSelected(secondLaunchListMissionName);
    }, []);

    const length = launches_list.length;
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