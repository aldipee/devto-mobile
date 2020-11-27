import { connect } from 'react-redux';
import { saveItem, unsavedItem } from 'redux/actions/Global';
import Saved from './componentSaved';


const mapStateToProps = (state) => {
  return {
    globalReducer: state.globalReducer,
    data : state.globalReducer.savedItems,
    loading: state.homeReducer.loading
  };
};

const mapDispatchToProps = {
  saveItem,
  unsavedItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Saved);
