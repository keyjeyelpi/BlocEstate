export class Globals {

    public blur = false; 

    constructor() {
        this.blur = false;
    }

    isBlur() {
        return this.blur;
    }

    toggleBlur(){
        this.blur = ! this.blur;
   }
}
