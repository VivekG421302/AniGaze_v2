// import React, { useState } from "react";
// import "../styles/Dummy556.css";
// import ranks from "../Data/Ranks";

// function Dummy556() {
//   const [activeTab, setActiveTab] = useState("week");

//   const renderChart = (label) => (
//     <div className="pinWrapper">
//       {ranks.map((title, index) => (
//         <div className="pinBody" key={index}>
//           <div className="rankSpan">
//             <h1>{index + 1}</h1>
//           </div>
//           <div
//             className="imgSpan"
//             style={{
//               backgroundImage: `url("/ranks/${index + 1}.jpg")`,
//             }}
//           ></div>
//           <div className="DetailsSpan">
//             <h3>{title}</h3>
//             <p>Thrill, Action, Adventure</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="chartsBody">
//       <div className="chartsBodyWrapper">
//         <div className="chartNav">
//           <h2>Trend Board</h2>
//           <div className="chartController">
//             <span
//               className={`chartSwitches ${activeTab === "today" ? "active" : ""}`}
//               onClick={() => setActiveTab("today")}
//             >
//               Today
//             </span>
//             <span
//               className={`chartSwitches ${activeTab === "week" ? "active" : ""}`}
//               onClick={() => setActiveTab("week")}
//             >
//               Week
//             </span>
//             <span
//               className={`chartSwitches ${activeTab === "month" ? "active" : ""}`}
//               onClick={() => setActiveTab("month")}
//             >
//               Month
//             </span>
//           </div>
//         </div>

//         <div className="chartWrapper">
//           <div
//             id="chart-today"
//             className={`chartArea ${activeTab === "today" ? "active" : ""}`}
//           >
//             <h3>Today</h3>
//             {renderChart("today")}
//           </div>
//           <div
//             id="chart-week"
//             className={`chartArea ${activeTab === "week" ? "active" : ""}`}
//           >
//             <h3>Week</h3>
//             {renderChart("week")}
//           </div>
//           <div
//             id="chart-month"
//             className={`chartArea ${activeTab === "month" ? "active" : ""}`}
//           >
//             <h3>Month</h3>
//             {renderChart("month")}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dummy556;
import React from 'react'
// src="https://api.telegram.org/file/bot8135993773:AAEHtoITVdrGU1l_SU-HBvmSKpMfY1F5FCM/videos/file_0.mp4"

function Dummy556() {
  return (
    <div>
      <video 
      src="https://api.telegram.org/file/bot935683073:AAEHtoITVdrGU1l_SU-HBvmSKpMfY1F5FCM/videos/file_0.mp4"
      // src="/Media/1/S1/E24.mp4"
      controls
      ></video>
    </div>
  )
}

export default Dummy556