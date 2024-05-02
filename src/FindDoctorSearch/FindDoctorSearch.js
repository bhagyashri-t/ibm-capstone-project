import { Card } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import './FindDoctorSearch.css';


function FindDoctorSearch() {


    return (
        <Card variant="outline" className="search-doctor-card">
            <h4>Find doctor at your own ease</h4>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
            <OutlinedInput
                id="outlined-adornment-search"
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    >
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
                }
                label="Search"
            />
        </FormControl>
        </Card>
    )
}

export default FindDoctorSearch;