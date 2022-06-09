import { Button, TextField, Snackbar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import Airtable from "airtable";

const Form = (props: any) => {
  const [value, setValue] = useState<string>("");
  const [ready, setReady] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [snackMessage, setSnackMessage] = useState<string>("");

  const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  }).base("appMHW3IvfzJLc5IU");

  const handleInput = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    setSnackMessage("Wprowadzono nazwę uzytkownika");
    setOpen(true);

    localStorage.setItem("username", value);

    base("Table 1").create(
      [
        {
          fields: {
            Name: value,
          },
        },
      ],
      function (err: any, records: any) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record: any) {
          console.log(record.getId());
        });
      }
    );
  };

  useEffect(() => {
    if (value.length < 3) {
      setError("Nazwa za krótka");
      setReady(false);
      return;
    }
    if (value.length > 20) {
      setError("Nazwa za długa");
      setReady(false);
      return;
    }
    if (value.includes(" ")) {
      setError("Nazwa zawiera nieprawidłowe znaki");
      setReady(false);
      return;
    }
    setReady(true);
  }, [value]);

  useEffect(() => {
    let valueToSet = "";
    const localStorageData = localStorage.getItem("username");
    if (!!localStorageData) {
      valueToSet = localStorageData;
    } else {
      if (!!props?.defaultValue) {
        valueToSet = props?.defaultValue;
      }
    }
    if (valueToSet) {
      setSnackMessage("Wczytano nazwę uzytkownika");
      setOpen(true);
      setValue(valueToSet);
    }
  }, [props]);

  return (
    <>
      <h1>
        Witaj{" "}
        {localStorage.getItem("username")
          ? localStorage.getItem("username")
          : "przybyszu"}
        !
      </h1>
      <div style={styles.container}>
        <TextField
          id="outlined-basic"
          label="Nazwa użytkownika"
          variant="outlined"
          color={`${ready ? "success" : "error"}`}
          onChange={handleInput}
          value={value}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          color="success"
          disabled={!ready}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </div>
      <p style={styles.error}>{!ready && error}</p>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        message={snackMessage}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

const styles = {
  container: {
    display: "flex",
  },
  error: {
    color: "red",
  },
};

export default Form;
