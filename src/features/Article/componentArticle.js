

import React, { useEffect, useState } from 'react';
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
import { connect } from 'react-redux'

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

const w = Dimensions.get('window')



const placeHolder = Array.from({ length: 10 }, (v, k) => k)
const ArticleLoading = (props) =>(
    <>
    <Placeholder Animation={Fade} >
    <PlaceholderMedia isRound={false} style={[props.style], Styles.containerImage} />
        <View style={[Styles.containerTitle, {paddingTop : 10}]}>
          <PlaceholderLine style={{width : '100%'}} />
          <PlaceholderLine style={{width : '100%'}} />
          <PlaceholderLine style={{width : '100%'}} />
        </View>
        <View style={[Styles.containerContent, { paddingTop : 35}]} >
            <PlaceholderLine style={{width : '60%', marginBottom : 36}} />
            {placeHolder.map((data, index) =>   <PlaceholderLine key={index} style={{width : '100%'}} /> )}
        </View>

    </Placeholder>
    </>
)


const Article = (props) => {
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
                    <ScrollView>
                             <ArticleLoading />
                    </ScrollView>
               
                ) : (
                    <ScrollView style={{ flex: 1 }} stickyHeaderIndices={[1]}>
                        {/* Big Image */}
                        {DATA && DATA.attachments && DATA.attachments.length !== 0 && (
                            <View style={Styles.containerImage}>
                                <ProgressiveImage resizeMode="cover" thumbnailSource={{ uri: `${DATA && DATA.attachments && DATA.attachments[0].images['post-thumbnail'].url}` }}
                                    source={{ uri: `${DATA && DATA.attachments && DATA.attachments[0].images.full.url}` }}
                                    style={Styles.image} />
                            </View>
                        )}
                        {/* End Of big Image */}

                        {/* Render Title */}
                        <View style={Styles.containerTitle}>
                            <Text style={Styles.textTitle}>{  DATA && DATA.title}</Text>
                            <Text style={Styles.textDate}>{`${DATA  && DATA.date && formatTime(DATA.date, 'YYYY-MM-DD HH:mm:ss', 'dddd DD MMMM YYYY')} | ${DATA && DATA.categories &&  DATA.categories[0].title}`}</Text>
                        </View>

                        {/* Render HTML */}
                        <View style={Styles.containerContent}>
                            <HTML html={DATA  && DATA.content} imagesMaxWidth={Dimensions.get('window').width} tagsStyles={HTMLTagStyle} />
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
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.00,
    },
    textTitle : { fontWeight: 'bold', fontSize: 18 },
    textDate : { fontSize: 14, color: '#878787' },
    containerContent : { paddingHorizontal: 20, backgroundColor: '#fff', marginTop: 10, marginBottom: 20 }

})

const HTMLTagStyle = {
    p: {
        color: '#000',
        fontSize: 17,
        lineHeight: 25,
        marginTop: 25,
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
