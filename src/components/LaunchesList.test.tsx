import React from 'react';
import SpaceX from "./SpaceX";
import {MockedProvider} from '@apollo/client/testing';
import {fireEvent, render, screen} from "@testing-library/react";
import {mocks} from "./SpaceX.test";


const component: JSX.Element = (
    <MockedProvider mocks={mocks} addTypename={false}>
        <SpaceX/>
    </MockedProvider>
);

test('Clicking on a launch opens up its details', async () => {
    render(component)
    await new Promise(resolve => setTimeout(resolve, 0));
    const LaunchItem = screen.getAllByTitle(/launchitem/i)[0];
    fireEvent.click(LaunchItem);
    const site_name_long = screen.getByTitle(/site_name_long/i);
    expect(site_name_long.textContent).toBe('Cape Canaveral Air Force Station Space Launch Complex 40')
})