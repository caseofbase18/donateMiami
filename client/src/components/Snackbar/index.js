import React from 'react';
import { useSnackbar } from 'react-simple-snackbar';

export default function SignupAlert() {
    const [openSnackbar, closeSnackbar] = useSnackbar();

    return (
        <div>
            <button onClick={() => openSnackbar('New user added successfully!')}>
                Click me to open the Snackbar!
      </button>
            <button onClick={closeSnackbar}>
                Click me to close the Snackbar programmatically.
      </button>
        </div>
    )
}