import { nanoid } from "nanoid";

const items = [
    {id: nanoid(),
    to: "/",
    text: "Home"
},
    {id: nanoid(),
    to: "/login",
    text: "Login"
},
{id: nanoid(),
    to: "/register",
    text: "Register"
},
]


export default items;