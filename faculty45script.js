function startFacultyBlockFlow() {
    document.getElementById('question-section').style.display = 'block';
    document.getElementById('faculty-cards').style.display = 'none';
    document.getElementById('question-title').innerText = 'Choose a Block';
    const blocks = ['BSH', 'RDB', 'CSE'];
    generateDynamicOptions(blocks, showFacultyCards);
}

function startSectionFacultyFlow() {
    document.getElementById('question-section').style.display = 'block';
    document.getElementById('faculty-cards').style.display = 'none';
    document.getElementById('question-title').innerText = 'Your Branch';
    const branches = ['B.Tech', 'B.Sc'];
    generateDynamicOptions(branches, handleBranchSelection);
}

function handleBranchSelection(selectedBranch) {
    if (selectedBranch === 'B.Tech') {
        const streams = ['CSE', 'ECE', 'Bio-Tech'];
        document.getElementById('question-title').innerText = 'Your Stream';
        generateDynamicOptions(streams, handleStreamSelection);
    } else if (selectedBranch === 'B.Sc') {
        const streams = ['Nursing'];
        document.getElementById('question-title').innerText = 'Your Stream';
        generateDynamicOptions(streams, handleStreamSelection);
    }
}

function handleStreamSelection(selectedStream) {
    const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'];
    document.getElementById('question-title').innerText = 'Your Semester';
    generateDynamicOptions(semesters, handleSemesterSelection);
}

function handleSemesterSelection(selectedSemester) {
    const sections = ['A', 'B', 'C'];
    document.getElementById('question-title').innerText = 'Your Section';
    generateDynamicOptions(sections, showFacultyCards);
}

function generateDynamicOptions(options, callback) {
    const dynamicOptionsContainer = document.getElementById('dynamic-options');
    dynamicOptionsContainer.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-outline-primary');
        button.innerText = option;
        button.onclick = () => callback(option);
        dynamicOptionsContainer.appendChild(button);
    });
}

function showFacultyCards(selectedOption) {
    const facultyData = [
        { name: 'Dr.Santosh Panda', designation: 'Professor', room: 'A-101', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8uN-EdcDCyEvbB1Xn-0MtV-ESQk9c2gzqQ&s' },
        { name: 'Dr. Monosmita khadenge', designation: 'Assistant Professor', room: 'B-202', img: 'https://educom.co/wp-content/uploads/2022/05/depositphotos_229021444-stock-photo-happy-female-university-professor-outstretched-copy.jpg' },
        { name: 'Dr. Priyadarshini kankodo', designation: 'Associate Professor', room: 'C-303', img: 'https://www.teachaway.com/sites/default/files/styles/threshold_992x992/public/college-instructor.jpg?itok=qg77Qirn' },
        { name: 'Dr. REBIKA sutili', designation: 'Lecturer', room: 'D-404', img: 'https://indiaeducation.net/wp-content/uploads/2022/03/TEACHER-8751-768x512.jpg' },
        { name: 'Dr.Santosh Panda', designation: 'Professor', room: 'A-101', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8uN-EdcDCyEvbB1Xn-0MtV-ESQk9c2gzqQ&s' },
        { name: 'Dr. Monosmita khadenge', designation: 'Assistant Professor', room: 'B-202', img: 'https://educom.co/wp-content/uploads/2022/05/depositphotos_229021444-stock-photo-happy-female-university-professor-outstretched-copy.jpg' },
        { name: 'Dr. Priyadarshini kankodo', designation: 'Associate Professor', room: 'C-303', img: 'https://www.teachaway.com/sites/default/files/styles/threshold_992x992/public/college-instructor.jpg?itok=qg77Qirn' },
        { name: 'Dr. REBIKA sutili', designation: 'Lecturer', room: 'D-404', img: 'https://indiaeducation.net/wp-content/uploads/2022/03/TEACHER-8751-768x512.jpg' },
        { name: 'Dr.Santosh Panda', designation: 'Professor', room: 'A-101', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8uN-EdcDCyEvbB1Xn-0MtV-ESQk9c2gzqQ&s' },
        { name: 'Dr. Monosmita khadenge', designation: 'Assistant Professor', room: 'B-202', img: 'https://educom.co/wp-content/uploads/2022/05/depositphotos_229021444-stock-photo-happy-female-university-professor-outstretched-copy.jpg' },
        { name: 'Dr. Priyadarshini kankodo', designation: 'Associate Professor', room: 'C-303', img: 'https://www.teachaway.com/sites/default/files/styles/threshold_992x992/public/college-instructor.jpg?itok=qg77Qirn' },
        { name: 'Dr. REBIKA sutili', designation: 'Lecturer', room: 'D-404', img: 'https://indiaeducation.net/wp-content/uploads/2022/03/TEACHER-8751-768x512.jpg' },
    ];

    const facultyCardsContainer = document.getElementById('faculty-card-container');
    facultyCardsContainer.innerHTML = '';
    facultyData.forEach(faculty => {
        const facultyCard = document.createElement('div');
        facultyCard.classList.add('col-md-4');
        facultyCard.innerHTML = `
            <div class="faculty-card">
                <img src="${faculty.img}" alt="${faculty.name}">
                <div class="faculty-card-body">
                    <h5>${faculty.name}</h5>
                    <p>${faculty.designation}</p>
                    <p>Room: ${faculty.room}</p>
                </div>
            </div>
        `;
        facultyCardsContainer.appendChild(facultyCard);
    });

    document.getElementById('question-section').style.display = 'none';
    document.getElementById('faculty-cards').style.display = 'block';
}
