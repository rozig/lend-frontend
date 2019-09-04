import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Button,
  Wrapper,
} from './../../../helpers/styled-components';


const ItemTitle = styled.div`
  color: ${({ theme }) => theme.colors.disabledGray};
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: 13px;
`;

const ItemContent = styled.div`
  font-size: 18px;
`;

const AccountItem = styled.div`
  padding: 10px 35px;
  margin: 10px 0;
  display: inline-block;
  width: 50%;
`;

const TransDate = styled.div`
  text-align: center;
  position: absolute;
  width: 120px;
  left: 35px;
  top: 0;
`;

const TransDesc = styled.div`
  padding-right: 275px;
  padding-left: 155px;
  font-weight: bold;
`;

const TransType = styled.div`
  text-align: center;
  position: absolute;
  right: 155px;
  width: 120px;
  top: 0;
`;

const TransAmount = styled.div`
  text-align: center;
  position: absolute;
  width: 120px;
  right: 35px;
  top: 0;
`;

const Transaction = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.transactionText};
  position: relative;
  line-height: 50px;
  text-align: left;
  overflow: hidden;
  font-size: 14px;
  height: 50px;
  &.header {
    background-color: ${({ theme }) => theme.colors.tableGrayBg};
    color: ${({ theme }) => theme.colors.tableHeaderText};
    text-transform: uppercase;
    line-height: 40px;
    height: 40px;
    ${TransDesc} { font-weight: normal; }
  }
`;

const LoadMore = styled(Button)``;

const TransactionList = styled.div`text-align: center`;

const CardHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: lighter;
  padding: 20px 35px;
  font-size: 18px;
`;

const Card = styled.div`
  box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.colors.black}10;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 25px auto;
  overflow: hidden;
`;

class Account extends Component {
  render() {
    return (
      <Wrapper>
        <Card>
          <AccountItem>
            <ItemTitle>Account number</ItemTitle>
            <ItemContent>1234567890</ItemContent>
          </AccountItem>
          <AccountItem>
            <ItemTitle>Balance</ItemTitle>
            <ItemContent>$123.00</ItemContent>
          </AccountItem>
          <AccountItem>
            <ItemTitle>Account Status</ItemTitle>
            <ItemContent>Active</ItemContent>
          </AccountItem>
          <AccountItem>
            <ItemTitle>Last Loan</ItemTitle>
            <ItemContent>No loan request found</ItemContent>
          </AccountItem>
        </Card>
        <Card>
          <CardHeader>Account Activity</CardHeader>
          <TransactionList>
            <Transaction className="header">
              <TransDate>Date</TransDate>
              <TransDesc>Description</TransDesc>
              <TransType>Type</TransType>
              <TransAmount>Amount</TransAmount>
            </Transaction>
            <Transaction>
              <TransDate>Aug 30, 2019</TransDate>
              <TransDesc>For boquet</TransDesc>
              <TransType>Loan</TransType>
              <TransAmount>$15.00</TransAmount>
            </Transaction>
            <LoadMore
              styleClass="solid"
              bgColor="primary"
              color="white"
              margin="20px auto">Load more</LoadMore>
          </TransactionList>
        </Card>
      </Wrapper>
    );
  }
}

export default Account;
