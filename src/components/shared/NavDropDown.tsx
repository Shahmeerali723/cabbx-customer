import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const NavDropDown = (props: any) => {
    const { data , Icon} = props
    const foo = {
        title: "Airport Runs", runs: [
            "Biggin Hill Airport",
            "Birmingham Airport",
            "London City Airport",
            "Farnborough Airport",
            "Biggin Hill Airport",
            "Biggin Hill Airport",
        ]
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{foo?.title || "Data not Avaliable"}</DropdownMenuTrigger>
            <DropdownMenuContent>
                {foo?.runs?.map((item)=>{
                   return <DropdownMenuItem className='focus:bg-primary focus:text-white p-2'><Icon/><span className='ml-2'>{item}</span></DropdownMenuItem>
                })}
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default NavDropDown