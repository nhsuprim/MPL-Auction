import express from "express";
import { userRoutes } from "../modules/User/user.routes";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { captainRoutes } from "../modules/Captain/captain.routes";
import { playerRoutes } from "../modules/Player/player.routes";
import { teamRoutes } from "../modules/Team/team.routes";
import { adminRoutes } from "../modules/Admin/admin.routes";

const router = express.Router();

const moduleRoutes = [
    {
        path: "/user",
        route: userRoutes,
    },
    {
        path: "/auth",
        route: AuthRoutes,
    },
    {
        path: "/captain",
        route: captainRoutes,
    },
    {
        path: "/player",
        route: playerRoutes,
    },
    {
        path: "/team",
        route: teamRoutes,
    },
    {
        path: "/admin",
        route: adminRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
