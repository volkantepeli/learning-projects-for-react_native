import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './MembersCard.style';

const MembersCard = ({members}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:members.image}} />
            <View style={styles.inner_container}>
            <Text style={styles.name}>{members.name}</Text>
            <Text style={styles.fortune}>{members.fortune}</Text>
            <Text style={styles.about}>{members.about}</Text>
            </View>
        </View>
    );
};

export default MembersCard;