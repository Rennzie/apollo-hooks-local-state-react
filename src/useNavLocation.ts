import { useQuery, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_NAV_LOCATION = gql`
  query GetNavLocation {
    navLocation @client
  }
`;

type NavLocationState = {
  current: string;
  previous: string;
};

// create a hook that returns the state NavLocation state
export const useNavLocationState = () => {
  const { data } = useQuery(GET_NAV_LOCATION);
  return data;
};

type NavLocationAction = { type: "nextLocation"; nextLocation: "home" | "map" };

const navLocationDispatch = (state: NavLocationState, client) => {
  return (action: NavLocationAction) => {
    switch (action.type) {
      case "nextLocation":
        client.writeData({
          data: {
            navLocation: action.nextLocation
          }
        });
        break;
      default:
        throw new Error(`Unahandled action type ${action.type}`);
    }
  };
};

// create a hook that can update the local state
export const useNavLocationDispatch = () => {
  const { navLocation } = useNavLocationState();
  const client = useApolloClient();
  return navLocationDispatch(navLocation, client);
};
