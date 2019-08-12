export class Globals {

    public blur = false;

    public propertyDetails: any = []

    constructor() {
        this.blur = false;
    }

    isBlur() {
        return this.blur;
    }

    toggleBlur() {
        this.blur = !this.blur;
    }
}
