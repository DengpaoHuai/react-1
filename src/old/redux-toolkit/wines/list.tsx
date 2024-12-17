import { useEffect } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { setAllWines } from "../../../store/thunk-actions/wine-thunk";

const useWines = () => {
  const { wines, isLoading } = useSelector((state: RootState) => state.wine);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAllWines());
  }, []);

  return { wines, isLoading };
};

const List = () => {
  const { wines, isLoading } = useWines();

  return (
    <div>
      <h1>Wines</h1>
      {isLoading && <p>Loading...</p>}
      <Link to="/wines/create">Create</Link>
      {wines?.map((wine) => (
        <div key={wine._id}>
          <h2>{wine.name}</h2>
          <p>{wine.region}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
