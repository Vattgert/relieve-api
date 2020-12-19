import { Entity } from "typeorm"

const TYPES = {
    //Services
    Service: Symbol.for("Service"),
    ActivityService: Symbol.for("ActivityService"),
    ProfileService: Symbol.for("ProfileService"),
    VoteService: Symbol.for("VoteService"),
    LikeService: Symbol.for("LikeService"),
    EntityManager: Symbol.for("EntityManager"),
    Controller: Symbol.for("Controller"),

    //Controllers
    GetActivitiesController: Symbol.for("GetActivitiesController"),
    GetActivityController: Symbol.for("GetActivityController"),

    //Routes
    ActivityRouter: Symbol.for("ActivityRouter"),

}

export { TYPES }