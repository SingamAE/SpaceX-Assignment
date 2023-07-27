import { gql } from "@apollo/client";

const getRocketdata = gql`
query{
  rockets {
    name
    wikipedia
    type
    country
    description
    first_flight
    active
    id
  }
}
`;

export default getRocketdata