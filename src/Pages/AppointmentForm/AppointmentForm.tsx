import {
  Center,
  Text,
  TextInput,
  PasswordInput,
  Box,
  Button,
  NumberInput,
} from "@mantine/core";
import { SyntheticEvent, useState } from "react";
import { axios } from "../../Config";
import { Link, useNavigate } from "react-router-dom";

import { DateInput } from "@mantine/dates";

type Props = {};

const AppointmentForm = (props: Props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => {
      return { ...prev, [name]: value };
    });
    console.log(formData);
  };
  const handleSumbit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    const { data } = await axios.post(`/appointment/post`, formData);
    console.log(data);
  };
  return (
    <Box
      sx={{
        marginX: "auto",
        placeItems: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "500px",
        height: "100vh",
        // border:"solid 10px"
      }}
    >
      <Box
        sx={{
          //   maxWidth: "70%",
          marginX: "auto",
          alignItems: "center",
        }}
      >
        <Text fz={30} fw={600} my={4}>
          Appointment Form for the Garage System
        </Text>
        <form onSubmit={handleSumbit}>
          <NumberInput
            defaultValue={18}
            placeholder="Id"
            label="Enter Id"
            onChange={handleChange}
            name="id"
          />
          <TextInput
            name="name"
            my={4}
            placeholder="Enter your name"
            label="Name"
            withAsterisk
            onChange={handleChange}
          />
          <TextInput
            name="phone"
            my={4}
            placeholder="Enter your phone"
            label="Phone"
            withAsterisk
            onChange={handleChange}
          />
          <TextInput
            name="color"
            my={4}
            placeholder="Enter car color"
            label="Color"
            withAsterisk
            onChange={handleChange}
          />
          <TextInput
            name="licenseNumber"
            my={4}
            placeholder="Enter car license number"
            label="License"
            withAsterisk
            onChange={handleChange}
          />
          <TextInput
            name="engineNumber"
            my={4}
            placeholder="Enter your number"
            label="Engine Number"
            withAsterisk
            onChange={handleChange}
          />
          <TextInput
            name="appointmentDate"
            label="Enter date"
            placeholder="Enter appointment date"
            onChange={handleChange}
          />
          <TextInput
            name="mechanicName"
            label="Mechanic Name"
            placeholder="Enter Mechanic Name"
            onChange={handleChange}
          />
          {/* <DateInput 
            name="appointmentDate"
            onChange={handleChange}
            label="Enter appointment date"
            placeholder="Date input"
          /> */}
          <Button type="submit" my={4}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AppointmentForm;
