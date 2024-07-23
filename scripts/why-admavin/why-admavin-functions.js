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
      messageDiv.style.backgroundImage = 'url("../../assets/1.png")';
      break;

    case 2:
      messageHeading.innerText = "ROBUST VERIFIED ALGORITHMS";
      messageText.innerText =
        "We constantly enhance our Algorithms and verify them through our collaboration with India's premier Technology Institutions like IIT Madras and other Industry sources.";
      messageDiv.style.backgroundImage = 'url("../../assets/2.png")';

      break;
    case 3:
      messageHeading.innerText = "END TO END WORKFLOWS";
      messageText.innerText =
        "Proprietary or Confidential data? You can upload your media and data layers in your own secure server under a white-labeled Application.";
      messageDiv.style.backgroundImage = 'url("../../assets/3.png")';

      break;

    case 4:
      messageHeading.innerText = "MAPS IMAGES & SCORECARDS";
      messageText.innerText =
        "Clients love visuals. Our Tools provide automated and customizable visualization for your presentations and reports.";
      messageDiv.style.backgroundImage = 'url("../../assets/4.png")';

      break;

    case 5:
      messageHeading.innerText = "END TO END WORKFLOWS";
      messageText.innerText =
        "Analyze Geographies - Plan OOH Campaigns - Contact Media Owners - Setup and Monitor Campaigns. All on a Single Platform.";
      messageDiv.style.backgroundImage = 'url("../../assets/5.png")';

      break;

    case 6:
      messageHeading.innerText = "SUPPORT";
      messageText.innerText =
        "Learning to adapt, to data driven media markets? We support you in this journey and walk you through the data.";
      messageDiv.style.backgroundImage = 'url("../../assets/6.png")';

      break;
  }

  messageDiv.style.backgroundRepeat = "no-repeat";
  messageDiv.style.backgroundSize = "contain";
  messageDiv.style.backgroundPosition = "center";
}
