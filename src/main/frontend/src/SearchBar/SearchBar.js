import React, { useContext } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Basic, StockBasicContext } from "../APIContext/SearchAPI";


export default function SearchBar() {
    const [searchValue, setSearchValue] = React.useState('aapl');
    const { basicInfo, setBasicInfo } = useContext(StockBasicContext)

    // Basic(searchValue,setBasicInfo)

    const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchButtonClick = () => {
        console.log(`Search for "${searchValue}"`);
        Basic(searchValue, setBasicInfo)
    };

    return (
        <div>
            <TextField
                label="SearchMeStockMore"
                variant="outlined"
                size="small"
                value={searchValue}
                onChange={handleSearchInputChange}
                InputProps={{
                    endAdornment: (
                        <IconButton onClick={handleSearchButtonClick}>
                            <SearchIcon />
                        </IconButton>
                    ),
                }}
            />
        </div>
    );
}

