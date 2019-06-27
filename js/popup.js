
; (function ($) {
  $('#change-color').click(ev => {
    let oBtn = $(ev.target);
    console.dir(oBtn, chrome, chrome.storage.sync);

    chrome.storage.sync.get('color', data => {
      oBtn.css('background-color', data.color).text(data.color);
      console.log(color);
    });
  });


}(jQuery));
