import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/220/140";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Areas of Practice.
    </h1>
    <hr />
    <ul>
      <li>International Humanitarian Law</li>
      <li>Public/Private International Law</li>
      <li>Alternative Dispute Resolution</li>
      <li>Intellectual Property Law</li>
      <li>Cyber Laws</li>
      <li>Corporate & Commercial Laws</li>
      <li>Environmental Law</li>
    </ul>
    <hr />
    <div>
      <img
        src="https://images.pexels.com/photos/6593883/pexels-photo-6593883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Lady Justice"
        className="img-resize"
      />
      <img
        src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Gavel"
        className="img-resize"
      />
      <img
        src="https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Lawyer writing brief"
        className="img-resize"
      />
      <img
        src="https://images.pexels.com/photos/6077325/pexels-photo-6077325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Not guilty"
        className="img-resize"
      />
      <img
        src="https://images.pexels.com/photos/618158/pexels-photo-618158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Document signing"
        className="img-resize"
      />
      <img src={img + "?grayscale"} alt="Random"></img>
      <img src={img + "?grayscale"} alt="Random"></img>
      <img src={img + "?grayscale"} alt="Random"></img>
      <img src={img + "?grayscale"} alt="Random"></img>
      <img src={img + "?grayscale"} alt="Random"></img>
    </div>
  </div>,
  document.getElementById("root")
);
