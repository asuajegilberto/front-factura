import React,{useEffect,useState} from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {useStyles} from './style'
import axios from 'axios'
import config from '../../config/enviroment'
import useRouter from '../../utils/useRouter'
import Button from '@material-ui/core/Button';

export default function List() {
    const classes = useStyles();

    const [state, setstate] = useState([])

    const { history } = useRouter()
    useEffect(() => {

        const header = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        };
    
        let url = config.api + '/api/invoice'
        axios.post(url,null,header).then(res =>{
            if(res.status === 200){
                setstate(res.data)
            }
        })
    }, [])

    const handleClic =()=>{
        history.push(`/new/invoice`)
    }

    return (
        <>
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>description</TableCell>
                    <TableCell align="right">product/Service</TableCell>
                    <TableCell align="right">subTotal</TableCell>
                    <TableCell align="right">discount</TableCell>
                    <TableCell align="right">total</TableCell>
                    <TableCell align="right">email</TableCell>

                </TableRow>
                </TableHead>
                <TableBody>
                {state.map((row) => (
                    <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                        {row.description}
                    </TableCell>
                    <TableCell align="right">{row.productService}</TableCell>
                    <TableCell align="right">{row.subTotal}</TableCell>
                    <TableCell align="right">{row.discount}</TableCell>
                    <TableCell align="right">{row.total}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>

                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <Button variant="contained" color="primary" onClick={handleClic}>
                Crear
            </Button>
        </>
    )
}
