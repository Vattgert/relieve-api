import { Entity } from "typeorm"

const TYPES = {
    Service: Symbol.for("Service"),
    ActivityService: Symbol.for("ActivityService"),
    ProfileService: Symbol.for("ProfileService"),
    VoteService: Symbol.for("VoteService"),
    LikeService: Symbol.for("LikeService"),
    EntityManager: Symbol.for("EntityManager"),
    Controller: Symbol.for("Controller")
}

export { TYPES }