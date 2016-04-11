
export interface ICoolComponentProps {
    someProperty: string
}

export interface ICoolComponentState {

}

export class CoolComponentProps implements ICoolComponentProps {
    constructor(public someProperty:string) {
        Object.freeze(this); // Raise an exception if we mutate
    }
}