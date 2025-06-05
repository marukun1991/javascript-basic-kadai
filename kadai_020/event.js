//ボタンを押すと、ボタンがクリックされましたと文字が変化する
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("btn");
    const textarea = document.getElementById("text");
    button.addEventListener("click", function() {
        textarea.textContent = "ボタンがクリックされました";
    });
});