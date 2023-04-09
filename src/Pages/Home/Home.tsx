import React from "react";
import { useEffect, useState } from "react";
import { Table, Text } from "@mantine/core";
import { axios } from "../../Config";
import jwtDecode from "jwt-decode";
import AdminGuard from "../../Guards/AdminGuard";
import { useAppSelector } from "../../Redux/hooks";
import { useNavigate } from "react-router-dom";
type Props = {};

const Home = (props: Props) => {
  const [appointmentData, setAppointmentData] = useState<any>();
  const [user, setUser] = useState<any>();
  const getAppointment = async () => {
    const { data } = await axios.get("/appointment/get");
    setAppointmentData(data.data);
    console.log(data);
  };
  useEffect(() => {
    getAppointment();
  }, []);
  // useEffect(()=>{
  // setUser(localStorage.getItem('token'))
  // },[])
  const navigate = useNavigate()
  const auth = useAppSelector(state=>state.auth)
  console.log("auth form",auth)
  useEffect(()=>{
    if (!auth.user){
        navigate("/login")
    }
    if (!auth.user.isAdmin){
        navigate("/appointmentForm")
    }
    
  },[])
  return (
    
      <div>
        <Text fw={600} fz={30}>
          Appointment List
        </Text>
        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Car Color</th>
              <th>License Number</th>
              <th>Engine Number</th>
              <th>Appointment Date</th>
              <th>Mechanic Name</th>
            </tr>
          </thead>
          <tbody>
            {appointmentData &&
              appointmentData.map((value: any, index: number) => (
                <tr key={index}>
                  {Object.values(value).map((item, index) => (
                    <td key={index}>{item}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </Table>

      </div>

  );
};

export default Home;
