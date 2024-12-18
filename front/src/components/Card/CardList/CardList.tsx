import React from "react";
import styles from "./CardList.module.css";

interface CardListProps {
    children: React.ReactNode;
}

const CardList = ({children} : CardListProps) => {
  return <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3"> {children} </div>;         
  
};

export default CardList;
