document.querySelector("button[id='Paste_Data']").addEventListener('click', () => {

    const query = { active: true, currentWindow: true };
    chrome.tabs.query(query, (tabs) => {
        const currentTab = tabs[0];
        chrome.tabs.executeScript(currentTab.id, { file: 'scripts/paste-data.js' });
    })
})

const setListUI = async () => {
    const listData = document.querySelector('[name="selectedList"]');
    chrome.storage.local.get(['address'], (data) => {
        Object.keys(data.address).forEach(item => {
            let option = document.createElement("option");
            option.value = item;
            option.text = item + "\n" + data.address[item];
            listData.add(option);
        })
    });
};

setListUI();

document.querySelector("button[id='Copy_Data']").addEventListener('click', () => {

    const query = { active: true, currentWindow: true };
    chrome.tabs.query(query, (tabs) => {
        const currentTab = tabs[0];
        chrome.tabs.executeScript(currentTab.id, { file: 'scripts/copy-data.js' });
    })
    updateData();
})

document.querySelector("button[id='RESET']").addEventListener('click', () => {

    chrome.storage.local.set({ address: {} })
    updateData();
})

const updateData = () => {
    document.querySelector('[name="selectedList"]').innerHTML = '';
}








