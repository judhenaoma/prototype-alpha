//Modal handling
let modalContainer = document.querySelector("#modal_container");
let modalContent = modalContainer.querySelector("#modal_content");
let modalTitle = modalContainer.querySelector("#modal_title");
 



//**FUNCTIONS

//Show modal of a dynamic triad
const showModal = (e, modal) => {

    modal.style.display = "block";
    const xScroll = window.scrollX
    const yScroll = window.scrollY
    modal.style.top = e.clientY + yScroll  + "px";
    modal.style.left = e.clientX + xScroll + "px";
}

//Hiden modal of a dynamic triad

const closeModal = (e) => {
    e.preventDefault();
    const modal = e.target.closest(".modal_settings")
    modal.style.display = "none"
}


const saveData = (e) => {
    e.preventDefault();
    const modal = e.target.closest(".modal_settings")
    modal.style.display = "none"
    alert("Data saved")
}

//Drag modals

const dragModal = (e) => {
    e.preventDefault();
    const modalStyles = window.getComputedStyle(modalContainer);
    const modalLeftPosition = parseInt(modalStyles.left);
    const modalTopPosition = parseInt(modalStyles.top);
    modalContainer.style.left = modalLeftPosition + e.movementX + "px";
    modalContainer.style.top = modalTopPosition + e.movementY + "px";
    
}

modalTitle.addEventListener("mousedown", (e)=>{

    modalTitle.addEventListener("mousemove", dragModal)

}) 
document.addEventListener("mouseup", (e) => {
    modalTitle.removeEventListener("mousemove", dragModal)

});

const handleFormSubmit = (e, id) =>{
    alert("Datos guardados")

}






// Catching selectors of dynamic triads in the pre-conceptual schema
const process1 = document.querySelector("#use_case_01");
const process2 = document.querySelector("#use_case_02");
const process3 = document.querySelector("#use_case_03");
const process5 = document.querySelector("#use_case_04");
const process6 = document.querySelector("#use_case_06");
//Events
process6.addEventListener("click", (e)=> {
    e.preventDefault();
    showModal(e, modalContainer);
    modalTitle.innerHTML = `<h1 class="no_select">Product Owner Guides Developer</h1>`
    modalContent.innerHTML = `
        <div class="form_container">
            <form class="form_settings">
                <h3 >Write your suggestion</h3>
                <p>
                <textarea name="comentario"  rows="20" cols="30"></textarea></p>
                <ul class="form_buttons">
                <li>
                <button type="submit" onclick="saveData(event)" class="close_modal form-button">Save</button>
            </li>
            <li>
                <button onclick="closeModal(event)" class="close_modal form-button">Cancel</button>
            </li>
                </ul>
            </form>
        </div>
    `
})
process5.addEventListener("click", (e)=> {
    e.preventDefault();
    showModal(e, modalContainer);
    modalTitle.innerHTML = `<h1 class="no_select">Product Owner Approves Software System</h1>`
    modalContent.innerHTML = `
        <div class="form_container">
            <form class="form_settings">
                <h1 >Do you Approve the software system?</h1>
                <p>
                    <input type="radio" name="yes_no" checked>Yes</input>
                </p>
                <p >
                    <input  type="radio" name="yes_no">No</input>
                </p>
                <ul class="form_buttons">
                    <li>
                        <button onclick="closeModal(event)" class="close_modal form-button">Close</button>
                    </li>
                </ul>
            </form>
        </div>
    `
})


process1.addEventListener("click", (e)=> {
    e.preventDefault();
    showModal(e, modalContainer);

    modalTitle.innerHTML = `<h1 class="no_select">Development Leader Defines User Story</h1>`
    modalContent.innerHTML = `
        <div class="form_container">
            <form id="form_use_case_01" onsubmit="handleFormSubmit(event, id)" class="form_settings">
                <label for="role_1"> Role </label>
                <input id="role_1" name="role_1" type="text"/>
                <label for="action_1"> Action </label>
                <input id="action_1" name="action_1" type="text"/>
                <label for="language_1"> Language </label>
                <input id="language_1" name="language_1" type="text"/>
                <label for="reason_1"> Reason </label>
                <input id="reason_1" name="reason_1" type="text"/>
                <ul class="form_buttons">
                    <li>
                        <button type="submit" onclick="saveData(event)" class="close_modal form-button">Save</button>
                    </li>
                    <li>
                        <button onclick="closeModal(event)" class="close_modal form-button">Cancel</button>
                    </li>
                </ul>
            </form>
        </div>
    `
})




process2.addEventListener("click", (e)=> {
    e.preventDefault();
    showModal(e, modalContainer);
    modalTitle.innerHTML = `<h1 class="no_select">Product Owner Validates User Story</h1>`
    modalContent.innerHTML = `
        <div class="form_container">
            <form class="form_settings">
                <div class="line">
                    <span id="text_box" class="text_box">US1</span>
                </div>
                <ul class="form_buttons">
                    <li>
                        <button onclick="closeModal(event)" class="close_modal form-button">Close</button>
                    </li>
                </ul>
            </form>
        </div>
    `
})




process3.addEventListener("click", (e)=> {
    e.preventDefault();
    showModal(e, modalContainer);
    modalTitle.innerHTML = `<h1 class="no_select">Product Owner Validates User Story</h1>`
    modalContent.innerHTML = `
        <div class="form_container">
            <form class="form_settings">
                <div class="line">
                    <div class="text_box">US1</div>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <ul class="form_buttons">
                    <li>
                        <button onclick="closeModal(event)" class="close_modal form-button">Close</button>
                    </li>
                </ul>
            </form>
        </div>
    `
});



// const textBox = document.querySelector("span#text_box")
// console.log(textBox)
// textBox.addEventListener('click', (e)=>{
//     console.log(e.target)
//     showModal(e, auxiliar_modal);

// })