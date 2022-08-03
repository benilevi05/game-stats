import { Table, TableBody, TableHead, TableRow, TableCell, TableContainer } from '@mui/material';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const GamingTable = () => {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(true);
    const [pageIndex, setPageIndex] = useState(1)

    const siteKey = '6a3718ed183e4327abfb31dadfff8852'
    const pageSize = 30;

    useEffect(() => {
        loading && axios.get(`https://api.rawg.io/api/games`, {
            params: {
                key: siteKey,
                page_size: pageSize,
                page: pageIndex
            }
        }).then((res) => { setResponse(res.data); setLoading(false) })

    }, [pageIndex])

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> Game </TableCell>
                            <TableCell> Metacritic </TableCell>
                            <TableCell> Average Playtime </TableCell>
                            <TableCell> ESRB Rating </TableCell>
                        </TableRow>
                    </TableHead>
                    {!loading && <TableBody>
                        {response.results.map((data, index) => {
                            let esrb = null
                            let metacritic = null
                            if (data.esrb_rating === null || data.esrb_rating === undefined) {
                                esrb = "No Data"
                            } else {
                                esrb = data.esrb_rating.name
                            }
                            if (data.metacritic === null || data.metacritic === undefined) {
                                metacritic = "No Data"
                            } else {
                                metacritic = data.metacritic
                            }
                            return (<TableRow key={index}>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{metacritic}</TableCell>
                                <TableCell>{data.playtime} hours</TableCell>
                                <TableCell>{esrb}</TableCell>
                            </TableRow>)
                        })}
                    </TableBody>}
                </Table>
            </TableContainer>
            <p>Page Number: <input type="number" onChange={(event) => { if (event.target.value > 0) { setPageIndex(event.target.value) }; setLoading(true) }}></input></p>
        </div>
    )
}

export default GamingTable