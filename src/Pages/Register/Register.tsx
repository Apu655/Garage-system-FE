import {
  Center,
  Text,
  TextInput,
  PasswordInput,
  Box,
  Button,
} from "@mantine/core";
import { SyntheticEvent, useState } from "react";
import { axios } from "../../Config";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

const Register = (props: Props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSumbit = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(`/user/Register`, formData);
    localStorage.setItem("token", data.token);
    navigate("/");
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
          Register to garage management system{" "}
        </Text>
        <form onSubmit={handleSumbit}>
        <TextInput
            name="name"
            my={4}
            placeholder="Enter your name"
            label="Name"
            withAsterisk
            onChange={handleChange}
          />
          <TextInput
            name="email"
            my={4}
            placeholder="Enter your mail"
            label="Email"
            withAsterisk
            onChange={handleChange}
          />
          <PasswordInput
            name="password"
            placeholder="Password"
            label="Password"
            withAsterisk
            my={4}
            onChange={handleChange}
          />
          <Button type="submit" my={4}>
            Submit
          </Button>
          <Text>
            <Link to="/register">Register Now!</Link>
          </Text>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
