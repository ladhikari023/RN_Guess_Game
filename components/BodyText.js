import React from 'react'
import {Text} from 'react-native'
import DefaultStyles from '../constants/default-styles'

function BodyText(props) {
  return (
    <Text style={{...DefaultStyles.customFont, ...props.style}}>
        {props.children}
    </Text>
  )
}


export default BodyText