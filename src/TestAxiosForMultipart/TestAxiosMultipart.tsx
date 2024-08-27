import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

const delimeter = "======boundary======";

function TestAxiosMultipart({}: Props) {
  const [render, setRender] = useState(<></>);

  useEffect(() => {
    setResult();
  }, []);

  const setResult = () => {
    const uri = {
      uri: "http://localhost:5000/TagDataBuildRt/GetTagCorrectionsRange",
      from: 0,
      to: 15,
    };
    getMultipartWithRange(uri).then((x: any[]) => {
      setRender(
        <>
          <div>
            {x.map((y: any) => {
              return <p>{JSON.stringify(y.headers)}</p>;
            })}
          </div>
          <div>
            {x.map((y: any) => {
              return <p>{JSON.stringify(y.body)}</p>;
            })}
          </div>
        </>
      );
    });
  };
  return (
    <>
      <div>TestAxiosMultipart</div>;{render}
    </>
  );
}

type GetOptions = {
  uri: string;
  from: number;
  to: number;
};
const getMultipartWithRange = (opt: GetOptions): Promise<any[]> => {
  const prom = axios
    .get(opt.uri, {
      headers: {
        Range: `Items=${opt.from}-${opt.to}`,
      },
    })
    .then((response) => {
      const parts = response.data.split(`--${delimeter}`);
      const result = parts
        .map((part: { split: (arg0: string) => [any, any] }) => {
          const [headers, body] = part.split("\r\n\r\n");
          if (body !== undefined) {
            const parsedBody = JSON.parse(body);
            return { headers: parseHeaders(headers), body: parsedBody };
          }
          return null;
          // Handle other content types as needed
        })
        .filter((x: any | null) => x != null);
      return result;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
  return prom;
};

const parseHeaders = (input: string): { [key: string]: any } => {
  const split = input
    .split("\r\n")
    .filter((x) => x !== null && x !== undefined && x !== "");
  const result: { [key: string]: any } = {};
  split.forEach((el) => {
    if (el != null) {
      const [headerName, headerValue] = el.split(":");
      result[headerName] = headerValue.trim();
    }
  });
  return result;
};

export default TestAxiosMultipart;
