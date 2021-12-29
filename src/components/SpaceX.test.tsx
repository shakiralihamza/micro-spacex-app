import React from 'react';
import {QUERY_LAUNCH_LIST} from "../App";
import SpaceX from "./SpaceX";
import {MockedProvider} from '@apollo/client/testing';
import {render, screen} from "@testing-library/react";

const mocks: any = [
    {
        request: {
            query: QUERY_LAUNCH_LIST
        },
        result: {
            data: {
                "launches": [
                    {
                        "mission_name": "Thaicom 6",
                        "launch_date_local": "2014-01-06T14:06:00-04:00",
                        "launch_site": {
                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                        },
                        "links": {
                            "video_link": "https://www.youtube.com/watch?v=AnSNRzMEmCU",
                            "wikipedia": "https://en.wikipedia.org/wiki/Thaicom_6",
                            "flickr_images": [
                                "https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg",
                                "https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg",
                                "https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png"
                            ]
                        },
                        "rocket": {
                            "rocket_name": "Falcon 9"
                        },
                        "details": "Second GTO launch for Falcon 9. The USAF evaluated launch data from this flight as part of a separate certification program for SpaceX to qualify to fly U.S. military payloads and found that the Thaicom 6 launch had \"unacceptable fuel reserves at engine cutoff of the stage 2 second burnoff\"",
                        "launch_success": true,
                        "id": "13"
                    },
                    {
                        "mission_name": "AsiaSat 6",
                        "launch_date_local": "2014-09-07T01:00:00-04:00",
                        "launch_site": {
                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                        },
                        "links": {
                            "video_link": "https://www.youtube.com/watch?v=39ninsyTRk8",
                            "wikipedia": "https://en.wikipedia.org/wiki/AsiaSat_6",
                            "flickr_images": [
                                "https://farm8.staticflickr.com/7604/16169087563_0e3559ab5b_o.jpg",
                                "https://farm9.staticflickr.com/8742/16233828644_96738200b2_o.jpg",
                                "https://farm8.staticflickr.com/7645/16601443698_e70315d1ed_o.jpg",
                                "https://farm9.staticflickr.com/8730/16830335046_5f017c17be_o.jpg",
                                "https://farm9.staticflickr.com/8637/16855040322_57671ab8eb_o.jpg"
                            ]
                        },
                        "rocket": {
                            "rocket_name": "Falcon 9"
                        },
                        "details": null,
                        "launch_success": true,
                        "id": "17"
                    },
                    {
                        "mission_name": "OG-2 Mission 2",
                        "launch_date_local": "2015-12-22T21:29:00-04:00",
                        "launch_site": {
                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                        },
                        "links": {
                            "video_link": "https://www.youtube.com/watch?v=O5bTbVbe4e4",
                            "wikipedia": "https://en.wikipedia.org/wiki/Falcon_9_flight_20",
                            "flickr_images": [
                                "https://farm2.staticflickr.com/1648/23827554109_837b21739e_o.jpg",
                                "https://farm1.staticflickr.com/597/23802553412_d41e4dcc64_o.jpg",
                                "https://farm6.staticflickr.com/5806/23802550622_9ff8c90098_o.jpg",
                                "https://farm1.staticflickr.com/571/23604164970_2a1a2366e4_o.jpg",
                                "https://farm6.staticflickr.com/5773/23271687254_5e64d726ba_o.jpg",
                                "https://farm6.staticflickr.com/5766/23526044959_5bfe74bc88_o.jpg",
                                "https://farm6.staticflickr.com/5723/23785609832_83038751d1_o.jpg",
                                "https://farm1.staticflickr.com/715/23833499336_d3fde6a25a_o.jpg"
                            ]
                        },
                        "rocket": {
                            "rocket_name": "Falcon 9"
                        },
                        "details": "Total payload mass was 2,034 kg (4,484 lb) : 11 satellites weighing 172 kg each, plus a 142-kg mass simulator. This was the first launch of the upgraded v1.1 variant (later called Falcon 9 Full Thrust), with a 30 percent power increase. Orbcomm had originally agreed to be the third flight of the enhanced-thrust rocket, but the change to the maiden flight position was announced in October 2015. SpaceX received a permit from the FAA to land the booster on solid ground at Cape Canaveral, and succeeded.",
                        "launch_success": true,
                        "id": "25"
                    },
                    {
                        "mission_name": "FalconSat",
                        "launch_date_local": "2006-03-25T10:30:00+12:00",
                        "launch_site": {
                            "site_name_long": "Kwajalein Atoll Omelek Island"
                        },
                        "links": {
                            "video_link": "https://www.youtube.com/watch?v=0a_00nJ_Y88",
                            "wikipedia": "https://en.wikipedia.org/wiki/DemoSat",
                            "flickr_images": []
                        },
                        "rocket": {
                            "rocket_name": "Falcon 1"
                        },
                        "details": "Engine failure at 33 seconds and loss of vehicle",
                        "launch_success": false,
                        "id": "1"
                    },
                    {
                        "mission_name": "CRS-1",
                        "launch_date_local": "2012-10-08T20:35:00-04:00",
                        "launch_site": {
                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                        },
                        "links": {
                            "video_link": "https://www.youtube.com/watch?v=-Vk3hiV_zXU",
                            "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-1",
                            "flickr_images": []
                        },
                        "rocket": {
                            "rocket_name": "Falcon 9"
                        },
                        "details": "CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner's contractual right to decline a second ignition of the second stage under some conditions.",
                        "launch_success": true,
                        "id": "9"
                    }
                ]
            }
        }
    }
]

const component: JSX.Element = (
    <MockedProvider mocks={mocks} addTypename={false}>
        <SpaceX/>
    </MockedProvider>
);

test('it should show loading... when the SpaceX component renders', () => {
    render(component);
    const loadingText = screen.getByText(/loading.../i);
    expect(loadingText).toBeInTheDocument();
});

test('it should show five launches after data has loaded', async () => {
    render(component);
    await new Promise(resolve => setTimeout(resolve, 0));
    const launches = screen.getAllByTitle(/launchitem/i);
    expect(launches.length).toEqual(5)
});
