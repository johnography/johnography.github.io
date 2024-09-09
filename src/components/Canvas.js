import React, { useState } from "react";
import "./Canvas.css";

export default function Canvas() {
  return (
    <>
      <h2>Canvas</h2>
      <div className="container neushadow">
        <div className="Canvas">
          <canvas className="Body"></canvas>
        </div>
      </div>
    </>
  );
}
