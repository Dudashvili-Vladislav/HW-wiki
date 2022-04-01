import React, { useState } from "react";
import classes from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addArticlesAction } from "../../redux/reducers/articles.js";
import { fetchArticles } from "../../redux/asyncActions/articles";

export const Home = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);

  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("click");
      dispatch(fetchArticles(value));
      
    }
  };

  return (
    <div className={classes.home}>
      <div onKeyDown={onEnter}>
        <input
          className={classes.home__input}
          value={value}
          onChange={onChange}
          placeholder="Serach articles.."
        />
      </div>
    </div>
  );
};
