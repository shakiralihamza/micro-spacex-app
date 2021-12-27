/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useEffect} from 'react';
import {Stack} from "@mui/material";
import LaunchItem from "./LaunchItem";
import {LaunchListQuery} from "../generated/graphql";

type LaunchListProps = {
    data: LaunchListQuery
    selected: number
    setSelected: (selected: number) => void
}
const LaunchesList: FC<LaunchListProps> = ({data, selected, setSelected}) => {

    const launches_list = data.launches!.map(launch => launch!.mission_name);

    useEffect(() => {
        setSelected(0);
    }, []);

    const length = launches_list.length;

    return (
        <div>
            <Stack justifyContent={"flex-end"}>
                {launches_list.map((launch, index) => (
                    <LaunchItem
                        key={launch}
                        index={index}
                        mission_name={launch}
                        divider={index < length - 1}
                        // next and previous divider should not be visible:
                        dividerNotVisible={(index === selected) || (index === selected - 1)}
                        selected={index === selected}
                        setSelected={setSelected}
                    />
                ))}
            </Stack>
        </div>
    );
};

export default LaunchesList;