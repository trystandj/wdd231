const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

displayClassses(courses);

const cseClasses = document.querySelector('#CSE');
cseClasses.addEventListener('click', (event) => {
  event.preventDefault(); 
  let cseC = courses.filter((course) => course.subject === 'CSE');
  displayClassses(cseC);
});

const wddClasses = document.querySelector('#WDD');
wddClasses.addEventListener('click', (event) => {
  event.preventDefault(); 
  let cseD = courses.filter((course) => course.subject === 'WDD');
  displayClassses(cseD);
});

const allClasses = document.querySelector('#All'); 
allClasses.addEventListener('click', (event) => {
  event.preventDefault(); 
  displayClassses(courses);
});


function displayClassses(filteredClasses) {
    document.querySelector('.classes').innerHTML = '';
    const totalCredits = filteredClasses.reduce((accum, course) => accum + course.credits, 0);
    document.querySelector('.totalCredits').innerHTML = `<p>Total Credits: ${totalCredits}</p>`;

    filteredClasses.forEach((course, index) => {
        
        let subjectButton = document.createElement('button');
        subjectButton.setAttribute('class', 'button open-button');
        subjectButton.textContent = `${course.subject} ${course.number}`;

        if (course.completed) {
            subjectButton.style.backgroundColor = '#1a521d';
        }

    
        let dialog = document.createElement('dialog');
        dialog.setAttribute('class', 'modal');
        dialog.setAttribute('id', `modal-${course.number}`); 

        
        dialog.innerHTML = `
            <h2>${course.subject} ${course.number}</h2>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
            <p>${course.description}</p>
            <p>Technologies: ${course.technology.join(', ')}</p>
            <button class="close-button">❌</button>
        `;

      
        document.querySelector('.classes').appendChild(subjectButton);
        document.querySelector('.classes').appendChild(dialog);

        
        subjectButton.addEventListener('click', () => {
            dialog.showModal();
        });

        dialog.querySelector('.close-button').addEventListener('click', () => {
            dialog.close();
        });
    });
}

