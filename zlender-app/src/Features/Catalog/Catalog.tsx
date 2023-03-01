import { Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import AppPagination from "../../App/Components/AppPagination";
import CheckboxButtons from "../../App/Components/CheckboxButtons";
import RadioButtonGroup from "../../App/Components/RadioButtonGroup";
import LoadingComponent from "../../App/Layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../App/Store/configureStore";
import { fetchFilters, fetchProductsAsync, productSelectors, setPageNumber, setProductParams } from "./catalogSlice";
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
    const {productsLoaded, filtersLoaded, brands, types, productParams, metaData} = useAppSelector(state => state.catalog);

    useEffect(() => {
      if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch]);

    useEffect(() => {
        if (!filtersLoaded) dispatch(fetchFilters());
      }, [dispatch, filtersLoaded]);

    if(!filtersLoaded) return <LoadingComponent message='Loading products...'/>
    
    return(
        <Grid container columnSpacing={4}>
          <Grid item xs={3}>
            <Paper sx={{mb:2}}>
              <ProductSearch />
            </Paper>
            <Paper sx={{mb:2, padding: 2}}>
             <RadioButtonGroup
             selectedValue={productParams.orderBy} 
             options={sortOptions}
             onChange={(e) => dispatch(setProductParams({orderBy: e.target.value}))}
             />
            </Paper>

            <Paper  sx={{mb:2, padding: 2}}>
              <CheckboxButtons 
                items={brands}
                checked={productParams.brands}
                onChange={(items: string[]) => dispatch(setProductParams({brands: items}))}
              />
            </Paper>

            <Paper  sx={{mb:2, padding: 2}}>
              <CheckboxButtons 
                items={types}
                checked={productParams.types}
                onChange={(items: string[]) => dispatch(setProductParams({types: items}))}
              />
            </Paper>

          </Grid>
          <Grid item xs={9}>
            <ProductList products={products}/>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={9} sx={{marginBottom: 2}}>
            {metaData &&
            <AppPagination 
              metaData={metaData}
              onPageChange={(page: number) => dispatch(setPageNumber({pageNumber: page}))}
            />}
          </Grid>
        </Grid>
    )
}