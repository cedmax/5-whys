import { connect } from 'react-redux';
import { changeParent } from 'store/action-creators';
import { getContent } from 'store/selectors';
import UiComponent from './Content';

const mapStateToProps = (state, props) => ({
  content: getContent(state, props),
});

const mapDispatchToProps = {
  changeParent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UiComponent);
