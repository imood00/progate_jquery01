$(function() {
  $('.btn').click(function() {
    // $('#title')を変数$titleに代入してください
    var $title = $('#title');
    
    
    // 「#title」に対する3つのメソッドを、変数を使って書き換えてください
    $title.css('color', 'red');
    $title.html('こんばんは、にんじゃわんこさん');
    $title.fadeOut(1000);
    
    // 「#text」に対する3つのメソッドを、メソッドチェーンを使って書き換えてください
    var $text = $("#text")
    
    $text.css('color', 'blue');
    $text.html('<h3>jQueryをマスターしましょう！</h3>');
    $text.fadeOut(1000);
  });
});