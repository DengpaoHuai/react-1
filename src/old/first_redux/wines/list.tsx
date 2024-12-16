import { useEffect } from "react";
import { getWines } from "../../../services/wine.service";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setAllWines } from "../../../store/actions/wine-actions";

const List = () => {
  const wines = useSelector((state: RootState) => state.wine.wines);
  const dispatch = useDispatch();

  useEffect(() => {
    //  getWines().then((data) => dispatch(setAllWines(data)));
  }, []);

  return (
    <div>
      <h1>Wines</h1>
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
