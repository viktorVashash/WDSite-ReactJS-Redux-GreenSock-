import { connect } from 'react-redux';
import { Header } from '../../components/components';
import { menu } from '../../actions/index';

export default connect(null, { menu })(Header);
