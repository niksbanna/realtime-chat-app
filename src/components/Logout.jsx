import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BiPowerOff } from "react-icons/bi";

export default function Logout() {
  const navigate = useNavigate();
  const handleCLick = async () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Button onClick={handleCLick}>
      <BiPowerOff />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    color: #ebe7ff;
    font-size: 1.3rem;
  }
  &:hover {
    opacity: 0.7;
  }
`;
