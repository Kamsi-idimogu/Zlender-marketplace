import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { UseStoreContext } from "../../App/Context/StoreContext";
import { currencyFormat } from "../../App/Util/util";

export default function BasketSummary() {
    const {basket} = UseStoreContext();
    const subtotal = basket?.items.reduce((sum, item) => sum + item.quantity*item.price, 0) ?? 0; //if LHS is null then subtotal is 0
    const deliveryFee = subtotal > 10_000 ? 0 : 500;

    return (
        <>
            <TableContainer component={Paper} variant={'outlined'}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{currencyFormat(subtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Delivery fee*</TableCell>
                            <TableCell align="right">{currencyFormat(deliveryFee)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{currencyFormat(subtotal + deliveryFee)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{fontStyle: 'italic'}}>*Orders over $100 qualify for free delivery</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}