import React from "react";
import AccountInfo from "../AccountInfo";
import AccountsFormAddress from "../AccountsFormAddress";
import AccountsFormPersonalData from "../AccountsFormPersonalData";

const AccountsAccountDetail = () => {
  return (
    <>
      <AccountInfo />
      <AccountsFormPersonalData />
      <AccountsFormAddress name="Endereço" />
    </>
  );
};

export default AccountsAccountDetail;
