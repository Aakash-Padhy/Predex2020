import {connect} from 'react-redux';
import {predict} from '../../redux/actions/authAction';
import Predict from './Predict'
import {bindActionCreators} from 'redux';

function mapDispatchToProps(dispatch){
return bindActionCreators({predict},dispatch);
}
export default connect(mapDispatchToProps)(Predict);