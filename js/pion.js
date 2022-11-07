class pion{
    constructor(id, owner){
        this.id = id;
        this.owner = owner,
        this.type = 1;
    }

    constructor(id, owner, type){
        this.id = id;
        this.owner = owner,
        this.type = type;
    }

    getColor(){
        return this.owner.color;
    }

}