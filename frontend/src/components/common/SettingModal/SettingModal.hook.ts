import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCategoryList } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { Category } from '@/types/room';

export const useCategoryListQuery = () => {
  const { roomId } = useParams();

  const categoryListQuery = useQuery({
    queryKey: [QUERY_KEYS.categoryList, Number(roomId)],
    queryFn: async () => {
      return await getCategoryList(Number(roomId));
    },
  });

  return { ...categoryListQuery, categoryList: categoryListQuery.data?.categoryList };
};

export const useDropdown = (selectedCategory?: Category) => {
  const [category, setCategory] = useState(selectedCategory);

  const handleClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const clickedCategory = target.value as Category;

    if (!clickedCategory) return;

    setCategory(clickedCategory);
  };

  useEffect(() => {
    setCategory(selectedCategory);
  }, [selectedCategory]);

  return { category, handleClickOption };
};

export const useTotalRound = () => {
  const [totalRound, setTotalRound] = useState(5);

  const handleClickRound = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;

    setTotalRound(Number(target.textContent));
  };

  return { totalRound, handleClickRound };
};

export const useTimerPerRound = () => {
  const [timerPerRound, setTimerPerRound] = useState(10);

  const handleClickTimer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;

    setTimerPerRound(Number(target.value));
  };

  return { timerPerRound, handleClickTimer };
};
