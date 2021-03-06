import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import EventBoard from "./EventBoard/EventBoard";
import { CreateEvent } from "./CreateEvent/CreateEvent";
import EventDetails from "./EventDetails/EventDetails";

const Stack = createStackNavigator();

export const Event = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Event Board" component={EventBoard} />
            <Stack.Screen name="Create Event" component={CreateEvent} />
            <Stack.Screen name="Event Details" component={EventDetails} />
        </Stack.Navigator>
    )
}