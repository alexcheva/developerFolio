import React from "react";
import "./skillChart.css";
import {coderRankSkillChart} from "../../portfolio";
import CodersRankSkillsChart from "@codersrank/skills-chart";

// register web component as <codersrank-skills-chart> element
window.customElements.define("codersrank-skills-chart", CodersRankSkillsChart);

export default function Skillchart() {
  if (coderRankSkillChart.display) {
    return (
      <div className="githubactivity-section" id="githubActivity">
        <h1 className="githubactivity-heading">Skill Chart</h1>
        <div className="githubactivity-card-container">
          <codersrank-skills-chart
            username={coderRankSkillChart.userName}
            labels={true}
            skills={
              "JavaScript, React, TypeScript, JSON, TSQL, PHP, CSS, HTML, SCSS, Nodejs, Express"
            }
            legend={true}
            branding={false}
          ></codersrank-skills-chart>
        </div>
      </div>
    );
  }
  return null;
}
