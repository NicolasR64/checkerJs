class pion{
    constructor(id, owner, type){
        this.id = id;
        this.owner = owner;
        this.type = type;
    }

    getColor(){
        return this.owner.color;
    }

    displayPion(id, color){
        let target = document.querySelector(`#case${id} .pion`);
        target.innerHTML = ' ';
        target.style.backgroundColor = `${color}`;

    }
}