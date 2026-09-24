const topics = document.querySelectorAll('#topics > div');
const selectElem = document.getElementById('webdevlist');

selectElem.addEventListener('change', function () {
    topics.forEach(function (topic) {
        topic.classList.remove('sel');
        topic.classList.add('unsel');
    });

    const selectedTopic = document.getElementById(selectElem.value);

    if (selectedTopic) {
        selectedTopic.classList.remove('unsel');
        selectedTopic.classList.add('sel');
    }
});
