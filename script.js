const words = [
    { kanji: "日本", hiragana: "にほん" }, // Japan
    { kanji: "学校", hiragana: "がっこう" }, // School
    { kanji: "友達", hiragana: "ともだち" }, // Friend
    { kanji: "食べる", hiragana: "たべる" }, // To eat
    { kanji: "見る", hiragana: "みる" } // To see
];

document.getElementById('new-word-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];

    document.getElementById('kanji').textContent = selectedWord.kanji;
    document.getElementById('hiragana').textContent = selectedWord.hiragana;
});