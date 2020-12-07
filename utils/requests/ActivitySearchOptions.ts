import { off } from "process";

import { IsInt, IsString,  Min, Max, IsIn, IsDefined } from 'class-validator';

class ActivitySearchParams{
    @IsInt() @Min(10) @Max(30) limit: number;
    @IsInt() offset: number;
    @IsIn(["date", "title"]) order: string;
    @IsIn(["asc", "desc"]) orderType: string;
    user: number | string
    host: number | string;
    liked: boolean;
    voted: boolean;
}

export { ActivitySearchParams }
