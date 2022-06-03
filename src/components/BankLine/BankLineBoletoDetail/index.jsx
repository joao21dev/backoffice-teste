import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUsersInfo } from "../../../redux";
import SidebarWithHeader from "../../Sidebar/sidebar";

const BankLineBoletoDetail = () => {
  const userData = useSelector((state) => state.userInfo.usersInfo);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchUsersInfo(id));
  }, [dispatch]);
  return (
    <>
      {" "}
      <SidebarWithHeader>
        <Flex>
          <Box m={15} mt="5%">
            <Stack>
              {" "}
              <Flex>
                {" "}
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FiSearch color="gray.300" />}
                  />
                  <Input
                    type="text"
                    placeholder="Pesquisar"
                    bg="white"
                    borderRadius="15px"
                  />
                </InputGroup>
              </Flex>
            </Stack>
          </Box>
        </Flex>
        <Box
          fontWeight="medium"
          p="2"
          boxShadow="md"
          borderRadius="15px"
          m="15px"
          bg="white"
          h="50%"
          color="black"
        >
          <Text mb="5" w="90%" fontWeight="semibold">
            Detalhes do Boleto
          </Text>
          <Text m="2">ID Conta: {userData.id}</Text>
          <Text m="2">Tipo:</Text>
          <Text m="2">Valor:</Text>
          <Text m="2">Código de Barras:</Text>
          <Text m="2">Status:</Text>
          <Text m="2">Data de Emissão:</Text>
          <Text m="2">Data de Vencimento:</Text>
        </Box>
      </SidebarWithHeader>
    </>
  );
};

export default BankLineBoletoDetail;
