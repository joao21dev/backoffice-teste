import React from "react";

import { Flex, Text } from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";
import "./index.css";

const NavAccountItem = (props: any) => {
  const { id } = useParams();
  console.log("o id no nav item é: ", id);
  return (
    // <GridItem w="100%" borderRadius="15px">
    // <NavLink
    //   className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
    //   to={`/${props.to}`}
    // >
    //   <Flex
    //     p="4"
    //     cursor="pointer"
    //     fontWeight="medium"
    //     justifyContent="center"
    //     alignItems="center"
    //     align="center"

    //     borderRadius="lg"
    //     role="group"

    //   >
    //     <Text borderRadius="15px">{props.name}</Text>
    //   </Flex>
    // </NavLink>
    <NavLink
      className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
      to={`/${props.to}`}
    >
      <Flex
        p="4"
        cursor="pointer"
        fontWeight="medium"
        justifyContent="center"
        alignItems="center"
        align="center"
        borderRadius="lg"
        role="group"
      >
        <Text borderRadius="15px">{props.name}</Text>
      </Flex>
    </NavLink>
  );
};

export default NavAccountItem;
