// import { useCallback, useState } from "react";

// interface IUseLocalStorageProps {
//   storageKey: string;
//   initialValue?: unknown;
// }

// export const useLocalStorage = ({
//   storageKey,
//   initialValue,
// }: IUseLocalStorageProps) => {
//   const [state, setState] = useState(() => {
//     try {
//       const storageValue = localStorage.getItem(storageKey);
//       return storageValue ? JSON.parse(storageValue) : initialValue;
//     } catch {
//       return initialValue;
//     }
//   });

//   const setValue = useCallback(
//     (value: unknown) => {
//       try {
//         setState(value);
//         localStorage.setItem(storageKey, JSON.stringify(value));
//       } catch (error) {
//         console.error(error);
//       }
//     },
//     [storageKey]
//   );

//   return [state, setValue];
// };

import { useState, useEffect, useCallback } from "react";

interface IUseSyncLocalStorageProps<T> {
  storageKey: string;
  initialValue: T;
}

export const useLocalStorage = <T,>({
  storageKey,
  initialValue,
}: IUseSyncLocalStorageProps<T>) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(storageKey);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key", error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        localStorage.setItem(storageKey, JSON.stringify(valueToStore));
      } catch (error) {
        console.error("Error setting localStorage key", error);
      }
    },
    [storageKey, storedValue]
  );

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === storageKey) {
        try {
          setStoredValue(
            event.newValue ? JSON.parse(event.newValue) : initialValue
          );
        } catch (error) {
          console.error("Error parsing localStorage key", error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [storageKey, initialValue]);

  return [storedValue, setValue] as const;
};
