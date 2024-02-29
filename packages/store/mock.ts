export const mock = {
  data: {
    cards: [
      {
        card_id: 101,
        card_number: "**** **** **** 1234",
        cardholder_name: "John Doe",
        expiration_date: "01/25",
        cvv: "***",
        provider: "Visa",
        bank_name: "Example Bank",
      },
      {
        card_id: 102,
        card_number: "**** **** **** 5678",
        cardholder_name: "Rakesh Singh",
        expiration_date: "05/24",
        cvv: "***",
        provider: "MasterCard",
        bank_name: "Another Bank",
      },
      {
        card_id: 103,
        card_number: "**** **** **** 1678",
        cardholder_name: "Rakesh Singh",
        expiration_date: "05/24",
        cvv: "***",
        provider: "Rupepay",
        bank_name: "HDFC BANK",
      },
    ],
    bank: [
      {
        id: 201,
        account_number: "1234567890123456",
        ifsc_code: "ABCD0123456",
        branch_name: "City Center Branch",
        bank_name: "Example Bank",
        account_holder_name: "John Doe",
      },
      {
        id: 202,
        account_number: "9876543210987654",
        ifsc_code: "EFGH9876543",
        branch_name: "Downtown Branch",
        bank_name: "Another Bank",
        account_holder_name: "Jane Doe",
      },
    ],
  },
};
