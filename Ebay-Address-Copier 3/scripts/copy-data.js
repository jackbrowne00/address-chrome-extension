console.log("Running Script");

(() => {
    const details = document.querySelector('.shipping-details');
    const keys = [...details.querySelectorAll('dt')].map(item => item.innerText);
    const values = [...details.querySelectorAll('dd')].map(item => item.innerText);

    const result =  values.reduce(function(result, field, index) {
        result[keys[index]] = field;
        return result;
      }, {})
      
    chrome.storage.local.set({address: result});


})()
