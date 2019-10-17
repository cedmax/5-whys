import { connect } from 'react-redux';
import { saveContent } from 'store/action-creators';
import { getDraft } from 'store/selectors';
import UiComponent from './EditForm';

const mapStateToProps = (state, props) => ({
  draft: getDraft(state),
});

const mapDispatchToProps = {
  saveContent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UiComponent);
