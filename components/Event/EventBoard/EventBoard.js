import React from 'react';
import { StyleSheet, FlatList, View, SafeAreaView } from 'react-native';
import EventItem from './EventItem';
import EventFilter from './EventFilter';
import { watchEventsChanged, getEvents } from '../../../reducers/events'
import { database } from '../../../config/config';
import { connect } from 'react-redux';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'white'
    },
})


function EventBoard({ route, navigation, events }) {
    const keyExtractor = (item, key) => key.toString();
    const renderItem = ({ item }) =>
        <EventItem
            title={item.title}
            description={item.description}
            date={item.date}
            image_url={item.image_url}
            location={item.location} />
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={events}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                ItemSeparatorComponent={renderSeparator}
            />
        </SafeAreaView>
    );
}

const renderSeparator = () => {
    return (
        <View
            style={{
                height: 1,
                backgroundColor: "#CED0CE",
            }}
        />
    );
};

const mapState = state => ({
    events: state.events,
})

const mapDispatch = dispatch => {
    dispatch(watchEventsChanged());
    return {};
}

export default connect(mapState, mapDispatch)(EventBoard);