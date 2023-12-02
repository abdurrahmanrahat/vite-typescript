import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import useDepartment from "../hooks/useDepartment";

const DesignDepartment = () => {
  const items = useDepartment();

  const [checked, setChecked] = useState([false, false]);

  const handleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [...checked];
      newChecked[index] = event.target.checked;
      setChecked(newChecked);
    };

  const children = items[0]?.sub_departments.map(
    (subDept: string, index: number) => (
      <FormControlLabel
        key={index}
        label={subDept}
        control={
          <Checkbox checked={checked[index]} onChange={handleChange(index)} />
        }
      />
    )
  );

  const allChecked = checked.every((value) => value);

  const handleAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  return (
    <div className="md:w-[180px] mx-auto">
      <FormControlLabel
        label={items[0]?.department}
        control={
          <Checkbox
            checked={allChecked}
            indeterminate={!allChecked && checked.some((value) => value)}
            onChange={handleAllChange}
          />
        }
      />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 8 }}>
        {children}
      </Box>
    </div>
  );
};

export default DesignDepartment;
