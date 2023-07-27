import { gql } from "@apollo/client";

const getLaunchesdata = gql`
    query Launches{
        launches {
          launch_date_utc
          mission_name
          rocket {
            rocket_name
          }
          details
        }

      }
`;

export default getLaunchesdata;