import React from 'react'

const About = () => (
  <div id="main-about">
    <h1 className="title">About</h1>
    <div className="main-about-content">
      <div className="card">
        <p>Hi, my fellow @chtwrsbot players! This website is a non-profit effort to make a compendium of resourses and a statistics nerd dashboard. I'll try to keep it updated.</p>
        <p>Any suggestion you might have you can PM me in telegram (@AllanGalera).</p>
        <h4>API</h4>
        <p className="mobile-little">https://cwhelperapi.allangalera.com</p>
        <p>For those interested I have exposed the api that I use to get the data for this website.</p>
        <p>Here a short explanation about it's routes.</p>
        <table>
          <thead>
            <tr>
              <th>Endpoint</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/battles</td>
              <td>last battle results</td>
            </tr>
            <tr>
              <td>/battles/score</td>
              <td>get battle results filtered with score, gold and stock and sorted by score.</td>
            </tr>
            <tr>
              <td>/battles/battle_id</td>
              <td>get the results of a specific battle</td>
            </tr>
            <tr>
              <td>/battles/battle_id/score</td>
              <td>get battle results filtered with score, gold and stock and sorted by score.</td>
            </tr>
            <tr>
              <td>/lastbattle</td>
              <td>get last battle results filtered with score, gold and stock and sorted by score.</td>
            </tr>
            <tr>
              <td>/lastbattle/skip/number</td>
              <td>get last battle results with an offset of 'number' filtered with score, gold and stock and sorted by score.</td>
            </tr>
            <tr>
              <td>/battles/cumulativescore</td>
              <td>cumulative score since 12/01/2017 16h UTC</td>
            </tr>
            <tr>
              <td>/worldtop</td>
              <td>Current castles ranking</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default About
