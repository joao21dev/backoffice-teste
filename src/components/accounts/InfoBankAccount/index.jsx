import { Box, Text } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { CustomTable } from "../../Table";
import { fetchTodos, fetchUsersInfo } from "../../../redux";
import { useEffect, useMemo } from "react";

const InfoBankAccount = () => {
  const userData = useSelector((state) => state.userInfo.usersInfo);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchUsersInfo(id));
  }, [dispatch]);
  console.log("userdata em bank: ", userData);
  return (
    <>
      {" "}
      <Box
        fontWeight="medium"
        p="2"
        boxShadow="md"
        borderRadius="15px"
        mt="15px"
        bg="white"
        h="50%"
        color="black"
      >
        <Text m="2">Banco: {userData.id}</Text>
        <Text m="2">Agência: {userData.height}</Text>
        <Text m="2">Digito da Agência: {userData.weight}</Text>
        <Text m="2">Conta:</Text>
        <Text m="2">Dígio Conta:</Text>
        <Text m="2">Tipo de conta:</Text>
        <Text m="2">Status:</Text>
      </Box>
    </>
  );
};

export default InfoBankAccount;
