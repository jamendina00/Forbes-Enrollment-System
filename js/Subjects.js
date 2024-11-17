// Main js start
const toggler = document.querySelector(".toggler-btn");
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
    document.querySelector("#N").classList.toggle("d-none");
    document.querySelector("#S").classList.toggle("d-none");
})
// Main js end

//Add Subject strart
let Subjects = [];
function loadSubjectsData () {
    let storedsubjects = localStorage.getItem('SubjectsData')
    if (storedsubjects){
        Subjects = JSON.parse(storedsubjects);
    }
}

loadSubjectsData();
function loadSubjects(){
    let subjectListContainer = document.querySelector("#ListDisplay");

    if(subjectListContainer && Subjects.length > 0) {

        for (let subject of Subjects) {
            let Container = document.createElement('div');
            Container.classList.add("row");
            Container.classList.add("my-2");

            let subcheckbox = Object.assign (document.createElement('input'),{type: 'checkbox'}, {className: 'col-1 mx-5'});
            subcheckbox.setAttribute("id", "chckbx");
            // studentcheckbox.classlist.add('col-1');
            // studentcheckbox.classList.add('mx-5');
            // studentcheckbox.classList.add('h-25');
            // studentcheckbox.classList.add('my-1');

            let subid = Object.assign(document.createElement('p'), {className: 'col text-secondary'});
            // studentid.classlist.add("col", "text-secondary", "mx-n5");
            subid.innerHTML = subject['id'];

            let subnamediv = Object.assign(document.createElement('div'), {className: 'col col-2 mx-3'});
            subnamediv.setAttribute("id", "NM")
            // studentname.classlist.add("col", "col-2", "mx-3", "text-secondary");

            let subimage = document.createElement('img');
            subimage.src = subject['src'];
            subnamediv.appendChild(subimage);

            let subname = Object.assign(document.createElement('p'), {className: 'text-secondary'});
            subname.innerText = subject['name'];
            subnamediv.appendChild(subname);


            let subcourse = Object.assign(document.createElement('p'), {className: 'col text-secondary'});
            // studentcourse.classlist.add("col", "text-secondary");
            subcourse.innerHTML = subject['course'];

            let subyear = Object.assign(document.createElement('p'),{className: 'col text-secondary'});
            // studentyear.classlist.add("col", "text-secondary");
            subyear.innerHTML = subject['year'];

            let subnostudent = Object.assign(document.createElement('p'),{className: 'col text-secondary'});
            // studentmobileno.classlist.add("col", "text-secondary");
            subnostudent.innerHTML = subject['nostudent'];

            let actionbttn = Object.assign(document.createElement('div'),{className: 'col'});
            // actionbttn.classlist.add("col");
            actionbttn.setAttribute("id", "Action");

            let editbttn = document.createElement('img');
            editbttn.src = "/icon/notification-bell-svgrepo-com.svg";
            actionbttn.appendChild(editbttn);

            let removebttn = document.createElement('img');
            removebttn.src = "/icon/notification-bell-svgrepo-com.svg";
            actionbttn.appendChild(removebttn);

            Container.appendChild(subcheckbox);
            Container.appendChild(subid);
            Container.appendChild(subnamediv);
            Container.appendChild(subcourse);
            Container.appendChild(subyear);
            Container.appendChild(subnostudent);
            Container.appendChild(actionbttn);
            subjectListContainer.appendChild(Container);

        }
    } else {
        console.log("No gallery container found or no images to display");
    }
}

function formload() {
    let form = document.getElementById("AddSubject");
    if(form){
        let submitbtn = document.getElementById('submit');
        submitbtn.addEventListener('click', function(event) {
            event.preventDefault();

            let fileimage = form.image.files[0];
            let reader = new FileReader();

            reader.onload = function(e) {

                let formobjectdata = {
                    uniqueid: Subjects.length +1,
                    id: form.ID.value,
                    name: form.name.value,
                    course: form.course.value,
                    year: form.yearlvl.value,
                    nostudent: form.nostudent.value,
                    src: e.target.result,
                }
                Subjects.push(formobjectdata);
                console.log(Subjects);
                
                                // Attempt to save the updated gallery array to localStorage
                try {
                    localStorage.setItem('SubjectsData', JSON.stringify(Subjects, null, 2));
                } catch (e) {
                    // Log an error message if the local storage quota is exceeded
                    console.log("Local storage quota exceeded. Unable to save data.");
                }
                console.log(Subjects);
                // displayData();
                form.reset();
            }
            reader.readAsDataURL(fileimage);
        })
    }
}

loadSubjects();
formload();