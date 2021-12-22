import React, {useState} from 'react';
import {Stack} from "@mui/material";
import LaunchItem from "./LaunchItem";

function LaunchesList() {
    const [selected, setSelected] = useState<string>("1");
    const launches_list = ["1", "2", "3", "4", "5"]
    const length = launches_list.length;

    return (
        <div>
            <Stack>
                {launches_list.map((launch, index) => (
                    <LaunchItem
                        launch_id={launch}
                        divider={index < length - 1}
                        selected={index === Number(selected) - 1}
                    />
                ))}
            </Stack>
        </div>
    );
}

export default LaunchesList;