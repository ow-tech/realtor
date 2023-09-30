import React from "react";
import {
  TextField,
  Button,
  FormControl,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Form({ title, fields, buttonLabel }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={3}>
      <Grid item xs={12} md={6}>
        <form>
          <h1>{title}</h1>
          {fields.map((field) => (
            <Grid item xs={12} key={field.id}>
              {field.type === "password" ? (
                <FormControl
                  sx={{ marginBottom: "1rem", width: "55%" }}
                  variant="outlined"
                  fullWidth
                >
                  <InputLabel htmlFor={field.id}>{field.label}</InputLabel>
                  <OutlinedInput
                    id={field.id}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label={field.label}
                    required={field.required}
                    fullWidth
                  />
                </FormControl>
              ) : (
                <TextField
                  sx={{ marginBottom: "1rem", width: "55%" }}
                  id={field.id}
                  label={field.label}
                  type={field.type}
                  fullWidth
                  required={field.required}
                />
              )}
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ width: "55%", marginBottom: "1rem" }}
            >
              {buttonLabel}
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default Form;
