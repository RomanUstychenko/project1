import { nanoid } from "nanoid";
import { Home } from "./NavbarAuth.styled";

const items = [
    // {id: nanoid(),
    //     to: "/about",
    //     text: <Home />
    // },
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