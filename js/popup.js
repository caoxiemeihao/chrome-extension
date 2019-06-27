
; (function ($) {
  // console.log(chrome);

  $('#change-color').click(ev => {
    let oBtn = $(ev.target);

    // chrome.storage.sync.get('color', data => {
    //   oBtn.css('background-color', data.color).text(data.color);
    //   console.log(data);
    // });

    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: `
          document.body.style.backgroundColor = 'aliceblue';
          ` }
      );
    });
  });


}(jQuery));
