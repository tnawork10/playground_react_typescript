import { useEffect, useState } from "react";
import { PartialContentContext } from "./RangeContentContext";
import axiosMod from "axios";

type RangeContentParams = {
  url: string;
  rangeStart?: number;
  rangeEnd?: number;
  children?: any;
};

function RangeContent(params: RangeContentParams) {
  const [data, setData] = useState({});
  // начало запрашиваемого отрезка (включительно)
  const [rangeStart, setrangeStart] = useState(params?.rangeStart ?? 0);
  // конец запрашиваемого отрезка (включительно)
  const [rangeEnd, setrangeEnd] = useState(params?.rangeEnd ?? 0);
  // фильтры для поиска контента
  const [options, setOptions] = useState({});
  const [url, setUrl] = useState(params.url);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    axiosMod
      .get(url, {
        headers: {
          "Content-Range": `Items ${rangeStart}-${rangeEnd}/*`,
        },
      })
      .then(function (x) {
        //x.config.headers
        setData({
          date: x.data,
          Headers: x.headers,
          customHeader: x.headers["x-some-xd"],
          resp: x,
        });
        // setRefresh(1);
      })
      .catch((e) => {
        setData(e);
      });
  }, [rangeStart, rangeEnd, options, url]);

  return (
    <PartialContentContext.Provider
      value={{
        data: data,
        rangeStart: rangeStart,
        setRangeStart: setrangeStart,
        rangeEnd: rangeEnd,
        setRangeEnd: setrangeEnd,
        options: options,
        setOptions: setOptions,
      }}
    >
      <>
        <p>{JSON.stringify(data, null, 2)}</p>
        {params.children}
      </>
    </PartialContentContext.Provider>
  );
}

export default RangeContent;
