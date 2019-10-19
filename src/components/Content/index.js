import { connect } from 'react-redux';
import { changeParent, editContent, saveContent } from 'store/action-creators';
import { getContent, getDraft } from 'store/selectors';
import UiComponent from './Content';

const mapStateToProps = (state, props) => ({
  content: getContent(state, props),
  draft: getDraft(state),
});

const mapDispatchToProps = {
  changeParent,
  editContent,
  saveContent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UiComponent);
