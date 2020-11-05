import { connect } from 'react-redux';
import { addContent, typeValue } from 'store/action-creators';
import { getActiveNode, getCurrentValue } from 'store/selectors';
import UiComponent from './Form';

const mapStateToProps = (state) => ({
  active: getActiveNode(state),
  value: getCurrentValue(state),
});

const mapDispatchToProps = {
  onSave: addContent,
  onType: typeValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(UiComponent);
