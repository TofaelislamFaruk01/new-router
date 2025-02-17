import { Link, Outlet } from "react-router";




const CollegeDetailsPage = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl mb-2">College Details</h1>

           <Link to={"/"}> <h1 className="text-xl mb-2">Go back to home</h1></Link>
            <hr />

            <div className="my-3 flex justify-evenly">

            <Link to=""><h1 className="text-2xl">Student</h1></Link>
            
            <Link to="dept"><h1 className="text-2xl">Department</h1></Link>
            
            <Link to="clg-details"><h1 className="text-2xl">College Details</h1></Link>
            </div>

            <Outlet></Outlet>
            
            
        </div>
    );
};

export default CollegeDetailsPage;