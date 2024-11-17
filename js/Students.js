// Main js start
const toggler = document.querySelector(".toggler-btn");
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
    document.querySelector("#N").classList.toggle("d-none");
    document.querySelector("#S").classList.toggle("d-none");
})
// Main js end

// Add Student Start

let Students = [];
function loadStudentData () {
    let storedstudents = localStorage.getItem('StudentsData')
    if (storedstudents){
        Students = JSON.parse(storedstudents);
    }
}
loadStudentData();
function loadStudents(){
    let studentListContainer = document.querySelector("#ListDisplay");

    if(studentListContainer && Students.length > 0) {

        for (let student of Students) {
            let StudentContainer = document.createElement('div');
            StudentContainer.classList.add("row");
            StudentContainer.classList.add("my-2");

            let studentcheckbox = Object.assign (document.createElement('input'),{type: 'checkbox'}, {className: 'col-1 mx-5'});
            studentcheckbox.setAttribute("id", "chckbx");
            // studentcheckbox.classlist.add('col-1');
            // studentcheckbox.classList.add('mx-5');
            // studentcheckbox.classList.add('h-25');
            // studentcheckbox.classList.add('my-1');

            let studentid = Object.assign(document.createElement('p'), {className: 'col text-secondary'});
            // studentid.classlist.add("col", "text-secondary", "mx-n5");
            studentid.innerHTML = student['id'];

            let studentnamediv = Object.assign(document.createElement('div'), {className: 'col col-2 mx-3'});
            studentnamediv.setAttribute("id", "NM")
            // studentname.classlist.add("col", "col-2", "mx-3", "text-secondary");

            let studentimage = document.createElement('img');
            studentimage.src = student['src'];
            studentnamediv.appendChild(studentimage);

            let studentname = Object.assign(document.createElement('p'), {className: 'text-secondary'});
            studentname.innerText = student['name'];
            studentnamediv.appendChild(studentname);


            let studentcourse = Object.assign(document.createElement('p'), {className: 'col text-secondary'});
            // studentcourse.classlist.add("col", "text-secondary");
            studentcourse.innerHTML = student['course'];

            let studentyear = Object.assign(document.createElement('p'),{className: 'col text-secondary'});
            // studentyear.classlist.add("col", "text-secondary");
            studentyear.innerHTML = student['year'];

            let studentmobileno = Object.assign(document.createElement('p'),{className: 'col text-secondary'});
            // studentmobileno.classlist.add("col", "text-secondary");
            studentmobileno.innerHTML = student['mobileno'];

            let studentaddress = Object.assign(document.createElement('p'),{className: 'col text-secondary text-truncate d-inline-block'});
            // studentaddress.classlist.add("col", "text-secondary");
            studentaddress.innerHTML = student['address'];

            let actionbttn = Object.assign(document.createElement('div'),{className: 'col'});
            // actionbttn.classlist.add("col");
            actionbttn.setAttribute("id", "Action");

            let editbttn = document.createElement('img');
            editbttn.src = "/icon/notification-bell-svgrepo-com.svg";
            actionbttn.appendChild(editbttn);

            let removebttn = document.createElement('img');
            removebttn.src = "/icon/notification-bell-svgrepo-com.svg";
            actionbttn.appendChild(removebttn);

            StudentContainer.appendChild(studentcheckbox);
            StudentContainer.appendChild(studentid);
            StudentContainer.appendChild(studentnamediv);
            StudentContainer.appendChild(studentcourse);
            StudentContainer.appendChild(studentyear);
            StudentContainer.appendChild(studentmobileno);
            StudentContainer.appendChild(studentaddress);
            StudentContainer.appendChild(actionbttn);
            studentListContainer.appendChild(StudentContainer);

        }
    } else {
        console.log("No gallery container found or no images to display");
    }
}



function formload() {
    let form = document.getElementById("AddStudent");
    if(form){
        let submitbtn = document.getElementById('submit');
        submitbtn.addEventListener('click', function(event) {
            event.preventDefault();

            let fileimage = form.image.files[0];
            let reader = new FileReader();

            reader.onload = function(e) {

                let formobjectdata = {
                    uniqueid: Students.length +1,
                    id: form.ID.value,
                    name: form.name.value,
                    course: form.course.value,
                    year: form.yearlvl.value,
                    mobileno: form.mobileno.value,
                    address: form.address.value,
                    src: e.target.result,
                }
                Students.push(formobjectdata);
                console.log(Students);
                
                                // Attempt to save the updated gallery array to localStorage
                try {
                    localStorage.setItem('StudentsData', JSON.stringify(Students, null, 2));
                } catch (e) {
                    // Log an error message if the local storage quota is exceeded
                    console.log("Local storage quota exceeded. Unable to save data.");
                }
                console.log(Students);
                // displayData();
                form.reset();
            }
            reader.readAsDataURL(fileimage);
        })
    }
}

loadStudents();
formload();