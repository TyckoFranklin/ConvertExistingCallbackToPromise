function getTabAsync(options) {
    return new Promise(function (resolve, reject) {
        try {
            chrome.tabs.query(options, resolve);
        } catch (e) {
            return reject(e);
        }
    });
}

getTabAsync({ active: true })
    .then((a) => { console.log(a) })
    .catch((a) => { console.log("Error message in catch: ", a) });



function getTabAsyncProofWithPause(options) {
    return new Promise(function (resolve, reject) {
        try {
            setTimeout(() => {
                chrome.tabs.query(options, resolve);
            }, 5000);
        } catch (e) {
            return reject(e);
        }
    });
}

getTabAsyncProofWithPause({ active: true })
    .then((a) => { console.log(a) })
    .catch((a) => { console.log("Error message in catch: ", a) });