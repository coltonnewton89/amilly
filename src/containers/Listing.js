import { connect } from 'react-redux'
import Listing from '../components/Listing'
// import {removeBusiness} from '../redux/action'
import { removeBusiness } from '../redux/actions'

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        business: state.business,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: index => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)