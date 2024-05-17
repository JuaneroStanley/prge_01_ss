import React from "react";
import MediaCard from "./Card";

export default function Dashboard() {
  const inputList = [
    {
      name: "Janek",
      surname: "Dandrzej",
      content: "jakiś opis",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
    {
      name: "Oliver",
      surname: "Szymański",
      content: "jakiś opis",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
    {
      name: "Piotr",
      surname: "Sochacki",
      content: "jakiś opis",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
  ];
  return (
    <div>
      {inputList.map(({ name, surname, content, image }) => {
        return (
          <MediaCard
            name={name}
            surname={surname}
            content={content}
            image={image}
          />
        );
      })}
    </div>
  );
}
