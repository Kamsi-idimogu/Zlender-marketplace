import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../App/Api/agent";
import AppPagination from "../../App/Components/AppPagination";
import LoadingComponent from "../../App/Layout/LoadingComponent";
import { Order } from "../../App/Models/order";
import { MetaData } from "../../App/Models/pagination";
import { currencyFormat } from "../../App/Util/util";
import OrderDetailed from "./OrderDetailed";

export default function Orders() {
    const [orders, setOrders] = useState<Order[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedOrderNumber, setSelectedOrderNumber] = useState(0);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const listLength = 10; //desired number of orders dispayed on the page

    const metadata: MetaData = {
        currentPage: currentPageNumber,
        totalPages: Math.floor(orders?.length! / listLength) + 1 ?? 1,
        pageSize: listLength,
        totalCount: orders?.length ?? 0,
    }

    useEffect(() => {
        agent.Orders.list()
            .then(orders => setOrders(orders))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if(loading) return <LoadingComponent message="Loading orders..." />

    if(orders?.length === 0) return <Typography variant="h2">No Order has been placed yet</Typography>

    if (selectedOrderNumber > 0)
        return (
            <OrderDetailed 
                order={orders?.find(o => o.id === selectedOrderNumber)!}
                setSelectedOrder={setSelectedOrderNumber}
            />
        )

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Order number</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">Order Date</TableCell>
                        <TableCell align="right">Order Status</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders?.map((order, index) => (
                        ((currentPageNumber - 1) * metadata.pageSize <= index && index < (currentPageNumber - 1) * metadata.pageSize + metadata.pageSize) 
                        && 
                        <TableRow
                        key={order.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {order.id}
                        </TableCell>
                        <TableCell align="right">{currencyFormat(order.total)}</TableCell>
                        <TableCell align="right">{order.orderDate.split('T')[0]}</TableCell>
                        <TableCell align="right">{order.orderStatus}</TableCell>
                        <TableCell align="right">
                            <Button onClick={() => setSelectedOrderNumber(order.id)}>View</Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                orders && (
                <AppPagination 
                metaData={metadata}
                onPageChange={(page: number) => setCurrentPageNumber(page)}
                />
                )
            }
        </>
    )
}