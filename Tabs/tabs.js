import React,{ Component } from 'react';

import { Text, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import HomeIcon from '../Assets/home.png';
import ProfileIcon from '../Assets/user.png';

export class Tabs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'home'
        }
    }
    render() {
        return(
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={HomeIcon} style={{width: 25, height: 25}}/>}
                    renderSelectedIcon={() => <Image source={HomeIcon} style={{width: 25, height: 25}}/>}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Text>Mi pantalla de inicio</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() => <Image source={ProfileIcon} style={{width: 25, height: 25}}/>}
                    renderSelectedIcon={() => <Image source={ProfileIcon} style={{width: 25, height: 25}}/>}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <Text>Mi pantalla de perfil xdx</Text>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }

}