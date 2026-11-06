// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28, days: 'TTh',
            instructor: 'Sis A'
        }
    ],
    enrollStudent: function(num) {
        // get the section that has sectionNum == num
        const theSection = aCourse.sections.find(section => section.sectionNum === num);
        // increment enrolled
        console.log(theSection)
        theSection.enrolled++;
    },
    dropStudent: function(num) {
        // get the section that has sectionNum == num
        const theSection = aCourse.sections.find(section => section.sectionNum === num);
        // increment enrolled
        console.log(theSection)
        theSection.enrolled--;
    },
};

// Sets header text
document.getElementById('courseName').textContent = aCourse.name
document.getElementById('courseCode').textContent = aCourse.code

function secTemplate(section) {
    return `<tr>
                <td>${section.sectionNum}</td>
                <td>${section.roomNum}</td>
                <td>${section.enrolled}</td>
                <td>${section.days}</td>
                <td>${section.instructor}</td>
            </tr>`
}
function setSections(sections) {
    const secEl = document.querySelector("#sections")
    const html = sections.map(secTemplate)
    secEl.innerHTML = html.join('');
}

setSections(aCourse.sections);
aCourse.enrollStudent(1);

function enrollHandler(ev) {
    console.log(ev)
    if (ev.target.id === "#enrollStudent")
        enrollStudent(num)
}

document.querySelector("#enrollStudent").addEventListener("click", enrollHandler)