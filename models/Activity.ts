import { IsInt, IsUrl, IsDate, Length } from 'class-validator';

import { Location } from './Location';
import { User } from './User'; 

class Activity{
    @IsInt()
    id: number; 

    @Length(200)
    title: string;

    @IsUrl()
    image: string;
    
    @IsDate()
    date: string;

    location: Location;

    constructor(id: number, title: string, image: string, date: string, location: Location){
        this.id = id;
        this.title = title;
        this.image = image;
        this.date = date;
        this.location = location;
    }
}

export { Activity }