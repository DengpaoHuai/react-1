import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type Planet = {
  name: string;
  uid: number;
  url: string;
};

type PlanetResponse = {
  results: Planet[];
  next: string | null;
  previous: string | null;
  total_records: number;
};

const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const getPlanets = async (page: number) => {
  await waitFor(1000);
  const response = await fetch(
    "https://swapi.tech/api/planets?limit=10&page=" + page
  );
  const data = await response.json();
  return data;
};

export const usePlanets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const planetKey = ["planets", currentPage];

  const planetQueryOptions = {
    queryKey: planetKey,
    queryFn: () => getPlanets(currentPage),
  };

  const planets = useQuery<PlanetResponse>(planetQueryOptions);

  return {
    ...planets,
    increment: () => setCurrentPage(currentPage + 1),
    decrement: () => setCurrentPage(currentPage - 1),
  };
};
