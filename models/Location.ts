import { Length } from 'class-validator';

class Location{
    @Length(100)
    country: string;

    @Length(100)
    city: string;

    @Length(150)
    address: string;

    constructor(country: string, city: string, address: string){
        this.country = country;
        this.city = city;
        this.address = address;
    }
}

export { Location }