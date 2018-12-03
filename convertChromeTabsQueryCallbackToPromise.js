function getTabAsync() {
    const reject = (e) => { console.log("rejected:", e); }
    return new Promise(function (resolve, reject) {
        chrome.tabs.query({ active: true }, resolve);
    });
}

getTabAsync().then((a) => { console.log(a) });