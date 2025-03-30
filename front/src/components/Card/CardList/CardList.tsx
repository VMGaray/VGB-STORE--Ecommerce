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

