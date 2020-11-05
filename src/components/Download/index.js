import { connect } from 'react-redux';
import { getAllContent } from 'store/selectors';
import UiComponent from './Download';

const mapStateToProps = (state) => ({
  content: getAllContent(state),
});

export default connect(mapStateToProps)(UiComponent);
