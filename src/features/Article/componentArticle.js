

import React, { useEffect, useState, useRef } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Dimensions,
    Text,
    PixelRatio
} from 'react-native';
import HTML from 'react-native-render-html';
import momentWithLocales from 'moment/min/moment-with-locales';
import { connect, useSelector } from 'react-redux'
import Animated from 'react-native-reanimated';
import { requestNewsDetail } from 'redux/actions/Article'
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade,
} from "rn-placeholder";
import * as Progress from 'react-native-progress';
// import DATA from 'api/single.json'
// Local Import
import ProgressiveImage from 'components/progressiveImage';
import Icon from 'react-native-vector-icons/Ionicons'

const w = Dimensions.get('screen')



const placeHolder = Array.from({ length: 10 }, (v, k) => k)
const ArticleLoading = ({ theme, ...props }) => (
    <>
        <Placeholder  >

            <View style={[Styles.containerTitle, { paddingTop: 40, marginBottom: 40, backgroundColor: theme.SECONDARY_BACKROUND_COLOR }]}>
                <PlaceholderLine style={{ width: '100%', backgroundColor: theme.PLACEHOLDER_COLOR, height: 20 }} />
                <PlaceholderLine style={{ width: '100%', backgroundColor: theme.PLACEHOLDER_COLOR, height: 20 }} />
                <PlaceholderLine style={{ width: '100%', backgroundColor: theme.PLACEHOLDER_COLOR, height: 20 }} />
            </View>
            <PlaceholderMedia isRound={false} style={[Styles.containerImage, { backgroundColor: theme.PLACEHOLDER_COLOR }]} />
            <View style={[Styles.containerTitle, { paddingTop: 10, backgroundColor: theme.SECONDARY_BACKROUND_COLOR }]}>
                <PlaceholderLine style={{ width: '100%', backgroundColor: theme.PLACEHOLDER_COLOR }} />
                <PlaceholderLine style={{ width: '100%', backgroundColor: theme.PLACEHOLDER_COLOR }} />
                <PlaceholderLine style={{ width: '100%', backgroundColor: theme.PLACEHOLDER_COLOR }} />
            </View>
            <View style={[Styles.containerContent, { paddingTop: 35, backgroundColor: theme.SECONDARY_BACKROUND_COLOR }]} >
                <PlaceholderLine style={{ width: '60%', marginBottom: 36, backgroundColor: theme.PLACEHOLDER_COLOR }} />
                {placeHolder.map((data, index) => <PlaceholderLine key={index} style={{ width: '100%', backgroundColor: theme.PLACEHOLDER_COLOR }} />)}
            </View>

        </Placeholder>
    </>
)


