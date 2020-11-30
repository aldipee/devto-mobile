import { connect } from 'react-redux';
import { requestRecentNews } from 'redux/actions/Home';
import { saveItem, unsavedItem } from 'redux/actions/Global';
import Rilis from './rilis';


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

export default connect(mapStateToProps, mapDispatchToProps)(Rilis);
