

function cTPResolveRejectArguments(callbackBasedFunction, nArguments) {
    let [a, ...b] = arguments;
    return new Promise((resolve, reject) => {
        a(resolve, reject, ...b);
    });
}

function cTPArgumentResolve(callbackBasedFunction, options) {    
    return new Promise((resolve, reject) => {
        try {
            callbackBasedFunction(options, resolve);
        } catch (e) {
            return reject(e);
        }
    });
}


cTPArgumentResolve(chrome.tabs.query, { active: true })
.then((a) => { console.log(a) })
.catch((a) => { console.log("Error message in catch:  ", a) });
