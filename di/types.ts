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
    GetTopCategoriesController: Symbol.for("GetTopCategoriesController"),

    //Routes
    ActivityRouter: Symbol.for("ActivityRouter"),
    CategoryRouter: Symbol.for("CategoryRouter")

}

export { TYPES }