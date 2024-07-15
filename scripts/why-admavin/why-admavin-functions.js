function showMessage(clickedButton, number) {
  const messageDiv = document.getElementById("messageDiv");
  const messageText = document.getElementById("messageText");
  const messageHeading = document.getElementById("messageHeading");
  console.log(number);
  const allButtons = document.querySelectorAll(".showMsgButton");
  allButtons.forEach((button) => {
    button.style.borderColor = "gray";
  });
  clickedButton.style.borderColor = "#00c09b";

  switch (number) {
    case 1:
      messageHeading.innerText = "TRUSTED DATA SOURCES";
      messageText.innerText =
        "Get - “Up to Date” location specific data and analytics for more than 700 cities and towns across India, including real time Traffic, Demographics and Population spread data.";
        
      break;

    case 2:
      messageHeading.innerText = "ROBUST VERIFIED ALGORITHMS";
      messageText.innerText =
        "We constantly enhance our Algorithms and verify them through our collaboration with India's premier Technology Institutions like IIT Madras and other Industry sources.";
      break;
    case 3:
      messageHeading.innerText = "END TO END WORKFLOWS";
      messageText.innerText =
        "Proprietary or Confidential data? You can upload your media and data layers in your own secure server under a white-labeled Application.";
      break;

    case 4:
      messageHeading.innerText = "MAPS IMAGES & SCORECARDS";
      messageText.innerText =
        "Clients love visuals. Our Tools provide automated and customizable visualization for your presentations and reports.";
      break;

    case 5:
      messageHeading.innerText = "END TO END WORKFLOWS";
      messageText.innerText =
        "Analyze Geographies - Plan OOH Campaigns - Contact Media Owners - Setup and Monitor Campaigns. All on a Single Platform.";
      break;

    case 6:
      messageHeading.innerText = "SUPPORT";
      messageText.innerText =
        "Learning to adapt, to data driven media markets? We support you in this journey and walk you through the data.";
      break;
  }

  // canvas element for creating background Imgae
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  // setting canvas styles
  canvas.width = 200;
  canvas.height = 200;
  ctx.font = "100px kanti";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#00c09b";

  // Clear canvas,to remove any  any previous content
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the chosen number on the canvas
  ctx.fillText(number.toString(), canvas.width / 2, canvas.height / 2);

  // Set chosen number as background image text

  const imgData = ["", "", ""]; 
 
  messageDiv.style.backgroundImage = `<img src="${imgData[number-1]}"/>`;
  messageDiv.style.backgroundRepeat = "no-repeat";
  messageDiv.style.backgroundSize = "cover";
  messageDiv.style.backgroundPosition = "center";
}
