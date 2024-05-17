import React from "react";
import MediaCard from "./Card";

export default function Dashboard() {
  const inputList = [
    { name: "Janek", surname: "Dandrzej", content: "jakiś opis" },
    { name: "Oliver", surname: "Szymański", content: "jakiś opis" },
    { name: "Piotr", surname: "Sochacki", content: "jakiś opis" },
  ];
  return (
    <div>
      {inputList.map(({ name, surname, content }) => {
        return <MediaCard name={name} surname={surname} content={content} />;
      })}
    </div>
  );
}
