import axios from "axios"


const fetchData = async () => {
    const [nbaData, mlbData] = await Promise.all([
        axios.get(process.env.REACT_APP_NBA),
        axios.get(process.env.REACT_APP_MLB)
    ]);
    return [nbaData.data, mlbData.data];
}

export {fetchData}