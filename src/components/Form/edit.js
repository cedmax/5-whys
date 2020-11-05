import { connect } from 'react-redux';
import { saveContent, typeValue } from 'store/action-creators';
import { getDraft, getCurrentValue } from 'store/selectors';
import UiComponent from './Form';

const mapStateToProps = (state, props) => ({
  draft: getDraft(state),
  value: getCurrentValue(state),
});

const mapDispatchToProps = {
  onSave: saveContent,
  onType: typeValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(UiComponent);
