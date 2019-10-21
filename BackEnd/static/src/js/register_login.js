import UI from './ui';

class LoginRegister extends UI {

    constructor() {
        super();
        this.activateFormTabs();
    }

    activateFormTabs() {
        document.querySelectorAll('.tab-control').forEach(t => t.addEventListener("click", e => LoginRegister.setActiveForm(e)));
    }

    static unsetActiveForm() {
        const s = document.querySelector(`.tab-control.active`);
        s.classList.remove("active");
        document.querySelector(`#${s.dataset.target}`).classList.remove("active");
    }

    static setActiveForm(e) {
        console.log('hi');
        const s = e.target;
        this.unsetActiveForm();
        s.classList.add("active");
        document.querySelector(`#${s.dataset.target}`).classList.add("active");
    }
}

export default LoginRegister;