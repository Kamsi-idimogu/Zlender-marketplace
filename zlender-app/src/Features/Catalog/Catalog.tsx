import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Pagination, Paper, Radio, RadioGroup, Typography } from "@mui/material";
import { useEffect } from "react";
import LoadingComponent from "../../App/Layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../App/Store/configureStore";
import { fetchFilters, fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";

const sortOptions = [
  {value: 'name', label: 'Alpabetical'},
  {value: 'priceDesc', label: 'Price - High to low'},
  {value: 'price', label: 'Price - Low to high'},
]

export default function Catalog(){ 
    const products = useAppSelector(productSelectors.selectAll);
    const dispatch = useAppDispatch();
    const {productsLoaded, status, filtersLoaded, brands, types} = useAppSelector(state => state.catalog);

    useEffect(() => {
      if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch]);

    useEffect(() => {
        if (!filtersLoaded) dispatch(fetchFilters());
      }, [dispatch, filtersLoaded]);

    if(status.includes('pending')) return <LoadingComponent message='Loading products...'/>
    
    return(
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Paper sx={{mb:2}}>
              <ProductSearch />
            </Paper>
            <Paper sx={{mb:2, padding: 2}}>
              <FormControl>
                <RadioGroup>
                  {sortOptions.map(({value, label}) => (
                    <FormControlLabel value={value} control={<Radio />} label={label} key={value} />
                  ))}
                </RadioGroup>
              </FormControl>
            </Paper>

            <Paper  sx={{mb:2, padding: 2}}>
              <FormGroup>
                {brands.map(brand => (
                  <FormControlLabel control={<Checkbox />} label={brand} key={brand} />
                ))}
              </FormGroup>
            </Paper>

            <Paper  sx={{mb:2, padding: 2}}>
              <FormGroup>
                {types.map(type => (
                  <FormControlLabel control={<Checkbox />} label={type} key={type} />
                ))}
              </FormGroup>
            </Paper>

          </Grid>
          <Grid item xs={9}>
            <ProductList products={products}/>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={9}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Typography>
                Displaying 1-6 of 20 items
              </Typography>
              <Pagination 
                color='secondary'
                size='large'
                count={10}
                page={2}
              />
            </Box>
          </Grid>
        </Grid>
    )
}