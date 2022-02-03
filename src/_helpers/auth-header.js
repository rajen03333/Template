export function authHeader() {
    // return authorization header with jwt token
    let tokenObj = JSON.parse(sessionStorage.getItem('user'));
    if (tokenObj && tokenObj.token) {
        return {
            'Authorization': 'Bearer ' + tokenObj.token,
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': '*/*',
            'cache-control': 'no-cache'
        }
    } else {
        return {};
    }
}
