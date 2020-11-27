import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Animated, { Easing } from 'react-native-reanimated'
const { Value, timing } = Animated




class Toggle extends Component {
    constructor(props) {
        super(props)
        this.scrollX = new Value(0)
      
        this.animatedValue  = this.props.isOn ?  new Animated.Value(28) : new Animated.Value(0) 
    }


    toggleHandle = (e) => {
        Animated.timing(
            this.animatedValue,
            {
                toValue: !this.props.isOn ? 28 : 0,
                duration: 250,         // in milliseconds, default is 500
                easing: Easing.bounce, // Easing function, default is Easing.inOut(Easing.ease)
                delay: 0,
            }
        ).start()
        // this.setState(
        //     { isOn: !this.state.isOn },
        //     () => {
        //         Animated.timing(
        //             this.state.animatedValue,
        //             {
        //                 toValue: this.state.isOn ? 28 : 0,
        //                 duration: 250,         // in milliseconds, default is 500
        //                 easing: Easing.bounce, // Easing function, default is Easing.inOut(Easing.ease)
        //                 delay: 0,
        //             }
        //         ).start()
        //     }
        // )
        this.props.onChange()
    }

    render() {


        return (

            <TouchableOpacity
                activeOpacity={0.5}
                style={{
                    width: this.props.width,
                    height: this.props.height,
                    borderRadius: 16,
                    padding: 4,
                    backgroundColor:this.props.isOn ? '#fff' : '#CDD3D9',
                }}
                onPress={()=> this.toggleHandle()}
            >
                <Animated.View style={{
                    width: 24,
                    height: 24,
                    borderRadius: 24,
                    backgroundColor: this.props.isOn ?'rgb(46,47,50)' : '#fff',
                    transform: [{
                        translateX: this.animatedValue,
                    }]
                }} />
                
            </TouchableOpacity>

        );
    }
}



export default Toggle;
