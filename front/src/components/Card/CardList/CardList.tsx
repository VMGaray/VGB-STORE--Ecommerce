import React from "react";

interface CardListProps {
  children: React.ReactNode;
}

const CardList = ({ children }: CardListProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {children}
    </div>
  );
};

export default CardList;

/*import React from "react";
import styles from "./CardList.module.css";

interface CardListProps {
    children: React.ReactNode;
}

const CardList = ({ children }: CardListProps) => {
    return (
        <div className={styles.CardList}>
            {children}
        </div>
    );
};

export default CardList;

*/
