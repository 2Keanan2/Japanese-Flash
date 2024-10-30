
const words = [
    { kanji: "こんにちは", hiragana: "こんにちは", definition: "Hello" },
    { kanji: "さようなら", hiragana: "さようなら", definition: "Goodbye" },
    { kanji: "ありがとう", hiragana: "ありがとう", definition: "Thank you" },
    { kanji: "すみません", hiragana: "すみません", definition: "Excuse me / I'm sorry" },
    { kanji: "はい", hiragana: "はい", definition: "Yes" },
    { kanji: "いいえ", hiragana: "いいえ", definition: "No" },
    { kanji: "おはよう", hiragana: "おはよう", definition: "Good morning" },
    { kanji: "こんばんは", hiragana: "こんばんは", definition: "Good evening" },
    { kanji: "おやすみ", hiragana: "おやすみ", definition: "Good night" },
    { kanji: "どういたしまして", hiragana: "どういたしまして", definition: "You're welcome" },
    { kanji: "はい、そうです", hiragana: "はい、そうです", definition: "Yes, that's right" },
    { kanji: "いいえ、違います", hiragana: "いいえ、ちがいます", definition: "No, that's not correct" },
    { kanji: "お元気ですか", hiragana: "おげんきですか", definition: "How are you?" },
    { kanji: "元気です", hiragana: "げんきです", definition: "I am fine" },
    { kanji: "お名前は何ですか", hiragana: "おなまえはなんですか", definition: "What is your name?" },
    { kanji: "私の名前は...", hiragana: "わたしのなまえは...", definition: "My name is..." },
    { kanji: "どこですか", hiragana: "どこですか", definition: "Where is it?" },
    { kanji: "これ", hiragana: "これ", definition: "This" },
    { kanji: "それ", hiragana: "それ", definition: "That" },
    { kanji: "あれ", hiragana: "あれ", definition: "That over there" },
    { kanji: "いくらですか", hiragana: "いくらですか", definition: "How much is it?" },
    { kanji: "助けて", hiragana: "たすけて", definition: "Help!" },
    { kanji: "大丈夫ですか", hiragana: "だいじょうぶですか", definition: "Are you okay?" },
    { kanji: "トイレはどこですか", hiragana: "といれはどこですか", definition: "Where is the bathroom?" },
    { kanji: "水", hiragana: "みず", definition: "Water" },
    { kanji: "食べ物", hiragana: "たべもの", definition: "Food" },
    { kanji: "飲み物", hiragana: "のみもの", definition: "Drink" },
    { kanji: "ご飯", hiragana: "ごはん", definition: "Rice / Meal" },
    { kanji: "肉", hiragana: "にく", definition: "Meat" },
    { kanji: "魚", hiragana: "さかな", definition: "Fish" },
    { kanji: "野菜", hiragana: "やさい", definition: "Vegetables" },
    { kanji: "果物", hiragana: "くだもの", definition: "Fruit" },
    { kanji: "パン", hiragana: "ぱん", definition: "Bread" },
    { kanji: "牛乳", hiragana: "ぎゅうにゅう", definition: "Milk" },
    { kanji: "お茶", hiragana: "おちゃ", definition: "Tea" },
    { kanji: "コーヒー", hiragana: "こーひー", definition: "Coffee" },
    { kanji: "お菓子", hiragana: "おかし", definition: "Snacks" },
];

document.getElementById('new-word-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];

    document.getElementById('kanji').textContent = selectedWord.kanji;
    document.getElementById('hiragana').textContent = selectedWord.hiragana;
    document.getElementById('definition').textContent = selectedWord.definition;

});