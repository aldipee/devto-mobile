import { connect } from 'react-redux';
import { requestRecentNews } from 'redux/actions/Home';
import { saveItem, unsavedItem } from 'redux/actions/Global';
import Blog from './blog';


const mapStateToProps = (state) => {
    return {
        globalReducer: state.globalReducer,
        loading: state.homeReducer.loading
    };
};

const mapDispatchToProps = {
    requestRecentNews,
    saveItem,
    unsavedItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
