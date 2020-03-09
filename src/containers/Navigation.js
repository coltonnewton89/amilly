import { connect} from 'react-redux'
import { Navigation } from '../components/Navigation'



const mapStateToProps = (props) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
loginUser: (username) => dispatch(loginUser(username))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation)