


const showInterface = (e, interface) => {

    interface.style.display = "block";
    interface.style.top = e.clientY + "px";
    interface.style.left = e.clientX + "px";

}


const process1 = document.querySelector("#process_1");
const interface1 = document.querySelector("#interface_uses_case_1");
const contentInterface1 = document.querySelector("#content_uc_1");

process1.addEventListener("click", (e)=> {
    console.log("Dando click")

    showInterface(e, interface1);
    contentInterface1.innerHTML = `
        <form class="modal">
            <label> Role </label>
            <input type="text">
            <label> Action </label>
            <input type="text">
            <label> Language </label>
            <input type="text">
            <label> Reason </label>
            <input type="text">
        </form>
    `
})