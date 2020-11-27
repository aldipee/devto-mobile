import { connect } from 'react-redux';
import { switchTheme } from 'redux/actions/Global';
import Settings from './componentSettings';


const mapStateToProps = (state) => {
    return {
        globalReducer: state.globalReducer,
        loading: state.homeReducer.loading
    };
};

const mapDispatchToProps = {
    switchTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
