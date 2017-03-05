const storage = window.localStorage || {}

const auth = {
    login (email, pass) {
        if (email === 'test@email.com' && pass === 'password') {
            Object.assign(storage, {
                token: 'ACTIVE',
                user: 'test'
            })
            return true
        } else {
            return false
        }
    },

    getToken () {
        return storage.token
    },

    logout (cb) {
        const data = ['token', 'user']
        data.map(key => delete storage[key])
        if (cb) cb()
        this.onChange(false)
    },

    loggedIn () {
        return !!storage.token
    },

    onChange () {},

    redirect (nextState, replace) {
        if (!auth.loggedIn()) {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            })
        }
    }
}

export default auth