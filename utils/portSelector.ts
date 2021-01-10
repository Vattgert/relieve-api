export const portSelector = () => {
    if(process.env.NODE_ENV === "production"){
        return 3005;
    } 
    if(process.env.NODE_ENV === "development"){
        return 3000;
    }
    if(process.env.NODE_ENV === "test"){
        return 3004;
    }
    return 3000;
}