import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { applyRoomSetting, getCategoryList } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { Category, RoomSetting } from '@/types/room';

export const useCategoryListQuery = () => {
  const { roomId } = useParams();

  const categoryListQuery = useQuery({
    queryKey: [QUERY_KEYS.categoryList, Number(roomId)],
    queryFn: async () => {
      return await getCategoryList();
    },
  });

  return { ...categoryListQuery, categoryList: categoryListQuery.data?.categoryList };
};

export const useApplyRoomSetting = () => {
  const { roomId } = useParams();

  return useMutation({
    mutationFn: async (roomSetting: RoomSetting) =>
      await applyRoomSetting(Number(roomId), roomSetting),
  });
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

export const useTotalRound = (selectedTotalRound?: number) => {
  const [totalRound, setTotalRound] = useState(selectedTotalRound);

  const handleClickRound = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;

    setTotalRound(Number(target.textContent));
  };

  useEffect(() => {
    setTotalRound(selectedTotalRound);
  }, [selectedTotalRound]);

  return { totalRound, handleClickRound };
};

export const useTimerPerRound = (selectedTimer?: number) => {
  const [timerPerRound, setTimerPerRound] = useState(selectedTimer);

  const handleClickTimer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;

    setTimerPerRound(Number(target.value));
  };

  useEffect(() => {
    setTimerPerRound(selectedTimer);
  }, [selectedTimer]);

  return { timerPerRound, handleClickTimer };
};
