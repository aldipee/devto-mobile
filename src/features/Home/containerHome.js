import { connect } from 'react-redux';
import { requestRecentNews } from 'redux/actions/Home';
import Home from './componentHome';


const mapStateToProps = (state) => {
  return {
    globalReducer: state.globalReducer,
    loading : state.homeReducer.loading
  };
};

const mapDispatchToProps = {
  requestRecentNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
