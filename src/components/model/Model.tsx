// import {useEffect, useState} from "react";
import { Modal } from "antd";
import "./model.css";
import rocketImage from "../../assets/rocketImage.png";
import nasa from "../../assets/nasa.png";
import wiki from "../../assets/wiki.png";
import utube from "../../assets/utube.png";
import getRocketdata from "../../graphql/queries/getRocketdata";
import { useQuery } from "@apollo/client";

type props = {
  model: any;
  setModel: any;
  obj?: any;
};

const Model = (propp: props) => {
  // const [currentObj, setCurrentObj] = useState([])

  const GET_DATA = getRocketdata;
  const { loading, error, data } = useQuery(GET_DATA);
  const moment = require("moment")
  // useEffect(()=>{
  //         if(!loading){
  //         setCurrentObj(data.rockets)
  //         console.log(currentObj)
  //         }
  // },[loading,currentObj])

  if (loading) return <p>loading</p>;
  if (error) return <p>error {error.message}</p>;
  if (!loading) console.log(data.rockets);

  return (
    <>
      <Modal
        centered
        open={propp.model}
        onOk={() => propp.setModel(false)}
        onCancel={() => propp.setModel(false)}
        footer={null}
        width={400}
      >
        <div className="header">
          <img src={rocketImage} className="rocket_img" alt="" />
          <div>
            <span 
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <h2>{propp.model ? propp.obj.mission_name : null}</h2>
              <p className="status">success</p>
            </span>
            <p style={{fontSize:"12px"}}>{propp.model ? propp.obj.rocket.rocket_name : null}</p>
            <span>
              <img src={nasa} className="nasa" alt="" />
              <img src={wiki} className="wiki" alt="" />
              <img src={utube} className="utube" alt="" />
            </span>
          </div>
        </div>
        <span>
          <p className="details">{propp.model ? propp.obj.details : null}</p>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
        </span>
        <table className="modal_tabledata" >
        <tr>
          <td>Flight Number </td>
          <td>{propp.model ? propp.obj.rocket.rocket_name : null}</td>
        </tr>
        <tr className="row_data">
          <td>Mission Name</td>
          <td>{propp.model ? propp.obj.mission_name : null}</td>
        </tr>
        <tr className="row_data">
          <td>Rocket Type</td>
          <td>v1.0</td>
        </tr>
        <tr className="row_data">
          <td>Rocket Name </td>
          <td>{propp.model ? propp.obj.rocket.rocket_name : null}</td>
        </tr>
        <tr className="row_data">
          <td>Manufacturer </td>
          <td>SpaceX</td>
        </tr>
        <tr className="row_data">
          <td>Nationality</td>
          <td>SpaceX</td>
        </tr>
        <tr className="row_data">
          <td>Launch Date</td>
          <td>{propp.model ? moment.utc(propp.obj.launch_date_utc).format("D MMMM YYYY HH:mm") : null}</td>
        </tr>
        <tr className="row_data">
          <td>Payload Type</td>
          <td>Dragon 1.0</td>
        </tr>
        <tr className="row_data" >
          <td>Orbit</td>
          <td>ISS</td>
        </tr>
        <tr className="row_data">
          <td>Launch Site </td>
          <td>CCAFS SLC 40</td>
        </tr>
        </table>
      </Modal>
    </>
  );
};

export default Model;
