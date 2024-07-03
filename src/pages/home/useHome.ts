import React, { useCallback, useEffect, useState } from "react";
import { Product } from "../../Services/FakeApi";
import { TypeRequestFakeAPIEnum } from "../../enums/typeRequestFakeAPI";
import { IItemDTO } from "../../@types/itemFake";

export const useHome = () => {
  const [pizzas, setPizzas] = useState([] as IItemDTO[]);
  const [burgers, setBurgers] = useState([] as IItemDTO[]);

  const getPizzas = useCallback(() => {
    Product.get({
      query: TypeRequestFakeAPIEnum.pizza,
      number: 6,
      offset: 14,
    }).then(({ data }) => {
      setPizzas(data.menuItems);
    });
  }, []);

  const getBurgers = useCallback(() => {
    Product.get({
      query: TypeRequestFakeAPIEnum.burger,
      number: 6,
      offset: 606,
    }).then(({ data }) => {
      setBurgers(data.menuItems);
    });
  }, []);

  useEffect(() => {
    getBurgers();
    getPizzas();
  }, []);

  return { pizzas, burgers };
};