const Article = (props) => {
    const scrollY = new Animated.Value(0)
    const theme = useSelector(state => state.globalReducer.theme)
    const { DATA } = props
    const formatTime = (dateTime, currentFormat, toFormat) => {
        const date = momentWithLocales(dateTime, currentFormat);
        date.locale('id');
        return date.format(toFormat);
    }
    const [heightContent, setHeightContent] = useState(0)
    const [currentHeight, setCurrentHeight] = useState(0)
    const scrollView = useRef(null)


    useEffect(() => {

        props.requestNewsDetail(props.navigation.getParam('idPost'))
        console.log(props.navigation.getParam('idPost'), 'singleArticle')
        console.log(PixelRatio.getPixelSizeForLayoutSize(), 'heightScren')

        console.log(Dimensions.get('screen'), 'scrollY')
    }, [])
    const handlerOnScroll = (event) => {
        console.log(currentHeight / heightContent, "PROGRESS")
        console.log(heightContent, currentHeight)
        setCurrentHeight(event.nativeEvent.contentOffset.y)
        setHeightContent(event.nativeEvent.contentSize.height - event.nativeEvent.layoutMeasurement.height)
    }


    return (
        <>
            <StatusBar barStyle="dark-content" />
            {props.loading ? (
                <ScrollView style={{ backgroundColor: theme.SECONDARY_BACKROUND_COLOR }}>
                    <View style={{ backgroundColor: '#000', flex: 1, height: 15 }} />
                    <ArticleLoading theme={theme} />
                </ScrollView>

            ) : (
                    <>
                        <Progress.Bar progress={currentHeight ? (currentHeight / heightContent) : 0} width={w.width} color={theme.SEMANTIC_COLOR} style={{ height: 3, borderRadius: 0, borderWidth: 0, backgroundColor: '#000', borderColor: "#000" }} />

                        <Animated.ScrollView
                            ref={scrollView}
                            decelerationRate={0.970}
                            onLayout={(e) => console.log(e.target, 'Layout')} style={{ flex: 1, backgroundColor: theme.SECONDARY_BACKROUND_COLOR }}
                            scrollEventThrottle={10000} onScroll={handlerOnScroll}
                        >

                            {/* Big Image */}

                            <View style={{ backgroundColor: '#000', flex: 1, height: 15 }} />

                            {/* RenderMeta Data */}
                            <View style={[Styles.containerMeta, { backgroundColor: theme.SECONDARY_BACKROUND_COLOR }]}>
                                <Icon color={theme.SECONDARY_TEXT_COLOR} name='md-earth' style={{ backgroundColor: '#e3e3e3', padding: 3, borderRadius: 6 }} size={17} />
                                <Text style={Styles.textDate}>{DATA && DATA.categories && DATA.categories[0].title} </Text>
                                <Icon color={theme.SECONDARY_TEXT_COLOR} name='ellipse' size={3} />
                                <Text style={Styles.textDate}>{`${DATA && DATA.date && formatTime(DATA.date, 'YYYY-MM-DD HH:mm:ss', 'DD MMMM YYYY, HH:mm')} WIB`}</Text>
                            </View>

                            {/* Render Title */}
                            <View style={[Styles.containerTitle, { backgroundColor: theme.SECONDARY_BACKROUND_COLOR }]}>
                                <Text style={[Styles.textTitle, { color: theme.PRIMARY_TEXT_COLOR }]}>{DATA && DATA.title}</Text>
                            </View>

                            {/* Render Author */}
                            <View style={[Styles.containerAuthor, { backgroundColor: theme.SECONDARY_BACKROUND_COLOR }]}>
                                <Text style={[Styles.author, { color: theme.PRIMARY_TEXT_COLOR }]}>{`${DATA && DATA.author && DATA.author.name}, ${DATA && DATA.author && DATA.author.description}`} </Text>
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
                            <View style={[Styles.containerContent, { backgroundColor: theme.SECONDARY_BACKROUND_COLOR }]}>
                                <HTML html={DATA && DATA.content} imagesMaxWidth={Dimensions.get('window').width} tagsStyles={{
                                    ...HTMLTagStyle, p: {
                                        color: theme.PRIMARY_TEXT_COLOR,
                                        fontSize: 18,
                                        lineHeight: 27,
                                        marginTop: 35,
                                        fontFamily: 'Lusitana-Regular'
                                    }
                                }} />
                            </View>
                        </Animated.ScrollView>

                    </>
                )}
        </>
    );
};

const Styles = StyleSheet.create({
    containerImage: { height: 200, width: '100%' },
    image: { height: '100%', width: '100%' },
    containerTitle: {
        paddingHorizontal: 20, backgroundColor: '#fff', paddingTop: 3, paddingBottom: 5,


    },
    author: {
        fontFamily: 'Lusitana-Regular',
        fontSize: 15
    },
    containerMeta: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',

    },
    containerAuthor: {
        paddingHorizontal: 20,
        marginBottom: 10
    },
    textTitle: { fontSize: 21, fontFamily: 'Lato-Black', lineHeight: 33, marginBottom: 10, paddingBottom: 10 },
    textDate: { fontSize: 14, color: '#878787', fontFamily: 'Lato-Regular', marginHorizontal: 6 },
    containerContent: { paddingHorizontal: 20, backgroundColor: '#fff', marginTop: 10, marginBottom: 20 },
    seperator: { backgroundColor: '#ebebeb', height: 1.3, width: '90%', flex: 1, alignSelf: 'center', marginBottom: 30 }

})

const HTMLTagStyle = {
    p: {
        color: '#000',
        fontSize: 17,
        lineHeight: 25,
        marginTop: 25,
        fontFamily: 'Lato-Bold'
    },
    img: {
        width: 600
    }
}

const mapStateToProps = (state) => ({
    DATA: state.articleReducer.currentPost,
    loading: state.articleReducer.loading
})

export default connect(mapStateToProps, { requestNewsDetail })(Article);
