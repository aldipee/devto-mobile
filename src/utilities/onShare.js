import React from 'react'
import Share from 'react-native-share';

export const onShare = async (link) =>{
    try {
     const shareOptions = {
       title: 'Share via',
       url: link,
       failOnCancel : false
     };
 
     const res = await Share.open(shareOptions)
     console.log(res,'resShare')
    } catch (error) {
      console.log(error,'resShare')
    }
   }