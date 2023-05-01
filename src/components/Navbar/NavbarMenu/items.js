import { nanoid } from "nanoid";

const items = [
    {id: nanoid(),
    to: "/items",
    text: "Items"
},
{id: nanoid(),
    to: "/users",
    text: "Users"
},
{id: nanoid(),
    to: "/live",
    text: "live"
},
]


export default items;