export const addBusiness = (business) => {
    return {
        type: 'ADD_BUSINESS',
        value: business
    }
}

export const removeBusiness = (index) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}

export const loginUser = (user) => {
    return {
        type: 'LOGIN',
        value: user
    }
}

export const logoutUser = (username) => {
    return {
        type: 'LOGOUT',
        value: username
    }
}
