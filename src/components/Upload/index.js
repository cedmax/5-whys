import { connect } from 'react-redux';
import { getAllContent } from 'store/selectors';
import { restoreData } from 'store/action-creators';
import UiComponent from './Upload';

const mapStateToProps = (state) => ({
  content: getAllContent(state),
});

const mapDispatchToProps = {
  restoreData,
};

export default connect(mapStateToProps, mapDispatchToProps)(UiComponent);
