import {fetchData} from "./components/FetchData"
import {useState, useEffect, useMemo, useCallback} from "react"

const App = () => {

const [nbaData, setNbaData] = useState([]);
const [mlbData, setMlbData] = useState([]);

useEffect(()=>{

    const getData = async() => {
        await fetchData()
            .then(data=>{
                setNbaData(data[0]);
                setMlbData(data[1]);
            })
    }

    getData()

},[])

console.log(nbaData)

return(
    <main>
           <h1>League: {nbaData.league}</h1>
    <table>
        <thead>
            <tr>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th></th>
            </tr>
        </tbody>
    </table>
    </main>
 
    )
}

export default App;