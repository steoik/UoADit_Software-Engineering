import React from "react";
import Map from "./Map";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import AuthContext from "../Shared/Auth";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const categories = [{ label: "Αθηναίων" }, { label: "Ζωγράφου" }];

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("submit");
};

export default function Search() {
  const { AuthData } = React.useContext(AuthContext);

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <Grid container columnGap={5} mt={3} mb={3}>
          <Grid>
            <Autocomplete
              multiple
              filterSelectedOptions
              disablePortal
              options={categories}
              sx={{ width: 300, mt: 2 }}
              renderInput={(params) => <TextField {...params} label="Κατηγορίες" />}
            />
          </Grid>
          <Grid>
            <TextField
              sx={{ width: 300, mt: 2 }}
              label="λέξεις-κλειδιά"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <Button
              type="submit"
              variant="text"
              sx={{ BackgroundColor: "var(--primary-color)", mt: 2, height: AuthData.isLoggedIn ? "2.5rem" : "3.5rem" }}
            >
              ΑΝΑΖΗΤΗΣΗ
            </Button>
            {AuthData.isLoggedIn && (
              <FormGroup>
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }} />} label={<div
                  style={{
                    fontSize: 14
                  }}
                >
                  Αποθήκευση
                </div>} sx={{

                }} />
              </FormGroup>
            )}
          </Grid>
        </Grid>
      </form>

      <Map />
      <Footer />
    </>
  );
}
