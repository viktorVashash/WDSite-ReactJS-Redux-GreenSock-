import { connect } from 'react-redux';
import { MainView } from '../../../components/components';
import { moveToIndex, menu } from '../../../actions/index';

function mapStateToProps(state) {
  return {
    homePage: state.homePage,
    menuStatus: state.menuStatus
  };
};

export default connect(mapStateToProps, { moveToIndex, menu })(MainView);
