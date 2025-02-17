import { Link } from "react-router";


const UserList = () => {

const userData= [
    { "id": 1, "name": "Alice Johnson", "college": "Harvard University", "address": "123 Elm St, Cambridge, MA" },
    { "id": 2, "name": "Bob Smith", "college": "Stanford University", "address": "456 Oak St, Stanford, CA" },
    { "id": 3, "name": "Charlie Brown", "college": "University of Oxford", "address": "789 Pine St, Oxford, UK" },
    { "id": 4, "name": "Dana Lee", "college": "MIT", "address": "101 Maple Ave, Cambridge, MA" },
    { "id": 5, "name": "Eve Taylor", "college": "University of California, Berkeley", "address": "202 Birch Rd, Berkeley, CA" },
    { "id": 6, "name": "Frank Moore", "college": "Yale University", "address": "303 Cedar Ln, New Haven, CT" },
    { "id": 7, "name": "Grace White", "college": "Princeton University", "address": "404 Oakwood Dr, Princeton, NJ" },
    { "id": 8, "name": "Hannah Clark", "college": "Columbia University", "address": "505 Pine Hill Rd, New York, NY" },
    { "id": 9, "name": "Isaac Davis", "college": "University of Cambridge", "address": "606 Walnut St, Cambridge, UK" },
    { "id": 10, "name": "Jack Green", "college": "University of Chicago", "address": "707 Ash Dr, Chicago, IL" }
  ];
  

    return (

        <div>

            <h1 className="text-3xl mb-3 ml-2"> Users List: </h1>
            {
                userData.map((user)=>  (<div key={user.id} className="ml-4">
                    <h3><Link  to={"/users/"+user.id}> {user.name}</Link></h3>
                </div> ))
            }

<h1 className="text-3xl mb-3 ml-2"> Users List with id and name : </h1>
            {
                userData.map((user)=>  (<div key={user.id} className="ml-4">
                    <h3><Link  to={"/users/"+user.id+"/"+user.name}> {user.name}</Link></h3>
                </div> ))
            }

            
        </div>
    );
};

export default UserList;