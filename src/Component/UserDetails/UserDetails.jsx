import { Link, useParams } from "react-router";


const UserDetails = () => {

    const paramsData = useParams();
    console.log(paramsData.id);

   
          
    return (
       
        <div>

            <h1 className="text-3xl mb-3 ml-2"> Users Details Page </h1>
            <h1 className="text-xl mb-3 ml-2"> Users ID is : { paramsData.id }</h1>
            <h1 className="text-xl mb-3 ml-2">  <Link to={'/users'} > Back </Link>  </h1>

           
        </div>
    );
};

export default UserDetails;