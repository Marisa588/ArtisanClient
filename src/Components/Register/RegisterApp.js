import React, {useState, useEffect} from "react";

const RegisterApp = () => {


    // Return -> Add html Code to be returned here
    return (
        <div className="main">
            <h4>This is a test of the registerApp</h4>

            <form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form>

        </div>
    )
}

export default RegisterApp