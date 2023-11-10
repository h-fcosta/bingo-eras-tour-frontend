import { useEffect, useState } from "react";
import { ISong } from "../../interface/ISong";
import GenerateGrid from "./GenerateGrid";
import api from "../../api";
import "./Grid.css";
import { cacheSongs, getCachedSongs } from "../../db/cacheFunctions";
import "bulma/css/bulma.min.css";

export default function GridTable() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ISong[]>([]);

  const columns = 7;

  useEffect(() => {
    async function fetchData() {
      const cachedData = await getCachedSongs();

      if (cachedData) {
        setData(cachedData);
        setLoading(false);
      } else {
        try {
          const response = await api.get<ISong[]>("/songs");

          const fetchedData = response.data;

          await cacheSongs(fetchedData);

          setData(fetchedData);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <table className="table is-bordered is-fullwidth">
          <tbody>
            <GenerateGrid columns={columns} data={data} />
          </tbody>
        </table>
      )}
    </>
  );
}
