//ボタンを押すと、2秒後にボタンがクリックされましたと文字が変化する
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("btn");
    const textarea = document.getElementById("text");
    button.addEventListener("click", function() {
        setTimeout(function() {
           textarea.textContent = "ボタンがクリックされました";
        }, 2000);
    });
});