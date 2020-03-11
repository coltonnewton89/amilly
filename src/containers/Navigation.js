import { connect} from 'react-redux'
import Navigation from '../components/Navigation'
import { loginUser } from '../redux/actions'

const mapStateToProps = (state) => {
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