import {useState, useEffect, useMemo, useCallback, useRef} from "react"
import axios from "axios"

const App = () => {

const [nbaData, setNbaData] = useState([]);
const [mlbData, setMlbData] = useState([]);
const [boxScore, setBoxScore] = useState([]);

const fetchData = async () => {
    const [nbaData, mlbData] = await Promise.all([
        axios.get(process.env.REACT_APP_NBA),
        axios.get(process.env.REACT_APP_MLB)
    ]);
    setNbaData(nbaData.data);
    setMlbData(mlbData.data);
}

useEffect(()=>{
    fetchData();
},[]);

console.log(nbaData)

useEffect(()=>{
    if(nbaData.away_period_scores && nbaData.home_period_scores){

        const awayScore1 = nbaData.away_period_scores[0]
        const awayScore2 = nbaData.away_period_scores[1]
        const awayScore3 = nbaData.away_period_scores[2]
        const awayScore4 = nbaData.away_period_scores[3]

        const homeScore1 = nbaData.home_period_scores[0]
        const homeScore2 = nbaData.home_period_scores[1]
        const homeScore3 = nbaData.home_period_scores[2]
        const homeScore4 = nbaData.home_period_scores[3]

        setBoxScore(
            <section>
                <h1>{nbaData.league} League</h1>

                    <h2>{nbaData.away_team.full_name}</h2>
                    <h2>{nbaData.home_team.full_name}</h2>

                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>T</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{nbaData.away_team.abbreviation}</td>
                                <td>{awayScore1}</td>
                                <td>{awayScore2}</td>
                                <td>{awayScore3}</td>
                                <td>{awayScore4}</td>
                                <td>{awayScore1+awayScore2+awayScore3+awayScore4}</td>
                            </tr>
                            <tr>
                                <td>{nbaData.home_team.abbreviation}</td>
                                <td>{homeScore1}</td>
                                <td>{homeScore2}</td>
                                <td>{homeScore3}</td>
                                <td>{homeScore4}</td>
                                <td>{homeScore1+homeScore2+homeScore3+homeScore4}</td>
                            </tr>
                        </tbody>
                    </table>
            </section>
        ) 
    }
   
},[nbaData.away_period_scores, nbaData.league])


return(
    
        <main>
            {boxScore}
        </main>
 
    )
}

export default App;