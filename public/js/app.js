var apiVersion = 'v30.0',
clientId = '3MVG9KI2HHAq33RyxiQvWKh1_dQ1Io6io8sMu2mJ9z1l3yomNnG8k2krPHQCfXYcDrD5g0l0NjVBtA1P5DMNd',
loginUrl = 'https://login.salesforce.com/',
//redirectURI = 'https://test09152015.herokuapp.com/oauthcallback.html',
    redirectURI = 'https://test091520151.herokuapp.com/oauthcallback.html',
proxyURL = 'http://localhost:5000/proxy/',
client = new forcetk.Client(clientId, loginUrl, proxyURL);

function login() {
    var url = loginUrl + 'services/oauth2/authorize?display=popup&response_type=token'
                + '&client_id=' + encodeURIComponent(clientId)
                + '&redirect_uri=' + encodeURIComponent(redirectURI);
    window.open(url);
}

function oauthCallback(response) {
    if (response && response.access_token) {
        client.setSessionToken(response.access_token,
                               apiVersion,
                               response.instance_url);
        console.log('OAuth authentication succeeded');
        //etSessions();
    } else {
        alert("AuthenticationError: No Token");
    }
}

login();