import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_NAV_LOCATION = gql`
  query GetNavLocation {
    getNavLocation @client {
      currentLocation
      previousLocation
    }
  }
`;

export const typeDefs = gql`
  {
    extend
    type
    Query {
      getNavLocation: NavLocation
    }

    type
    NavLocation {
      currentLocation: String
      previousLocation: String
    }
  }
`;

// create a hook that returns the state and a dispatch method

export const useNavLocationState = () => {
  const { data } = useQuery(GET_NAV_LOCATION);
  console.log("useNavLocationState fired", data);
  return data;
};
