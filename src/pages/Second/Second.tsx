import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CustomerDepartment from "../../components/CustomerDepartment";
import DesignDeparment from "../../components/DesignDeparment";

const Second = () => {
  // interface
  interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
    id: string;
  }

  const [users, setUsers] = useState<User[]>([]);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  useEffect(() => {
    if (!user?.name || !user?.email || !user?.number) {
      setTimeout(() => {
        console.log("user don't exist");
        navigate("/");
        toast.error("Filled your info.");
      }, 2000);
    }
  }, [navigate, user?.email, user?.number, user?.name]);

  useEffect(() => {
    fetch("https://assignment-12-server-lyart-xi.vercel.app/users")
      .then((res) => res.json())
      .then((data: User[]) => {
        const dataWithIds = data.map((item, index) => ({
          ...item,
          id: (index + 1).toString(),
        }));
        setUsers(dataWithIds);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle errors or set default value for users state
        setUsers([]);
      });
  }, []);
  console.log(users);

  // table
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "NAME",
      width: 150,
    },
    {
      field: "email",
      headerName: "EMAIL",
      width: 250,
    },
    {
      field: "role",
      headerName: "ROLE",
      width: 150,
    },
  ];

  return (
    <div className="text-center my-8">
      <h2 className="text-[24px] font-medium">MongoDb Backed Data Fetching</h2>
      <div className="mt-4 md:w-[600px] mx-auto">
        <Box sx={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={users}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 8,
                },
              },
            }}
            pageSizeOptions={[8]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
      <div className="mt-8">
        <h2 className="text-[24px] font-medium">Departments Structured</h2>
        <div>
          <CustomerDepartment></CustomerDepartment>
          <DesignDeparment></DesignDeparment>
        </div>
      </div>
    </div>
  );
};

export default Second;
