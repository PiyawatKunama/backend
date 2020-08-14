const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type SellingStock{
    _id:ID!
    stock:Stock!
    user:User!
    createdAt: String!
    updatedAt: String!
  }
  type Stock {
    _id: ID!
    value: Float!
    date: String!
    owner :User!
  }
  
  type AutoId{
    _id: ID!
    memberId: Float!
  }
  type User {
    _id: ID!
    id : String!
    First_name: String!
    Last_name: String!
    Sex : String!
    Birth_Day: String!
    ID_card: String!
    Email:String!
    Username: String!
    Password:String
    Tell_number:String
    Tell_number2:String
    Facebook:String
    Line :String
    stock_holdings:[Stock!]
    Own_farm:[Farm!]
    Own_Share:[Share!]
    Own_Wage:[Wage!]
  }
  type Officer{
    _id: ID!
    id : Float!
    name_office : String!
    lastname_office : String!
    birthday_office : String!
    idcard_office : String!
    email_office : String!
    username_office : String!
    password_office : String!
    tellnumber_office : String
    tellnumber_office2 :String
    facebook_office : String
    line_office : String
    position : String!
    type_wage : String!
    bank : String!
    bankId : String!
    banktype : String!
    wage : Float!
    socialsecurity: String
    sspersen : Float
    taxnum : String
    texpersen : Float
  }
  type Farm{
    _id: ID!
    Farm_number: String!
    Farm_Village: String
    Farm_Road: String
    Farm_Village_number: String
    Farm_alley: String
    Farm_postcode: String!
    Farm_canton: String!
    Farm_District: String!
    Farm_Province: String!
  }
  type Share{
    _id: ID!
    Value: Float!
    Count: Float!
    Num_start: Float!
    Status: Boolean!
    Date: String! 
    Share_owner: User!
  }
  type Wage{
    _id: ID!
    Total_Value: Float!
    Wage_owner: User!
  }
  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  type AuthDataoff {
    userId: ID!
    positionId : String!
    token: String!
    tokenExpiration: Int!
  }

  input StockInput{
    value:Float!
    date:String! 
  }
  input OfficerInput{
    id : Float!
    name_office : String!
    lastname_office : String!
    birthday_office : String!
    idcard_office : String!
    email_office : String!
    username_office : String!
    password_office : String!
    tellnumber_office : String
    tellnumber_office2 :String
    facebook_office : String
    line_office : String
    position : String!
    type_wage : String!
    bank : String!
    bankId : String!
    banktype : String!
    wage : Float!
    socialsecurity: String
    sspersen : Float
    taxnum : String
    texpersen : Float
  }
  input FarmInput{
    Farm_number: String!
    Farm_Village: String
    Farm_Road: String
    Farm_Village_number: String
    Farm_alley: String
    Farm_postcode: String!
    Farm_canton: String!
    Farm_District: String!
    Farm_Province: String!
    Farm_owner:String!
  }
  input ShareInput{
    Value: Float!
    Count: Float!
    Num_start: Float!
    Date: String!
    Status: Boolean!
    Share_owner:String!
  } 
  
  input WageInput{
    Total_Value: Float!
    Wage_owner: String!
  }
  
  input UserInput{
    id: String!
    First_name: String!
    Last_name: String!
    Sex : String!
    Birth_Day: String!
    ID_card: String!
    Email:String!
    Username: String!
    Password:String
    Tell_number:String
    Tell_number2:String
    Facebook:String
    Line :String
  }
  input AutoIdInput{
    memberId: Float!
  }
  type RootQuery {
    stocks: [Stock!]!
    autoIds : [AutoId]
    user:[User!]!
    users:[User!]!
    officers:[Officer!]!
    officer:[Officer!]!
    sellingStocks: [SellingStock!]!
    login(Username: String!, Password: String!): AuthData!
    oneuser(Username: String!): User
    oneshare(Status: Boolean!): Share
    login_off(username_office: String!, password_office: String!): AuthDataoff!
    oneuser_name(First_name: String!): User
  }
  type RootMutation {
    createStock( memberId: Float!): Stock
    createAutoId(autoIdInput:AutoIdInput!):AutoId
    createUser(userInput:UserInput): User
    createSellingStock(stockID: ID!):SellingStock!
    cancelSellingStock(sellingStockId:ID!): Stock!
    createOfficer(officerInput:OfficerInput): Officer
    createFarm(farmInput:FarmInput):Farm
    createShare(shareInput:ShareInput): Share
    createWage(wageInput:WageInput): Wage
    updateShare( shareInput:ShareInput,  shareId:String!): Share
    updateOfficer( OfficerInput:OfficerInput,  OfficerId:String!): Share
  }
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
