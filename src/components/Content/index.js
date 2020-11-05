import { connect } from 'react-redux';
import { changeParent, editContent, enableCloud } from 'store/action-creators';
import { getContent, getDraft, getCloudActivation } from 'store/selectors';
import UiComponent from './Content';

const mapStateToProps = (state, props) => ({
  content: getContent(state, props),
  draft: getDraft(state),
  cloud: getCloudActivation(state),
});

const mapDispatchToProps = {
  changeParent,
  editContent,
  enableCloud,
};

export default connect(mapStateToProps, mapDispatchToProps)(UiComponent);
