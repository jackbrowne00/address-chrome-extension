console.log("Pasting Data");

(() => {

  chrome.storage.local.get(['address'], (CS) => {
    if (CS.address) {
      const fullName = document.getElementById('address-ui-widgets-enterAddressFullName');
      fullName.value = CS.address['Post to'];

      const phoneNumber = document.getElementById('address-ui-widgets-enterAddressPhoneNumber');
      phoneNumber.value = CS.address['Phone'];

      const postCode = document.getElementById('address-ui-widgets-enterAddressPostalCode');
      postCode.value = CS.address['Postcode'];

      const addressLine1 = document.getElementById('address-ui-widgets-enterAddressLine1');
      addressLine1.value = CS.address['Street'].replace('ebay', '');

      if (CS.address['']) {
        const addressLine1 = document.getElementById('address-ui-widgets-enterAddressLine2');
        addressLine1.value = CS.address[''].replace('ebay', '');
        
      }
      const city = document.getElementById('address-ui-widgets-enterAddressCity');
      city.value = CS.address['City'];

      const county = document.getElementById('address-ui-widgets-enterAddressDistrictOrCounty');
      county.value = CS.address['State/Province'];
    }

  })


})()