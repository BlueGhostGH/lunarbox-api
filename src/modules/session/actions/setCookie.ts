import { db } from "../../../../db/knex"

import { Session } from "../types/Session"

import { destroyCookie } from "./destroyCookie"

export const setCookie = async (
    key: Session["key"],
    session: Session["session"],
    maxAge: Session["maxAge"]
) => {
    await destroyCookie(key)

    return (
        await db<Session>("sessions").insert({ key, session, maxAge }, "*")
    )[0]
}
