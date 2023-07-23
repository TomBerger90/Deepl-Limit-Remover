chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.status === 'complete' && tab.url && tab.url.includes('deepl.com')) {
        chrome.cookies.getAll({url: tab.url}, function(cookies) {
            for(let i=0; i<cookies.length; i++) {
                if(cookies[i].name !== 'privacySettings') {
                    chrome.cookies.remove({url: 'https://deepl.com' + cookies[i].path, name: cookies[i].name});
                }
            }
        });
    }
});
