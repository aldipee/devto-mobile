import { connect } from 'react-redux';
import { requestRecentNews } from 'redux/actions/Home';
import Article from './componentArticle';


const mapStateToProps = (state) => {
    return {
        globalReducer: state.globalReducer,
        loading: state.homeReducer.loading
    };
};

const mapDispatchToProps = {
    requestRecentNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
