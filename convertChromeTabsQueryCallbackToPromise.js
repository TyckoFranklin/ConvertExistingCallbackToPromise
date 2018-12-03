function getTabAsync(options) {
    const reject = (e) => { console.log("rejected:", e); }
    return new Promise(function (resolve, reject) {
        chrome.tabs.query(options, resolve);
    });
}

getTabAsync({ active: true }).then((a) => { console.log(a) });