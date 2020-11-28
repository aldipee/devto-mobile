

import React, { useEffect, useState, } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Dimensions,
    Text
} from 'react-native';
import HTML from 'react-native-render-html';
import momentWithLocales from 'moment/min/moment-with-locales';
import { connect, useSelector } from 'react-redux'

import { requestNewsDetail } from 'redux/actions/Article'
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";
// import DATA from 'api/single.json'
// Local Import
import ProgressiveImage from 'components/progressiveImage';
import Icon from 'react-native-vector-icons/Ionicons'

const w = Dimensions.get('window')



const placeHolder = Array.from({ length: 10 }, (v, k) => k)
const ArticleLoading = ({theme, ...props}) =>(
    <>
    <Placeholder  >
    <PlaceholderMedia isRound={false} style={[Styles.containerImage,{ backgroundColor : theme.PLACEHOLDER_COLOR}]} />
        <View style={[Styles.containerTitle, {paddingTop : 10, backgroundColor : theme.PRIMARY_BACKGROUND_COLOR}]}>
          <PlaceholderLine style={{width : '100%', backgroundColor : theme.PLACEHOLDER_COLOR}}  />
          <PlaceholderLine style={{width : '100%', backgroundColor : theme.PLACEHOLDER_COLOR}} />
          <PlaceholderLine style={{width : '100%', backgroundColor : theme.PLACEHOLDER_COLOR}} />
        </View>
        <View style={[Styles.containerContent, { paddingTop : 35, backgroundColor : theme.PRIMARY_BACKGROUND_COLOR}]} >
            <PlaceholderLine style={{width : '60%', marginBottom : 36, backgroundColor : theme.PLACEHOLDER_COLOR}} />
            {placeHolder.map((data, index) =>   <PlaceholderLine key={index} style={{width : '100%', backgroundColor : theme.PLACEHOLDER_COLOR}} /> )}
        </View>

    </Placeholder>
    </>
)


const Article = (props) => {
    const theme = useSelector(state => state.globalReducer.theme)
    const {DATA} = props
    const formatTime = (dateTime, currentFormat, toFormat) => {
        const date = momentWithLocales(dateTime, currentFormat);
        date.locale('id');
        return date.format(toFormat);
    }
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        props.requestNewsDetail(props.navigation.getParam('idPost'))
        console.log(props.navigation.getParam('idPost'), 'singleArticle')
       
    }, [])
    const printLog = (data) =>{
        console.log(data, 'printLog')
        return data
    }

  
    return (
        <>
            <StatusBar barStyle="dark-content" />
                {props.loading ? (
                    <ScrollView style={{backgroundColor : theme.PRIMARY_BACKGROUND_COLOR}}>
                             <ArticleLoading theme={theme} />
                    </ScrollView>
               
                ) : (
                    <ScrollView style={{ flex: 1 , backgroundColor : theme.PRIMARY_BACKGROUND_COLOR}} >
                        {/* Big Image */}


                        {/* RenderMeta Data */}
                        <View style={[Styles.containerMeta, {backgroundColor : theme.PRIMARY_BACKGROUND_COLOR}]}>
                            <Icon color={theme.SECONDARY_TEXT_COLOR} name='md-earth' style={{backgroundColor : '#e3e3e3', padding : 3, borderRadius : 6}} size={17}/>
                            <Text style={Styles.textDate}>{ DATA &&  DATA.categories && DATA.categories[0].title} </Text>
                            <Icon color={theme.SECONDARY_TEXT_COLOR} name='ellipse' size={3}/>
                            <Text style={Styles.textDate}>{`${DATA  && DATA.date && formatTime(DATA.date, 'YYYY-MM-DD HH:mm:ss', 'DD MMMM YYYY, HH:mm')} WIB`}</Text>
                        </View>

                        {/* Render Title */}
                        <View style={[Styles.containerTitle, {backgroundColor : theme.PRIMARY_BACKGROUND_COLOR}]}>
                            <Text style={[Styles.textTitle, {color : theme.PRIMARY_TEXT_COLOR}]}>{  DATA && DATA.title}</Text>
                        </View>

                        {/* Render Author */}
                        <View style={[Styles.containerAuthor, {backgroundColor : theme.PRIMARY_BACKGROUND_COLOR}]}>
                            <Text style={[Styles.author, {color : theme.PRIMARY_TEXT_COLOR}]}>{`${DATA && DATA.author && DATA.author.name}, ${DATA && DATA.author && DATA.author.description}`} </Text>
                        </View>

                        {/* Seperator */}
                        <View style={[Styles.seperator, { backgroundColor: theme.SEPERATOR_COLOR }]} />

                        {DATA && DATA.attachments && DATA.attachments.length !== 0 && (
                            <View style={Styles.containerImage}>
                                <ProgressiveImage resizeMode="cover" thumbnailSource={{ uri: `${DATA && DATA.attachments && DATA.attachments[0].images['post-thumbnail'].url}` }}
                                    source={{ uri: `${DATA && DATA.attachments && DATA.attachments[0].images.full.url}` }}
                                    style={Styles.image} />
                            </View>
                        )}
                        {/* End Of big Image */}


                        {/* Render HTML */}
                        <View style={[Styles.containerContent, {backgroundColor : theme.PRIMARY_BACKGROUND_COLOR}]}>
                            <HTML html={DATA  && DATA.content} imagesMaxWidth={Dimensions.get('window').width} tagsStyles={{...HTMLTagStyle, p : {
                                color : theme.PRIMARY_TEXT_COLOR,
                                fontSize: 18,
                                lineHeight: 27,
                                marginTop: 35,
                                fontFamily : 'Lusitana-Regular'
                            }}} />
                        </View>
                        </ScrollView>
                )}
        </>
    );
};

const Styles = StyleSheet.create({
    containerImage : { height: 200, width: '100%' },
    image : { height: '100%', width: '100%' },
    containerTitle : {
        paddingHorizontal: 20, backgroundColor: '#fff', paddingTop: 3, paddingBottom: 5,
   
        
    },
    author : {
        fontFamily : 'Lusitana-Regular',
        fontSize : 15
    },
    containerMeta : {
        paddingHorizontal: 20, 
        paddingTop: 3, 
        paddingBottom: 5,
        flexDirection : 'row',
        alignItems : 'center',
        
    },
    containerAuthor : {
        paddingHorizontal: 20, 
        marginBottom : 10
    },
    textTitle : {fontSize: 21, fontFamily : 'Lato-Black', lineHeight : 33, marginBottom :10, paddingBottom : 10 },
    textDate : { fontSize: 14, color: '#878787', fontFamily : 'Lato-Regular', marginHorizontal : 6},
    containerContent : { paddingHorizontal: 20, backgroundColor: '#fff', marginTop: 10, marginBottom: 20 },
    seperator: { backgroundColor: '#ebebeb', height: 1.3, width: '90%', flex: 1, alignSelf: 'center', marginBottom : 30 }

})

const HTMLTagStyle = {
    p: {
        color: '#000',
        fontSize: 17,
        lineHeight: 25,
        marginTop: 25,
        fontFamily : 'Lato-Bold'
    },
    img: {
        width: 600
    }
}

const mapStateToProps = (state) =>({
    DATA : state.articleReducer.currentPost,
    loading : state.articleReducer.loading
})

export default connect(mapStateToProps, {requestNewsDetail})(Article);
