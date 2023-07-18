import { nanoid } from "nanoid";

const items = [
    {id: nanoid(),
        to: "/about",
        text: "About"
    },
    {id: nanoid(),
    to: "/register",
    text: "Registration"
},
    {id: nanoid(),
    to: "/login",
    text: "Login"
},

]


export default items;