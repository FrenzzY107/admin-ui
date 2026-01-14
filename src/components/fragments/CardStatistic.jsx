import React from "react";
import Card from "../elements/Card";
import BarsDataset from "../elements/BarsDataset";

function CardStatistic({ data }) {
  return (
    <Card
      title="Statistics"
      desc={
        <>
          <select className="font-bold text-2xl">
            <option>Weekly Comparison</option>
          </select>

          {/* GUARD */}
          {data ? (
            <BarsDataset dataset={data} />
          ) : (
            <p className="text-sm text-gray-400 text-center mt-4">
              Loading chart...
            </p>
          )}
        </>
      }
    />
  );
}

export default CardStatistic;
