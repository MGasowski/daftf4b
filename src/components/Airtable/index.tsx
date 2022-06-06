import { Avatar, Card, CardHeader, CircularProgress } from "@mui/material";
import Airtable from "airtable";
import { useState } from "react";

import { format } from "fecha";

const AirtableComp = () => {
  const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  }).base("appMHW3IvfzJLc5IU");

  const [data, setData] = useState([]);

  base("Table 1")
    .select({
      maxRecords: 5,
      view: "Grid view",
      sort: [{ field: "Time", direction: "desc" }],
    })
    .eachPage((result: any) => {
      const data = result.map((el: any) => el.fields);
      setData(data);
    });

  if (data.length < 1) return <CircularProgress />;
  return (
    <div className="container">
      <p>Ostatni przybysze</p>
      {data.map((el: any) => (
        <Card sx={{ margin: 2, width: "100%" }} key={`${el.Name}${el.Time}`}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                {el.Name.substring(0, 1)}
              </Avatar>
            }
            title={el.Name}
            subheader={format(new Date(el.Time), "dddd MMMM Do, YYYY")}
          />
        </Card>
      ))}
    </div>
  );
};

export default AirtableComp;
