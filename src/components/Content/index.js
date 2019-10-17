import { connect } from 'react-redux';
import { changeParent, editContent } from 'store/action-creators';
import { getContent, getDraft } from 'store/selectors';
import UiComponent from './Content';

const mapStateToProps = (state, props) => ({
  content: getContent(state, props),
  draft: getDraft(state),
});

const mapDispatchToProps = {
  changeParent,
  editContent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UiComponent);
