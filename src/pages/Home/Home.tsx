import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const number = form.number.value;
    const email = form.email.value;

    const user = {
      name,
      number,
      email,
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/second");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-[24px] font-medium">Put Your Information</h2>
      <form onSubmit={handleSubmit} className="md:w-[380px]">
        <div className="grid grid-cols-1 gap-4">
          <TextField
            type="text"
            id="name"
            name="name"
            label="First Name"
            variant="filled"
          />
          <TextField
            type="number"
            id="number"
            name="number"
            label="Your Number"
            variant="filled"
          />
          <TextField
            type="email"
            id="email"
            name="email"
            label="Email Address"
            variant="filled"
          />
        </div>

        <div className="mt-4 flex justify-center">
          <Button type="submit" variant="outlined">
            Primary
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Home;
