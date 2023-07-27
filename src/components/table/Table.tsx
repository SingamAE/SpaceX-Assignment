import React, { useState } from "react";
import "./table.css";
import { useQuery} from "@apollo/client";
import Pagenation from "../pagination/Pagenation";
import Spinner from "../spinner/Spinner";
import Model from "../model/Model";
import getLaunchesdata from "../../graphql/queries/getLaunchesdata";

type tbProps = {
  option: string;
};

export default function Table({ option }: tbProps) {
  const [spage, setSpage] = useState(0);
  const [page, setPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [currentEle, setCurrentEle] = useState({})
  const moment = require("moment")

  const GET_DATA = getLaunchesdata
  const { loading, error, data } = useQuery(GET_DATA);
  if (error) return <p>error:{error.message}</p>;

  return (
    <div className="table">
      <div className="tabledata">
        <table style={loading || option!=="All Launches" ?{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}:{textAlign:'center'}}>
          <tr className="table_header" style={loading || option!=="All Launches" ?{display:"flex",justifyContent:"space-between",alignItems:"center"}:{}}>
            <th>No:</th>
            <th>Launched(UTC)</th>
            <th>Location</th>
            <th>Mission</th>
            <th>Orbit</th>
            <th>Launch Status</th>
            <th>Rocket</th>
          </tr>
          {loading ? (
            <Spinner />
          ) : option !== "All Launches" ? (
            <tr style={{ padding: "1rem" }}>
              No results found for the specified filter
            </tr>
          ) : (
            data.launches.map((ele: any, idx: any) => {
              if (idx < page && idx+1 >= spage) {
                return (
                  <tr onClick={() => {setOpen(true)
                    setCurrentEle(ele)}}>
                    <td>{idx+1}</td>
                    <td>{moment.utc(ele.launch_date_utc).format("D MMMM YYYY HH:mm")}</td>
                    <td>Kwajalinn atol</td>
                    <td>{ele.mission_name}</td>
                    <td>LEO</td>
                    <td ><p className="statuss" style={idx%2!==0?{color:"#92400F"}:{color:"#03543F"}}>{idx%2===0?"Success":"Upcoming"}</p></td>
                    <td>{ele.rocket.rocket_name}</td>
                  </tr>
                );
              } else {
                return <p>{loading}</p>;
              }
            })
            )}
        </table>
      </div>
            <Model model={open} setModel={setOpen} obj={currentEle} />
      {!loading ? (
        <Pagenation data={data.launches} start={setSpage} end={setPage}/>
      ) : null}
    </div>
  );
}
