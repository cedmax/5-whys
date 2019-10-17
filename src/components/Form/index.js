import { connect } from 'react-redux';
import { addContent } from 'store/action-creators';
import { getActiveNode } from 'store/selectors';
import UiComponent from './Form';

const mapStateToProps = state => ({
  active: getActiveNode(state),
});

const mapDispatchToProps = {
  onSave: addContent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UiComponent);
