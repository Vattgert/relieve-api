import { IsInt,  Min, Max, IsIn, IsOptional } from 'class-validator';

import { IsIntegerId } from '../validator-decorators';

class ActivitySearchParams{
    @IsOptional()
    @IsInt() @Min(10) @Max(30) 
    limit: number;

    @IsOptional()
    @IsInt() 
    offset: number;

    @IsOptional()
    @IsIn(["date", "title"]) order: string;

    @IsOptional()
    @IsIn(["ASC", "DESC"]) orderType: "ASC" | "DESC";

    @IsOptional()
    @IsIntegerId({ message: "User id should be integer only." })
    user?: string;

    @IsOptional()
    @IsIntegerId({ message: "Host id should be integer only." })
    host?: string;

    @IsOptional()
    @IsIn(["true", "false"], {
        message: "\"liked\" parameter accepts only [true] or [false] value"
    })
    liked?: string;

    @IsOptional()
    @IsIn(["true", "false"], {
        message: "\"voted\" parameter accepts only [true] or [false] value"
    })
    voted?: string;

    constructor({ limit, offset, order, orderType, host, liked, voted, user }){
        this.limit = limit || 10;
        this.offset = offset || 0;
        this.order = order || "date";
        this.orderType = orderType ? orderType.toUpperCase() : "DESC";
        this.host = host;
        this.user = user;
        this.liked = liked;
        this.voted = voted;
    }
}

export { ActivitySearchParams }
