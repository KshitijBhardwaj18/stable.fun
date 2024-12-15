import { SideNav } from "./(components)/sidenavbar"

export default function dashboardLayout({children} : {children: React.ReactNode}) {
    return (
        <div className="flex">
        <SideNav/>
        {children}
        </div>
    )
}