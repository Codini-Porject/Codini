"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface IdentityState {
  user: {
    id: number;
    email: string;
    password: string;
    role: string | null;
    token: string | null;
    image: string;
  } | null;
}

interface IdentityContextType {
  user: {
    id: number;
    role: string | null;
    email: string;
    password: string;
    image: string;
  } | null;
  setUser: (
    user: {
      id: number;
      role: string | null;
      email: string;
      password: string;
      image: string;
    } | null
  ) => void;
  clearUser: () => void;
}

const IdentityContext = createContext<IdentityContextType | undefined>(
  undefined
);

type IdentityAction =
  | { type: "SET_USER"; payload: { id: number } }
  | { type: "CLEAR_USER" };

const identityReducer = (
  state: IdentityState,
  action: IdentityAction
): IdentityState => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "CLEAR_USER":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

interface IdentityProviderProps {
  children: ReactNode;
}

const IdentityProvider: React.FC<IdentityProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(identityReducer, { user: null });

  const setUser = (user: {
    id: number;
    role: string | null;
    email: string;
    password: string;
    token: string;
    image: string;
  }) => {
    console.log("hu");

    dispatch({
      type: "SET_USER",
      payload: user ? user : { id: -1, role: null, token: null },
    });
  };

  const clearUser = () => {
    dispatch({ type: "CLEAR_USER" });
  };

  return (
    <IdentityContext.Provider value={{ user: state.user, setUser, clearUser }}>
      {children}
    </IdentityContext.Provider>
  );
};

const useIdentity = (): IdentityContextType => {
  const context = useContext(IdentityContext);
  if (!context) {
    throw new Error("useIdentity must be used within an IdentityProvider");
  }
  return context;
};

export { IdentityProvider, useIdentity };
