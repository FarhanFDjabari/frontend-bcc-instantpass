import { useContext, useState } from "react";
import { useMemo } from "react";
import { createContext } from "react";
const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [likedMovies, setLikedMovies] = useState([]);
  const memoedValue = useMemo(
    () => ({ likedMovies, setLikedMovies }),
    [likedMovies]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
