import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaFacebook, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faFutbol,
  faMapMarker,
  faVenusMars,
  FaTwitter,
} from "@fortawesome/free-solid-svg-icons";
import "./LeagueDet.css";
import { useParams } from "react-router";
import male from "../../Images/male.png";
import female from "../../Images/female.png";
import { Link } from "react-router-dom";

const LeagueDet = () => {
  const { idTeam } = useParams();
  const [league, setLeague] = useState({});
  const {
    strTeam,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strTeamBadge,
    strTeamBanner,
    strDescriptionEN,
    strYoutube,
    strTwitter,
    strFacebook,
  } = league;

  useEffect(() => {
    const teamUrl = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
    fetch(teamUrl)
      .then((res) => res.json())
      .then((data) => setLeague(data.teams[0]));
  }, [idTeam]);

  let genderImg;
  if (strGender === "Male") {
    genderImg = <img className=" mx-5" id="genderImage" src={male} alt="" />;
  } else if (strGender === "Female") {
    genderImg = <img className=" mx-5" id="genderImage" src={female} alt="" />;
  } else {
    genderImg = <img className=" mx-5" id="genderImage" src={strTeamBanner} alt="" />;
  }

  let hBg = {
    backgroundPosition: "center",

    backgroundImage: ` linear-gradient(to bottom, rgba(255, 255, 255, 0.52), rgba(0, 0, 0, 0.73)),
         url(${strTeamBanner})`,
    backgroundSize: "cover",
    height: "20vh",
    width: "auto",
  };

  return (
    <div className="" id='detailBg'>
      <header id="header1" style={hBg} className="text-center">
        <img className="my-5" src={strTeamBadge} alt="" />
      </header>

      <section className="container bg-info d-flex my-5 rounded p-5">
        <div className="row ">
          <div className="col-md-6 col-12 ">
            <h1>
              <strong>{strTeam}</strong>
            </h1>{" "}
            <br />
            <p>
              <h6>
                {" "}
                <FontAwesomeIcon icon={faMapMarker} /> Founded: {intFormedYear}
              </h6>
              <h6>
                {" "}
                <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
              </h6>
              <h6>
                {" "}
                <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}
              </h6>
              <h6>
                {" "}
                <FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}
              </h6>
            </p>
          </div>
          <div className=" col-md-6 col-12 my-3">{genderImg}</div>
        </div>
      </section>
      <p className="container text-light">
        {strDescriptionEN} <br />
      </p>
      <p className="container text-center w-25 p-3 rounded">
        <Button
          className="m-2 rounded-circle"
          variant="info"
          href={`https://${strTwitter}`}
          target="_blank"
        >
          <FaTwitterSquare />
        </Button>
        <Button
          className="m-2 rounded-circle"
          variant="primary"
          href={`https://${strFacebook}`}
          target="_blank"
        >
          <FaFacebook />
        </Button>
        <Button
          className="m-2 rounded-circle"
          variant="danger"
          href={`https://${strYoutube}`}
          target="_blank"
        >
          <FaYoutube />
        </Button>
      </p>
    </div>
  );
};

export default LeagueDet;
