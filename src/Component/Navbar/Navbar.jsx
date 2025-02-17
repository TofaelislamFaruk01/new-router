import { Link, Outlet } from "react-router";


const Navbar = () => {
    return (

        <div>
                <div className="flex justify-between px-4 mb-4 bg-blue-300 py-3">
            <div>
            <Link to="/">
             <h1 className="text-3xl">Logo</h1> 
             </Link>
                
            </div>
            <div className="w-2/5">
                <ul className="flex justify-around w-full">
                <li><Link to="/"> <h1 className="text-3xl">Home</h1> </Link></li>
                
                <li><Link to="/about"> <h1 className="text-3xl">About</h1> </Link></li>
                <li><Link to="/login"> <h1 className="text-3xl">Log in</h1> </Link></li>
                <li><Link to="/college"> <h1 className="text-3xl">College</h1> </Link></li>
                <li><Link to="/users"> <h1 className="text-3xl">User</h1> </Link></li>
                <li><Link to="/users/list"> <h1 className="text-3xl">List</h1> </Link></li>
                
                </ul>
            </div>
            
        </div>

            <Outlet></Outlet>
        </div>
        
    );
};

export default Navbar;



