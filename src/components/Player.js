import React, { Component } from "react";
import "./Player.css";

function Player(props) {
    return (
        <div className="player">
            <span> {props.name} </span>
            <span> {props.elo} </span>
        </div>
    )
}

export default Player;